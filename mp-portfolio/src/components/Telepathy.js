import React from 'react'
import { useRef } from 'react'
import { useTransform , useScroll} from 'framer-motion'    
import { PresentationCard } from './PresentationCard'
import { Safari } from './SafariMockup'

export const Telepathy = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target : ref,
    });

    const y = useTransform(scrollYProgress , [0,1] , ["0%" , "100%"])

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


  return (
    <div ref={ref} className='w-full justify-items-center content-center flex flex-col gap-1 py-9 label'>
        <h1 
        className='font-Onest font-semibold text-2xl sm:text-[32px] text-center leading-10 tracking-[-2%]'>Telepathy Game</h1>
        <Safari src={"/images/TelepathyGameImages/tpmainpage1.png"} className='h-[220px] sm:h-[589px] p-7' />
        <div className=' px-7 sm:p-7'>
            <p>{text[0]}</p>
        </div>
        <Safari src={"/images/TelepathyGameImages/tpInvite.png"} className='sm:h-[336px] p-7' />
        <div className=' px-7 sm:p-7'>
            <p>{text[1]}</p>
        </div>
        <Safari src={"/images/TelepathyGameImages/tpMatchmakingoage.png"} className='h-[120px] sm:h-[412px] p-7' />
        <div className=' px-7 sm:p-7'>
            <p>{text[2]}</p>
        </div>
        <Safari src={"/images/TelepathyGameImages/tpGamePage.png"} className='h-[272px] sm:h-[470px] p-7' discription={true} text="Some trees flourish, others die. Some cattle grow strong, others are taken by wolves. Some men are born rich enough and dumb enough to enjoy their lives. Ain't nothing fair." />
        <div className=' px-7 sm:p-7'>
            <p>{text[3]}</p>
        </div>
    </div>
  )
}
