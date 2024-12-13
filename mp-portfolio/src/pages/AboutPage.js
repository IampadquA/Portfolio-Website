import { Button } from '@/components/Button';
import React from 'react'
import { motion } from 'framer-motion';
import { TourGuider } from '@/components/TourGuider';
import Image from 'next/image'




export const AboutPage = ({ isMobile }) => {
    const texts = [
        "Full name is Tarık Efe Gülmez",
        "I am 19",
        "I am a student at Akdeniz Unviversity in Managament Information Systems major",
        "I am creating stuffs in digital since when my 10th grade and I love this",
        "I was very enthusiastic and after long insistence, I did a graphic design internship at an agency.",
        "now I am a 2th grade in major and  I wanna get more experience and improe my skills before graduation",
    ]

    const mobileAbout = (
        <div className='flex flex-col w-screen gap-6 justify-items-center content-center '>
        <motion.h1
        initial={{ y : -10, opacity: 0 }}
        whileInView={{ y : 0, opacity: 1 }}
        viewport={{ margin : "-200px" , once : true }}
        transition={{ duration: 1 }}
        
        className='heading3 sm:text-[56px] text-center'>Who is Tarık ?</motion.h1>
        <motion.div 
        initial={{ scaleY: 0, opacity: 0 , transformOrigin: "top"} }
        whileInView={{ scaleY : 1, opacity: 1 }}
        viewport={{ margin : "-200px" , once : true }}
        transition={{ duration: 1, delay : 1 }}
        
        className='w-full min-h-[333px] sm:h-[556px] p-5 border-2 overflow-hidden'>
            <div className='w-full h-full bg-placeholder'>
                    <motion.div
                        initial={{ opacity: 0 } }
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay : 2 }}
                        className='sm:h-[556px]'
                    >
                        <Image src="/images/linkedinpp.png" width={1500} height={2000} className='rounded-lg'/>
                    </motion.div>
            </div>
        </motion.div>
        <div className='w-full flex flex-col gap-9 sm:gap-16 px-8 justify-items-center font-urbanist font-semibold text-[16px] sm:text-[28px] leading-9'>
            {texts.map((text,index) => (
                <motion.p 
                initial={{ y : -10, opacity: 0 }}
                whileInView={{ y : 0, opacity: 1 }}
                viewport={{ margin : "-200px" , once : true }}
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
                            <Image src="/images/linkedinpp.png" width={1500} height={2000}  className='rounded-lg'/>    
                        </motion.div>
                    </motion.div>
                    <div className='w-4/5 max-w-[495px]'>
                        <Button className="self-start"/>
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
