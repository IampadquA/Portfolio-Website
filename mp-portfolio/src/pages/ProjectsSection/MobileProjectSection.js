import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Telepathy } from './Telepathy';
import { ProjectPagePath } from './ProjectPagePath';
import { TechCloud } from './TechCloud';

const MobileProjectSection = () => {
    const containerRef = useRef(null);
    

    const { scrollYProgress } = useScroll({
        target: containerRef
    });

    const transform = useTransform(scrollYProgress , [0.1,0.25] , ["15%" , "46%"])

    const x = useTransform(scrollYProgress, [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9], ["0%","0%","0%","-100%", "-100%","-100%","-200%" ,"-200%" ,"-200%"])
    
    const y = useTransform(
        scrollYProgress,
        [0.48, 0.58],
        ["0%", "-85%"]
    )

    const techy = useTransform(
        scrollYProgress,
        [0.8, 1],
        ["0%", "-90%"]
    )

    const openerHeight = useTransform(scrollYProgress, [0.40, 0.45], ["0%", "100%"]);

    return (
        <div ref={containerRef} className='relative h-[900vh]'>
            <motion.div className='sticky top-0 overflow-hidden'>
                <motion.span className='flex h-screen' style={{x}}>
                    <section className='w-screen flex-shrink-0'>
                        <ProjectPagePath transform={transform} />
                    </section>
                    <section className='w-screen items-center  min-h-screen flex-shrink-0 flex'>
                        <motion.div 
                        style={{ height : openerHeight }}
                        className='relative w-full  xl:w-2/3 border-2  border-bg-black overflow-clip'>
                            <motion.div className='flex h-fit  flex-col flex-1' style={{y}}>
                                <Telepathy></Telepathy>
                            </motion.div>
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