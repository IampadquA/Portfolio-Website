//@ts-nocheck - TODO: Fix type errors later
"use client"
import CourseInfoSection from '@/components/CourseInfoSection'
import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/Button';
import { Footer } from '@/components/Footer';
import { useState, useEffect } from 'react';
import Web3 from 'web3';
import CourseSubABI from './abis/CourseSubABI.json';
import EncryptButton from '@/components/EnrollButton';

const CONTRACT_ADDRESS = "0xcb0A2D6d0ed46dab0B0CD40754ba1053e5272151";

const page = () => {

  const [web3,setWeb3] = useState(null);
  const [account,setAccount] = useState("");
  const [hasAccess,setHasAccess] = useState(false);

  const [remainingHours,setRemainingHours] = useState(0);
  const [coursePrice,setCoursePrice] = useState("");

  const [loading,setLoading] = useState(false);
  const [error,setError] = useState("");

  const [contract,setContract] = useState(null);
  const [isOwner,setIsOwner] = useState(false);

  const [contractBalance, setContractBalance] = useState(0);

  const [isMobile, setIsMobile] = useState(false);
  
  const [courseHeading,setCourseHeading] = useState('Being Goat Dev Course');
  const [courseText,setCourseText] = useState("If you're reading this, I've likely caught your attention. If you're a hiring manager or interested in working with me, let's connect right away. I bring a unique set of skills and perspective to the table that could be valuable for your team. Time to talk and explore possibilities together. Your next great collaboration might just be a message away.")

  const [teacher,setTeacher] = useState("Tarik Efe Gulmez");
  const [teacherAccount,setTeacherAcccount] = useState('0x441c...a02d');

  const [isOffered,setIsOffered] = useState(true);
  const [offerer,setOfferer] = useState('Harvard');

  const [score,setScore] = useState(4.6);
  const [reviewCount,setReviewCount] = useState(6456);

  const [userRole,setUserRole] = useState('owner');

  const [buttonText,setButtonText] = useState("Connect Account");
  const [buttonFunction,setButtonFunction] = useState(null);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize); 

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const parseErrorMessage = (error) => {
    if (error.data?.message) {
      return error.data.message.replace("execution reverted:", "").trim();
    }
    return error.message || "Transaction failed";
  };

  
  const checkAccess = async (
    userAddress,
    web3Instance = web3,
    contractInstance = contract
  ) => {
    if (!contractInstance || !userAddress) return;
  
    setLoading(true);
    try {
      // Add owner check to the Promise.all
      const [access, hours, price, owner] = await Promise.all([
        contractInstance.methods.hasAccess(userAddress).call(),
        contractInstance.methods.getRemainingHours(userAddress).call(),
        contractInstance.methods.coursePrice().call(),
        contractInstance.methods.owner().call(), // Get the owner
      ]);
  
      // Check ownership directly with fresh data
      const isCurrentUserOwner = userAddress.toLowerCase() === owner.toLowerCase();
      setIsOwner(isCurrentUserOwner); // Update state with fresh value
  
      setHasAccess(access);
      setRemainingHours(Number(hours));
      setCoursePrice(web3Instance.utils.fromWei(price, "ether"));
  
      console.log("Is user the owner:", isCurrentUserOwner);
  
      // Use the fresh ownership value instead of state
      if (isCurrentUserOwner) {
        try {
          const balance = await contractInstance.methods
            .getContractBalance()
            .call({ from: userAddress });
          setContractBalance(web3Instance.utils.fromWei(balance, "ether"));
        } catch (err) {
          console.log("Balance check failed - user might not be owner");
          console.error(err);
        }
      }
    } catch (err) {
      console.error("Access check error:", err);
      setError(parseErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        try {
          const web3Instance = new Web3(window.ethereum);
          setWeb3(web3Instance);

          const contractInstance = new web3Instance.eth.Contract(
            CourseSubABI,
            CONTRACT_ADDRESS
          );
          setContract(contractInstance);

          // Check if there is a stored account in localStorage
          const storedAccount = localStorage.getItem("connectedAccount");
          if (storedAccount) {
            setAccount(storedAccount);
            const owner = await contractInstance.methods.owner().call();
            setIsOwner(storedAccount.toLowerCase() === owner.toLowerCase());
            await checkAccess(storedAccount, web3Instance, contractInstance);
          }
        } catch (err) {
          console.error("Initialization error:", err);
          setError("Failed to initialize: Please check your wallet connection");
        }
      }
    };

    initWeb3();
  }, []);

  const connectWallet = async () => {
    setError("");
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const selectedAccount = accounts[0];
      setAccount(selectedAccount);
      localStorage.setItem("connectedAccount", selectedAccount);

      if (contract) {
        const owner = await contract.methods.owner().call();
        const isOwnerAccount =
          selectedAccount.toLowerCase() === owner.toLowerCase();
        setIsOwner(isOwnerAccount);
        await checkAccess(selectedAccount, web3, contract);
      }
    } catch (err) {
      console.error("Connection error:", err);
      setError("Failed to connect wallet. Please try again.");
    }
  };

  // Purchase access
  const purchaseAccess = async () => {
    setLoading(true);
    setError("");
    try {
      const tx = await contract.methods.buyAccess().send({
        from: account,
        value: web3.utils.toWei(coursePrice, "ether"),
      });
      console.log("Purchase successful:", tx);
      await checkAccess(account);
    } catch (err) {
      console.error("Purchase error:", err);
      setError(parseErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  // Owner: withdraw all
  const withdrawAll = async () => {
    setLoading(true);
    setError("");
    try {
      if (!isOwner) {
        throw new Error("Only owner can withdraw funds");
      }
      const tx = await contract.methods.withdrawAll().send({ from: account });
      console.log("Withdrawal successful:", tx);
      await checkAccess(account);
    } catch (err) {
      console.error("Withdrawal error:", err);
      setError(parseErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  // Consume access
  const consumeAllAccess = async () => {
    setLoading(true);
    setError("");
    try {
      const tx = await contract.methods
        .consumeAllAccess()
        .send({ from: account });
      console.log("Access consumed:", tx);
      await checkAccess(account);
    } catch (err) {
      console.error("Consume access error:", err);
      setError(parseErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  // Listen for account changes
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", async (accounts) => {
        if (accounts.length > 0) {
          const newAccount = accounts[0];
          setAccount(newAccount);
          localStorage.setItem("connectedAccount", newAccount);
          if (contract) {
            const owner = await contract.methods.owner().call();
            setIsOwner(newAccount.toLowerCase() === owner.toLowerCase());
            await checkAccess(newAccount);
          }
        } else {
          setAccount("");
          setIsOwner(false);
          setHasAccess(false);
          setRemainingHours(0);
          localStorage.removeItem("connectedAccount");
        }
      });

      return () => {
        window.ethereum.removeListener("accountsChanged", () => {});
      };
    }
  }, [contract]);

  // Periodically refresh access status
  useEffect(() => {
    if (account) {
      const interval = setInterval(() => {
        checkAccess(account);
      }, 30000);
      return () => clearInterval(interval);
    }
  }, [account]);


  useEffect(() => {
    updateButtonState();
  }, [account, hasAccess, isOwner]);

  function updateButtonState() {
    if (account === "") {
      setButtonText("Connect Account");
      setButtonFunction(() => connectWallet);
    }else if (isOwner) {
      setButtonText("Withdraw All");
      setButtonFunction(() => withdrawAll);
    } else if (!hasAccess) {
      setButtonText("Purchase Access");
      setButtonFunction(() => purchaseAccess);
    } else {
      setButtonText("Consume Access");
      setButtonFunction(() => consumeAllAccess);
    }
  }

  useEffect(() => {
    DecideUserRole();
  }, [isOwner, hasAccess]);

  function DecideUserRole(){
    if(isOwner){
      setUserRole("owner");
    }else if(hasAccess){
      setUserRole("student");
    }else{
      setUserRole("visitor");
    }
  }

  return (
    <div className="relative w-screen flex flex-col items-center justify-center bg-bg-white ">

    {loading && (
          <div className="w-full h-full flex justify-center items-center text-center content-center font-semibold text-base sm:text-xl xl:text-2xl leading-8">
            Loading... Please wait
          </div>
      )}

      <span className='absolute w-full h-[530px] overflow-hidden top-0 left-0 z-0'>
        <Image src='/images/DynamicFinancialMarketDisplayBoard.jpeg' fill alt='SomeCoolImage'/>
      </span>
      
      <section className='relative mt-16 w-full h-fit flex flex-col gap-12'>
        <div className='w-full  flex items-center justify-center'>
          <h1 className='font-Onest font-bold text-center text-[30px] sm:text-[64px] lg:text-8xl tracking-[-2%] text-bg-white'>
            {courseHeading}
          </h1>
        </div>
        <div>
          <CourseInfoSection text={courseText} isMobile={isMobile}>
            <div className='w-full   flex flex-col gap-6 items-center px-16 pt-8'>
              <div className='w-full h-fit flex flex-col gap-6  '>
                <div className='h-fit flex flex-col font-urbanist'>
                  <label className='w-full font-semibold text-base sm:text-xl xl:text-2xl leading-8'>
                    from {teacher}
                  </label>
                  <label className='font-normal text-sm sm:text-base'>
                    account {teacherAccount}
                  </label>
                </div>
                <div className='w-full h-fit flex flex-wrap justify-between items-center gap-y-4'>
                  <span className='flex gap-[10px] items-center px-5 py-2 border-2 border-black rounded-lg '>
                    {isOffered && <label className='font-urbanist font-semibold text-base sm:text-xl xl:text-2xl leading-8 '>
                      offered by {offerer}
                    </label>}
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.8909 3.50552C11.2718 2.47602 12.728 2.47602 13.1089 3.50552L15.005 8.62966C15.1248 8.95333 15.38 9.20853 15.7036 9.32829L20.8278 11.2244C21.8573 11.6053 21.8573 13.0615 20.8278 13.4424L15.7036 15.3385C15.38 15.4583 15.1248 15.7135 15.005 16.0371L13.1089 21.1613C12.728 22.1908 11.2719 22.1908 10.8909 21.1613L8.9948 16.0371C8.87503 15.7135 8.61984 15.4583 8.29617 15.3385L3.17203 13.4424C2.14253 13.0615 2.14253 11.6053 3.17203 11.2244L8.29616 9.32829C8.61984 9.20853 8.87503 8.95333 8.9948 8.62966L10.8909 3.50552Z" stroke="url(#paint0_linear_313_651)" stroke-width="2" stroke-linejoin="round"/>
                        <defs>
                        <linearGradient id="paint0_linear_313_651" x1="11.3067" y1="2.7334" x2="23.2016" y2="3.0573" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#36D0F2"/>
                        <stop offset="1" stop-color="#D74EDA"/>
                        </linearGradient>
                        </defs>
                      </svg>
                  </span>
                  <span className='flex gap-6 items-center px-5 py-2 '>
                    <label className='font-semibold leading-8 text-2xl'
                      style={{ background: "linear-gradient(91.56deg, #36D0F2 45.16%, #D74EDA 105.51%)",WebkitBackgroundClip: "text",WebkitTextFillColor: "transparent",}}>
                      {score}
                    </label>
                    {!isMobile && <svg width="161" height="25" viewBox="0 0 161 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M11.9951 3.54731C12.2017 3.12876 12.7985 3.12876 13.0051 3.54731L15.6791 8.96543C15.7611 9.13164 15.9196 9.24684 16.1031 9.27349L22.0823 10.1423C22.5442 10.2094 22.7286 10.7771 22.3944 11.1029L18.0678 15.3203C17.9351 15.4497 17.8745 15.636 17.9058 15.8187L18.9272 21.7738C19.0061 22.2338 18.5233 22.5847 18.1101 22.3675L12.7621 19.5558C12.5981 19.4696 12.4021 19.4696 12.238 19.5558L6.89002 22.3675C6.47689 22.5847 5.99404 22.2338 6.07294 21.7738L7.09432 15.8187C7.12565 15.636 7.06509 15.4497 6.93236 15.3203L2.60573 11.1029C2.2715 10.7771 2.45594 10.2094 2.91783 10.1423L8.89708 9.27349C9.0805 9.24684 9.23906 9.13164 9.32109 8.96543L11.9951 3.54731Z" fill="#0D0D0D" stroke="black" stroke-width="2" stroke-linejoin="round"/>
                                  <path d="M45.9951 3.54731C46.2017 3.12876 46.7985 3.12876 47.0051 3.54731L49.6791 8.96543C49.7611 9.13164 49.9196 9.24684 50.1031 9.27349L56.0823 10.1423C56.5442 10.2094 56.7286 10.7771 56.3944 11.1029L52.0678 15.3203C51.9351 15.4497 51.8745 15.636 51.9058 15.8187L52.9272 21.7738C53.0061 22.2338 52.5233 22.5847 52.1101 22.3675L46.7621 19.5558C46.5981 19.4696 46.4021 19.4696 46.238 19.5558L40.89 22.3675C40.4769 22.5847 39.994 22.2338 40.0729 21.7738L41.0943 15.8187C41.1256 15.636 41.0651 15.4497 40.9324 15.3203L36.6057 11.1029C36.2715 10.7771 36.4559 10.2094 36.9178 10.1423L42.8971 9.27349C43.0805 9.24684 43.2391 9.13164 43.3211 8.96543L45.9951 3.54731Z" fill="#0D0D0D" stroke="black" stroke-width="2" stroke-linejoin="round"/>
                                  <path d="M79.9951 3.54731C80.2017 3.12876 80.7985 3.12876 81.0051 3.54731L83.6791 8.96543C83.7611 9.13164 83.9196 9.24684 84.1031 9.27349L90.0823 10.1423C90.5442 10.2094 90.7286 10.7771 90.3944 11.1029L86.0678 15.3203C85.9351 15.4497 85.8745 15.636 85.9058 15.8187L86.9272 21.7738C87.0061 22.2338 86.5233 22.5847 86.1101 22.3675L80.7621 19.5558C80.5981 19.4696 80.4021 19.4696 80.238 19.5558L74.89 22.3675C74.4769 22.5847 73.994 22.2338 74.0729 21.7738L75.0943 15.8187C75.1256 15.636 75.0651 15.4497 74.9324 15.3203L70.6057 11.1029C70.2715 10.7771 70.4559 10.2094 70.9178 10.1423L76.8971 9.27349C77.0805 9.24684 77.2391 9.13164 77.3211 8.96543L79.9951 3.54731Z" fill="#0D0D0D" stroke="black" stroke-width="2" stroke-linejoin="round"/>
                                  <path d="M113.995 3.54731C114.202 3.12876 114.798 3.12876 115.005 3.54731L117.679 8.96543C117.761 9.13164 117.92 9.24684 118.103 9.27349L124.082 10.1423C124.544 10.2094 124.729 10.7771 124.394 11.1029L120.068 15.3203C119.935 15.4497 119.874 15.636 119.906 15.8187L120.927 21.7738C121.006 22.2338 120.523 22.5847 120.11 22.3675L114.762 19.5558C114.598 19.4696 114.402 19.4696 114.238 19.5558L108.89 22.3675C108.477 22.5847 107.994 22.2338 108.073 21.7738L109.094 15.8187C109.126 15.636 109.065 15.4497 108.932 15.3203L104.606 11.1029C104.272 10.7771 104.456 10.2094 104.918 10.1423L110.897 9.27349C111.081 9.24684 111.239 9.13164 111.321 8.96543L113.995 3.54731Z" fill="#0D0D0D" stroke="black" stroke-width="2" stroke-linejoin="round"/>
                                  <path d="M147.995 3.54731C148.202 3.12876 148.798 3.12876 149.005 3.54731L151.679 8.96543C151.761 9.13164 151.92 9.24684 152.103 9.27349L158.082 10.1423C158.544 10.2094 158.729 10.7771 158.394 11.1029L154.068 15.3203C153.935 15.4497 153.874 15.636 153.906 15.8187L154.927 21.7738C155.006 22.2338 154.523 22.5847 154.11 22.3675L148.762 19.5558C148.598 19.4696 148.402 19.4696 148.238 19.5558L142.89 22.3675C142.477 22.5847 141.994 22.2338 142.073 21.7738L143.094 15.8187C143.126 15.636 143.065 15.4497 142.932 15.3203L138.606 11.1029C138.272 10.7771 138.456 10.2094 138.918 10.1423L144.897 9.27349C145.081 9.24684 145.239 9.13164 145.321 8.96543L147.995 3.54731Z" fill="url(#paint0_linear_313_460)" stroke="black" stroke-width="2" stroke-linejoin="round"/>
                                  <defs>
                                  <linearGradient id="paint0_linear_313_460" x1="138.5" y1="10.833" x2="158.5" y2="10.833" gradientUnits="userSpaceOnUse">
                                  <stop offset="0.49" stop-color="#0D0D0D"/>
                                  <stop offset="0.565" stop-color="#F2F2F2"/>
                                  </linearGradient>
                                  </defs>
                                  </svg>
                    }
                    <label className='font-urbanist font-normal text-xl'>
                      {reviewCount} review
                    </label>
                  </span>
                </div>
              </div>
              {account && <span className='flex gap-1 items-center font-urbanist font-normal text-base  leading-8'>
                <label>Your Role:</label>
                {isOwner ? <label style={{ background: "linear-gradient(91.56deg, #36D0F2 45.16%, #D74EDA 105.51%)",WebkitBackgroundClip: "text",WebkitTextFillColor: "transparent",}}>{userRole}</label>:
                <label>{userRole}</label> }
              </span>}
              <span className='flex flex-col gap-6 items-center'>
                <EncryptButton targetText={buttonText} className={`lg:min-h-14 ${buttonText === "Withdraw All" ? "bg-purple-accent lg:min-w-80" : "bg-blue-primary lg:min-w-72" }`} onClick={buttonFunction} />
                {isOwner ? <label className='font-urbanist font-semibold text-xl sm:text-2xl xl:text-3xl'>Current Amount in contract : {contractBalance} Eth</label> : 
                hasAccess ? <label className='font-urbanist font-semibold text-xl sm:text-2xl xl:text-3xl'>Remaining Hours : {remainingHours}</label> : <></>}
              </span>
            </div>
          </CourseInfoSection>
        </div>

      </section>
      <div className=' flex flex-wrap gap-3 md:gap-6 items-center lg:self-start lg:ml-16 p-3 mx-3 bg-text-p2 mt-10 rounded-lg'>
        <span className='flex items-center justify-center gap-4'>
          <i>
            <svg width="64" height="78" viewBox="0 0 64 78" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 15.001H51.3333M14 63.001H51.3333M46.6667 15.001V23.8387C46.6667 24.5289 46.4287 25.198 45.9928 25.7331L37.2029 36.5262C35.8458 38.1926 35.878 40.5462 37.2803 42.1774L45.9416 52.2528C46.4094 52.797 46.6667 53.4908 46.6667 54.2085V63.001M18.6667 15.001V23.8387C18.6667 24.5289 18.9047 25.198 19.3405 25.7331L28.1304 36.5262C29.4876 38.1926 29.4553 40.5462 28.053 42.1774L19.3917 52.2528C18.9239 52.797 18.6667 53.4908 18.6667 54.2085V63.001" stroke="#F2F2F2" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </i>
          <span className='flex flex-col'>
            <label className='font-Onest font-medium text-[28px] md:text-3xl xl:text-3xl leading-9 text-bg-white'>10 weeks</label>
            <label className='font-medium text-[20px] leading-9 text-bg-white'>8–12 hours per week</label>
          </span>
        </span>
        <span className='flex items-center justify-center gap-4'>
          <i>
            <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.6667 24.4383H50M17.4921 8.66699V12.7818M44.6667 8.66699V12.7813M44.6667 12.7813H18C13.5817 12.7813 10 16.4653 10 21.0098V48.4385C10 52.983 13.5817 56.667 18 56.667H44.6667C49.0849 56.667 52.6667 52.983 52.6667 48.4385L52.6667 21.0098C52.6667 16.4653 49.0849 12.7813 44.6667 12.7813ZM19.3333 34.0384H43.3333M19.3333 45.0098H43.3333" stroke="#F2F2F2" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </i>
          <span className='flex flex-col'>
            <label className='font-Onest font-medium text-[28px] md:text-3xl xl:text-3xl leading-9 text-bg-white'>Starts Mar 26, 2025</label>
            <label className='font-medium text-[20px] leading-9 text-bg-white'>Starts Mar 26, 2025</label>
          </span>
        </span>
      </div>
      <div className='h-full md:h-[50vh] flex items-end w-full '>
        <Footer/>
      </div>
    </div>
    
  )
}

export default page