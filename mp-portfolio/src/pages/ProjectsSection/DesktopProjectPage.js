import React, { useRef } from 'react'
import { PresantationGrid } from './PresantationGrid'
import { ProjectPagePath } from './ProjectPagePath'
import { useScroll, useTransform , motion } from 'framer-motion';
import { TechCloud } from './TechCloud';
import Link from 'next/link';

export const DesktopProjectPage = ({isDesktop = false}) => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start end" , "end start"]
    });

    const initialTransformValue = "0%";

    const transform = useTransform(scrollYProgress, [0, 0.25], [initialTransformValue, "46%"]);
    const x = useTransform(scrollYProgress, [0.25, 0.4, 0.6, 0.7, 0.75,0.8], [initialTransformValue, "-100%", "-100%", "-100%", "-100%" , "-200%"]);
    const y = useTransform(scrollYProgress, [0.4, 0.5, 0.75 , 0.8 , 0.85 , 0.95], [initialTransformValue, "-25%" , "-25%" , "-25%" , "-30%" , "-50%"]);
    const openerHeight = useTransform(scrollYProgress, [0.4, 0.6], [initialTransformValue, "100%"]);

    const opacity = useTransform(scrollYProgress, [0.5, 0.55], [0, 1]);
    const translateY = useTransform(scrollYProgress, [0.5, 0.55], [50, 0]);
        
    const opacityt = useTransform(scrollYProgress, [0.55, 0.6], [0, 2]);
    const translateYt = useTransform(scrollYProgress, [0.55, 0.6 , 0.65 , 0.75,], [50, 0, 0, -800]);

    const opacityThird = useTransform(scrollYProgress, [0.6, 0.75], ["0%", "100%"]);
    const translateYThird = useTransform(scrollYProgress, [0.7, 0.75], [50, 0]);

    const text = [
        "Project Overview",
        "TelepathyGame is a collaborative web-based game that challenges players to predict their partner's next choice, creating an engaging and interactive experience. Technologies Used",
        "Technologies Used",
        "Frontend: React Styling: Tailwind CSS \n Animations: Framer Motion \n Backend: Firebase Functions, Node.js \n Database: Firebase \n",
        "Key Features",
        "Custom-designed UI/UX (created in Figma) Lobby system Invite mechanism Matchmaking system (implemented from scratch)",
        "Development Journey",
        "As a personal project to enhance my software and web development skills, TelepathyGame started as a casual, fun concept. The goal was to create a simple yet entertaining game where players try to predict their partner's choices. ",
        "Frontend Development",
        "Designed the entire user interface from scratch using Figma Implemented the frontend with React Styled the application using Tailwind CSS Added smooth animations with Framer Motion",
        "Backend Development",
        "Leveraged Firebase Functions and Node.js for backend logic Chose Firebase as the database to explore new technologies Developed lobby, invite, and matchmaking systems independently",
        "Current Status",
        "The project is still in progress and not yet deployed. The final stages of development are pending, with the potential for future completion during leisure time. Learning Outcomes This project was a significant learning experience, challenging me to build complex systems from the ground up and explore various web technologies. Future Plans Potential completion and deployment when time permits.",
    ]
    
    const heading = "TelepathyGame"

    const tabletPages = [
        (
            <React.Fragment key="tablet-page">
                <PresantationGrid className={"h-[512px] m-10 "} />
                <div className='relative w-full flex flex-col gap-4 '>
                    <h1 className='font-Onest font-bold text-[44px] leading-[56px] tracking-[-2%]'>{heading}</h1>
                    <div className='flex flex-col gap-6 font-urbanist font-normal text-base '> 
                        {text.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>
                </div>
            </React.Fragment>
        )
    ]

    const desktopPages = [
        (
            <React.Fragment key="desktop-page">
                <PresantationGrid isDesktop={isDesktop} className={"h-[90vh] m-10"} />
            </React.Fragment>
        )
    ]

    return (
        <div ref={containerRef} className='relative h-[600vh]'>
            <motion.div className="sticky top-0 w-screen h-screen flex items-start justify-center overflow-hidden">
                <motion.div className='flex w-screen' style={{ x: x || "0%", y: y || "0%" }}>
                    <ProjectPagePath transform={transform} />
                    <div className='w-screen h-[200vh] flex flex-shrink-0 '>
                        <motion.div 
                            style={{ height: openerHeight }}
                            className='relative w-full justify-items-center xl:w-2/3 xl:h-screen px-8 border-2 xl:border-x-0 border-bg-black overflow-hidden top-[25%] flex-shrink-0'>
                            {isDesktop ? desktopPages : tabletPages[0]}
                        </motion.div>
                        {isDesktop && 
                            <div className='relative flex flex-col top-[25%] gap-4 my-8'>
                                <motion.h1 
                                    className='font-Onest font-bold text-[44px] leading-[56px] tracking-[-2%]' 
                                    style={{opacity, translateY}}>
                                    <Link className="hover:text-blue-accent" href="https://github.com/IampadquA/Telepathy-Game" target="_blank">{heading}</Link>
                                </motion.h1>
                                <motion.div className='w-full h-full overflow-hidden'>
                                    <motion.div 
                                        className='flex flex-col gap-6 font-urbanist font-normal text-base pr-16 overflow-hidden' 
                                        style={{ opacity: opacityt, y: translateYt }}> 
                                        {text.map((item, index) => (
                                            <p key={index}>{item}</p>
                                        ))}
                                        <p>You can look at the code and get more information in projects <Link className="font-bold hover:text-blue-accent" href="https://github.com/IampadquA/Telepathy-Game" target="_blank">github page</Link></p>
                                    </motion.div>
                                </motion.div>
                            </div>
                        }
                    </div>
                    <div className='w-screen h-[200vh] flex flex-shrink-0'>
                        <div className='relative w-full justify-items-center overflow-hidden top-[25%] flex-shrink-0'>
                            <TechCloud isDesktop={isDesktop}/>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}