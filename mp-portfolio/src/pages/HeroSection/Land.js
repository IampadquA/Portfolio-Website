"use client";
import { motion } from "framer-motion";

export const Land = ({ className ,isMobile } ) => {
    const animationTime = 0;

    const mobileLand = (
        <div className={`flex flex-col h-full items-center gap-16 sm:gap-36 justify-center self-center ${className}`}>
            <div className="flex flex-col heading3 sm:text-[56px] sm:leading-[56px] gap-1 sm:gap-4 w-auto items-center ">
                <div className="flex">
                    <motion.h1
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1 + animationTime,}}
                    
                    >I am&nbsp; </motion.h1> 
                    <motion.label 
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.3+ animationTime,}}
                    
                    style={{ background: "linear-gradient(91.56deg, #36D0F2 45.16%, #D74EDA 105.51%)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",}}> Tarık</motion.label>
                </div>
                <motion.div 
                initial={{ scaleX: 0, opacity: 0 , transformOrigin: "left"} }
                animate={{ scaleX: 1, opacity: 1 , transformOrigin: "left"}}
                transition={{ delay: 2+ animationTime, duration : 1}}               
                className="w-6/12 h-[52px] sm:h-[64px] bg-placeholder">

                </motion.div>
                <motion.h2 
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.5+ animationTime,}}
                
                className="text-center"> a Student Developer</motion.h2>
                <motion.div 
                
                initial={{ scaleX: 0, opacity: 0 , transformOrigin: "left"} }
                animate={{ scaleX: 1, opacity: 1 , transformOrigin: "left"}}
                transition={{ delay: 2.5 + animationTime, duration : 1}}               
                className="w-8/12 h-[88px] sm:h-[124px] bg-placeholder">
                </motion.div>
            </div>
            <motion.label
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 3.5 + animationTime,}}
            
            className="heading6 sm:text-[32px]">
                who shoot for the&nbsp; 
                <motion.label
                style={{ background: "linear-gradient(91.56deg, #36D0F2 45.16%, #D74EDA 105.51%)",WebkitBackgroundClip: "text",WebkitTextFillColor: "transparent",}}>stars </motion.label>
            </motion.label>
        </div>
    );

    const desktopLand = (
        <div className="flex w-screen h-screen items-center justify-center">
            <div className="flex flex-col gap-4 lg:gap-7 xl:gap-10 text-[44px] lg:text-[64px] xl:text-[72px] font-Onest font-bold leading-[48px] lg:leading-[56px] tracking-[%-2px]">
                <div className="flex items-center gap-3">
                    <motion.h1 
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 + animationTime}}
                    
                    className=" text-nowrap ">I am&nbsp;
                        <motion.label
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.3+ animationTime,}}
                        
                        style={{ background: "linear-gradient(91.56deg, #36D0F2 45.16%, #D74EDA 105.51%)",WebkitBackgroundClip: "text",WebkitTextFillColor: "transparent",}} >Tarık</motion.label>
                    </motion.h1>
                    <motion.div 
                    initial={{ scaleX: 0, opacity: 0 , transformOrigin: "left"} }
                    animate={{ scaleX: 1, opacity: 1 , transformOrigin: "left"}}
                    transition={{ delay: 2+ animationTime, duration : 1}}    
                    
                    className="w-full h-[48px] lg:h-[56px] xl:h-[80px] bg-placeholder rounded-lg"/>
                </div>
                <div className="flex gap-3 items-center">
                    <motion.div 
                    initial={{ scaleX: 0, opacity: 0 , transformOrigin: "left"} }
                    animate={{ scaleX: 1, opacity: 1 , transformOrigin: "left"}}
                    transition={{ delay: 3.3+ animationTime, duration : 1}}   
                    
                    className="w-full h-[48px] lg:h-[56px] xl:h-[80px] bg-placeholder rounded-lg"/>
                    <motion.h1 
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 4.3+ animationTime,}}
                    
                    className="text-nowrap ">A Student Developer</motion.h1>
                </div>
                <motion.h1
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 5 + animationTime,}}
                
                >who shoot for the stars</motion.h1>
            </div>
        </div>
    );


  return (
    <>
      {isMobile ? mobileLand : desktopLand}
    </>
  )
}

export default Land;


