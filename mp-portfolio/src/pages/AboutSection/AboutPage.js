

import React, { useState } from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image'
import { CoolButton } from '@/components/CoolButton';




export const AboutPage = ({ isMobile }) => {
    const texts = [
        "Full name is Tarık Efe Gülmez",
        "I am 19",
        "I am a student at Akdeniz University, majoring in Management Information Systems",
        "I have been creating digital content since 10th grade and I love it",
        "I was very enthusiastic and after much persistence, I completed a graphic design internship at an agency",
        "Now I am in my 2nd year and I want to gain more experience and improve my skills before graduation"
    ]

    const [buttonText,setButtonText] = useState("Hi Button");

    const [counter,setCounter] = useState(0);

    const handleButton = () => {
        setCounter(counter + 1);
        
        if (counter === 1){
            setButtonText("Hi!");
        }else if (counter === 5){
            setButtonText("Yes I get it, Hi");
        }else if (counter === 10){
            setButtonText("You are persistent, Hi");
        }else if (counter === 15){
            setButtonText("Keep Scrolling, Hi");
        }else if (counter === 20){
            setButtonText("I said Scroll");
        }
    }

    const mobileAbout = (
        <div className='flex flex-col w-screen gap-6 justify-items-center content-center '>
        <motion.h1
        initial={{ y : -10, opacity: 0 }}
        whileInView={{ y : 0, opacity: 1 }}
        viewport={{ margin : "-20px" , once : true }}
        transition={{ duration: 1 }}
        
        className='heading3 sm:text-[56px] text-center'>Who is Tarık ?</motion.h1>
        <motion.div 
        initial={{ scaleY: 0, opacity: 0 , transformOrigin: "top"} }
        whileInView={{ scaleY : 1, opacity: 1 }}
        viewport={{ once : true }}
        transition={{ duration: 1, delay : 1 }}
        
        className='w-full min-h-[333px] sm:h-[556px] p-5 overflow-hidden'>
            <div className='w-full h-full bg-placeholder'>
                    <motion.div
                        initial={{ opacity: 0 } }
                        whileInView={{ opacity: 1 }}
                        viewport={{ margin : "-20px" , once : true }}
                        transition={{ duration: 1, delay : 3 }}
                        className='sm:h-[556px]'
                    >
                        <Image src="/images/linkedinpp.png" width={1500} height={2000} alt="tarikefe" className='rounded-lg'/>
                    </motion.div>
            </div>
        </motion.div>
        <div className='w-full flex flex-col gap-9 sm:gap-16 px-8 justify-items-center font-urbanist font-semibold text-[16px] sm:text-[28px] leading-9'>
            {texts.map((text,index) => (
                <motion.p 
                initial={{ y : -10, opacity: 0 }}
                whileInView={{ y : 0, opacity: 1 }}
                viewport={{ margin : "-20px" , once : true }}
                transition={{ duration: 1 }}
                
                
                key={index} className='text-center'>{text}</motion.p>
            ))}
        </div>
    </div>
    );

    const tabletAbout = (
       <div className='flex flex-col w-full border-4 p-12 font-urbanist font-semibold text-[20px] leading-[36px] gap-6'>
            <div className='flex w-full'>
                <div className='flex flex-col gap-6'>
                    <h1 className='font-Onest font-bold text-[44px] leading-[56px] tracking-[%-2px] '>Who is Tarık ?</h1>
                    {texts.slice(0,4).map((text,index) => (
                        <p key={index}>{text}</p>
                    ))}
                </div>
                <div className='relative w-4/5 h-[360px] bg-placeholder flex-'>
                </div>
            </div>
            {texts.slice(4,10).map((text,index) => (
                        <p key={index}>{text}</p>
            ))}
       </div> 
    );

    const desktopAbout = (
        <div className='flex w-screen gap-10 p-14 content-center justify-items-center bg-bg-white'>
            <div className='flex flex-col gap-16 xl:gap-8'>
                <motion.h1
                initial={{ y : -10, opacity: 0 }}
                whileInView={{ y : 0, opacity: 1 }}
                viewport={{ margin : "-200px" , once : true }}
                transition={{ duration: 1 }}
                
                
                className='font-Onest font-bold text-[44px] leading-[56px] tracking-[%-2px] '>Who is Tarık ?</motion.h1>
                <div className='flex flex-col gap-8 xl:gap-4 font-urbanist font-semibold text-[20px] leading-[36px]'>
                    {texts.map((text,index) => (
                        < motion.p 

                        initial={{ y : -10, opacity: 0 }}
                        whileInView={{ y : 0, opacity: 1 }}
                        viewport={{ margin : "-200px" , once : true }}
                        transition={{ duration: 1 }}
                        
                        key={index}>{text}</motion.p>
                    ))}
                </div>
            </div>
                <div className='w-full h-fit flex flex-col gap-14 items-center justify-center'>
                    <motion.div
                    initial={{ scaleY: 0, opacity: 0 , transformOrigin: "top"} }
                    whileInView={{ scaleY : 1, opacity: 1 }}
                    viewport={{ margin : "-200px" , once : true }}
                    transition={{ duration: 1, delay : 1 }}
                    
                    className='relative w-4/5 max-w-[495px] h-[470px] rounded-lg bg-placeholder overflow-hidden '>
                        <motion.div
                        initial={{ opacity: 0 } }
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay : 2 }}>
                            <Image src="/images/linkedinpp.png" alt='tarikefe' width={1500} height={2000}  className='rounded-lg'/>    
                        </motion.div>
                    </motion.div>
                    <div className='relative w-4/5 max-w-[495px]'>
                        <CoolButton className={"self-start"} ButtonName={buttonText} onClick={handleButton}/>
                    </div>
                </div>
        </div>
    )


  return (
    <>
        { isMobile ? mobileAbout : desktopAbout }
    </>
  )
}

export default AboutPage;
