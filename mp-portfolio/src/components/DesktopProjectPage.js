import React, { useRef } from 'react'
import { PresantationGrid } from './PresantationGrid'
import { ProjectPagePath } from './ProjectPagePath'
import { useScroll, useTransform , motion } from 'framer-motion';

export const DesktopProjectPage = ({isDesktop}) => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start end" , "end start"]
    });

    const transform = useTransform(scrollYProgress, [0, 0.35], ["0%", "46%"]);
    const x = useTransform(scrollYProgress, [0.35, 0.5 , 0.7 , 0.8], ["0%", "-100%", "-100%", "-200%"]);
    const y = useTransform(scrollYProgress, [0.5, 0.6], ["0%", "-25%"]);
    const openerHeight = useTransform(scrollYProgress, [0.5, 0.75], ["0%", "100%"]);

    const opacity = useTransform(scrollYProgress, [0.6, 0.65], [0, 1]);
    const translateY = useTransform(scrollYProgress, [0.6, 0.65], [50, 0]);
    
    const opacityt = useTransform(scrollYProgress, [0.65, 0.70], [0, 1]);
    const translateYt = useTransform(scrollYProgress, [0.65, 0.70], [50, 0]);


    const text = [
        `TelepathyGame i a project that improve  my full stack web skills

        The Projects main purpose is to find out can i make a full functional website all by myself

        well in the begening of the project abviosly i cant but that answer does not stop me and i learned preetty the whole thing about web development and i did it `,
        `but i can not finish it because bla bla purposes 

        the websiten is working but when i play with my friends i did not like the game and i wanna change it some details and gameplay designs and now currently proiject this stuation and not on live  `,
        ` but you can look up the git hub page on my profile to wanna check out the code that i write 

        Some trees flourish, others die. Some cattle grow strong, others are taken by wolves. Some men are born rich enough and dumb enough to enjoy their lives. Ain't nothing fair.`,
        `but you can look up the git hub page on my profile to wanna check out the code that i write 

        Some trees flourish, others die. Some cattle grow strong, others are taken by wolves. Some men are born rich enough and dumb enough to enjoy their lives. Ain't nothing fair.`
        ]
    
    const heading = "TelepathyGame"

    const tabletPages = [
        (
            <>
                <PresantationGrid className={"h-[512px] m-10 "} />
                <div className='relative w-full flex flex-col gap-4  border-red-400'>
                    <h1 className='font-Onest font-bold text-[44px] leading-[56px] tracking-[-2%]'>{heading}</h1>
                    <div className='flex flex-col gap-6 font-urbanist font-normal text-base '> 
                        {text.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>
                </div>
            </>
        )
    ]

    const desktopPages = [
        (
            <>
                <PresantationGrid isDesktop={isDesktop} className={"h-[90vh] m-10"} />
            </>
        )
    ]
  return (
    <div ref={containerRef} className='relative h-[400vh]' >
        <motion.div className="sticky top-0 w-screen h-screen justify-items-center content-center overflow-hidden">
            <motion.div className='flex w-screen' style={{x , y}}>
                <ProjectPagePath transform={transform} />
                <div className='w-screen h-[200vh] flex flex-shrink-0'>
                    <motion.div 
                    style={{ height : openerHeight }}
                     className='relative w-full justify-items-center xl:w-2/3 xl:h-screen px-8 border-2 xl:border-x-0 border-bg-black overflow-hidden top-[25%] flex-shrink-0'>
                        { isDesktop ?  desktopPages :  tabletPages[0]}
                    </motion.div>
                    { isDesktop && 
                    <div className='relative flex flex-col top-[25%] gap-4 my-8'>
                        <motion.h1 className='font-Onest font-bold text-[44px] leading-[56px] tracking-[-2%]' style={{opacity , translateY}}>{heading}</motion.h1>
                            <motion.div className='flex flex-col gap-6 font-urbanist font-normal text-base pr-16  ' style={{ opacity: opacityt, y: translateYt }} > 
                                {text.map((item, index) => (
                                    <p key={index}>{item}</p>
                                ))}
                            </motion.div>
                    </div>}
                </div>
                <div className='w-screen h-[200vh] flex flex-shrink-0'>
                    {isDesktop && 
                    <div className='relative flex flex-col top-[25%] gap-4 my-8'>
                        <motion.h1 className='font-Onest font-bold text-[44px] leading-[56px] tracking-[-2%] pl-16' style={{opacity , translateY}}>{heading}</motion.h1>
                            <motion.div className='flex flex-col gap-6 font-urbanist font-normal text-base pl-16  ' style={{ opacity: opacityt, y: translateYt }} > 
                                {text.map((item, index) => (
                                    <p key={index}>{item}</p>
                                ))}
                            </motion.div>
                    </div>}
                    <div className='relative flex w-screen flex-shrink-0 xl:w-2/3 px-8  top-[25%]'>
                        { isDesktop ? desktopPages : tabletPages[0]}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    </div>
  )
}
