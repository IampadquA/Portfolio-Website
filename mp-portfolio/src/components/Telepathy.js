import React from 'react'
import { useRef } from 'react'
import { useTransform , useScroll} from 'framer-motion'    
import { PresentationCard } from './PresentationCard'
import { Safari } from './SafariMockup'
import Link from 'next/link'

export const Telepathy = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target : ref,
    });

    const y = useTransform(scrollYProgress , [0,1] , ["0%" , "100%"])

    const text = [
            `Project Overview
          
            TelepathyGame is a collaborative web-based game that challenges players to predict their partner's next choice, creating an engaging and interactive experience. Technologies Used
            
            Technologies Used
          
            Frontend: React | Styling: Tailwind CSS
            Animations: Framer Motion | Backend: Firebase Functions, Node.js 
            Database: Firebase`,
            
            `Key Features
          
            Custom-designed UI/UX (created in Figma) | Lobby system
            Invite mechanism | Matchmaking system (implemented from scratch)
            
            Development Journey
          
            As a personal project to enhance my software and web development skills, TelepathyGame started as a casual, fun concept. The goal was to create a simple yet entertaining game where players try to predict their partner's choices.`,
            
            `Frontend Development
          
            Designed the entire user interface from scratch using Figma | Implemented the frontend with React
            Styled the application using Tailwind CSS | Added smooth animations with Framer Motion`,
            
            `Backend Development
          
            Leveraged Firebase Functions and Node.js for backend logic
            Chose Firebase as the database to explore new technologies
            Developed lobby, invite, and matchmaking systems independently
            
            Current Status
          
            The project is still in progress and not yet deployed. 
            The final stages of development are pending, with the potential for future completion during leisure time.
          
            Learning Outcomes:
            This project was a significant learning experience, challenging me to build complex systems from the ground up and explore various web technologies.
          
            Future Plans:
            Potential completion and deployment when time permits.`
          ];


  return (
    <div ref={ref} className='w-full justify-items-center content-center flex flex-col gap-1 py-9 label'>
        <h1 
        className='font-Onest font-semibold text-2xl sm:text-[32px] text-center leading-10 tracking-[-2%]'>Telepathy Game</h1>
        <Safari src={"/images/TelepathyGameImages/tpmainpage1.png"} className='h-[220px] sm:h-[589px] p-7' />
        <div className=' px-7 sm:p-7'>
            <p style={{ whiteSpace: 'pre-line' }}>{text[0]}</p>
        </div>
        <Safari src={"/images/TelepathyGameImages/tpInvite.png"} className='sm:h-[336px] p-7' />
        <div className=' px-7 sm:p-7'>
            <p style={{ whiteSpace: 'pre-line' }} >{text[1]}</p>
        </div>
        <Safari src={"/images/TelepathyGameImages/tpMatchmakingoage.png"} className='h-[120px] sm:h-[412px] p-7' />
        <div className=' px-7 sm:p-7'>
            <p style={{ whiteSpace: 'pre-line' }} >{text[2]}</p>
        </div>
        <Safari src={"/images/TelepathyGameImages/tpGamePage.png"} className='h-[272px] sm:h-[470px] p-7' text="Some trees flourish, others die. Some cattle grow strong, others are taken by wolves. Some men are born rich enough and dumb enough to enjoy their lives. Ain't nothing fair." />
        <div className=' px-7 sm:p-7'>
            <p style={{ whiteSpace: 'pre-line' }} >{text[3]}</p>
            <p><br/>You can look at the code and get more information in projects <Link className=" font-bold hover:text-blue-accent" href="https://github.com/IampadquA/Telepathy-Game" target="_blank" >github page</Link></p>
        </div>
    </div>
  )
}
