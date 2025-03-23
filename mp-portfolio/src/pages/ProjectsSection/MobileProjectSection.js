import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Telepathy } from './Telepathy';
import { ProjectPagePath } from './ProjectPagePath';
import { TechCloud } from './TechCloud';
import Educhain from './Educhain';
import ScrollingText from '@/components/ScrollingText';

const MobileProjectSection = () => {
    const containerRef = useRef(null);

    const texts = [
        {
            "title": "Edu-Chain Hackathon Project",
            "content": "Developed a decentralized education platform using blockchain to provide secure access management for educational content. The platform enables students to access courses while ensuring transparent revenue management for educators through smart contracts."
        },
        {
            "title": "Technical Stack:",
            "content": "Our project leverages Solidity 0.8+ for smart contract development, combined with React.js for the frontend interface. We implemented a custom testnet deployment and integrated Web3.js to enable seamless blockchain interactions within our platform."
        },
        {
            "title": "Key Features",
            "content": "The Edu-Chain platform offers automated course access management through smart contracts, implementing a time-based subscription system with secure payment infrastructure. We've built transparent revenue distribution mechanisms, real-time access duration tracking, and self-executing contract terms to ensure fairness for both students and educators."
        },
        {
            "title": "Project Achievements",
            "content": "We successfully integrated blockchain technology into the education sector, creating a secure subscription model powered by smart contracts. Our team developed a user-friendly decentralized application interface that was deployed and thoroughly tested in a custom testnet environment, proving the viability of our concept."
        }
    ];
    

    const { scrollYProgress } = useScroll({
        target: containerRef
    });

    const transform = useTransform(scrollYProgress , [0.1,0.25] , ["15%" , "46%"])

    const x = useTransform(scrollYProgress, [0.1,0.18,0.26,0.34,0.42,0.50,0.58,0.66,0.74,0.82,0.9,0.98], ["0%","0%","0%","-100%", "-100%","-100%","-200%" ,"-200%" ,"-200%","-300%" ,"-300%" ,"-300%"])
    
    const eduy = useTransform(
        scrollYProgress, [0.45, 0.50], ["0%", "-70%"]
    )

    const teley = useTransform(
        scrollYProgress,
        [0.58, 0.74],
        ["0%", "-85%"]
    )

    const techy = useTransform(
        scrollYProgress,
        [0.82, 1],
        ["0%", "-90%"]
    )

    const openerHeight = useTransform(scrollYProgress, [0.34, 0.41], ["0%", "100%"]);

    return (
        <div ref={containerRef} className='relative h-[1200vh]'>
            <motion.div className='sticky top-0 overflow-hidden'>
                <motion.span className='flex h-screen' style={{x}}>
                    <section className='w-screen flex-shrink-0'>
                        <ProjectPagePath transform={transform} />
                    </section>
                    <section className='w-screen items-center  min-h-screen flex-shrink-0 flex'>
                        <motion.div 
                        style={{ height : openerHeight }}
                        className='relative w-full  xl:w-2/3 border-2  border-bg-black overflow-clip'>
                            <motion.div className='flex h-fit  flex-col flex-1' style={{y : eduy}}>
                                <Educhain>
                                    <ScrollingText contents={texts}></ScrollingText>
                                </Educhain>
                            </motion.div>
                        </motion.div>
                    </section>
                    <section className='bg-bg-white w-screen flex-shrink-0'>
                        <motion.div className='flex h-fit  flex-col flex-1' style={{y : teley}}>
                                <Telepathy></Telepathy>
                        </motion.div>
                    </section>
                    <section className='bg-blue-50 w-screen flex-shrink-0'>
                        <motion.div className='flex h-fit  flex-col flex-1' style={{y : techy}}>
                            <TechCloud/>
                        </motion.div>
                    </section>
                </motion.span>
            </motion.div>  
        </div>
    )
}

export default MobileProjectSection