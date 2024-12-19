

import React, { useRef , useEffect , useState} from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import { Telepathy } from './Telepathy';
import { ProjectPagePath } from './ProjectPagePath';
import { TechCloud } from './TechCloud';


export const MobileProjectsPage = () => {

  const [littetrick , setLittleTrick ] = useState(false);

  const containerRef = useRef(null);
  const arrowRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const initialTransformValue = "0%";

  const transform = useTransform(scrollYProgress, [0, 0.283], [initialTransformValue, "46%"]);
  const x = useTransform(
    scrollYProgress,
    [0.283, 0.40, 0.75, 0.85, 1],
    [initialTransformValue, "-100%", "-100%", "-200%", "-200%",]
  );

  const y = useTransform(
    scrollYProgress,
    [0.283, 0.40, 0.55, 0.65, 0.75, 0.85, 1],
    [initialTransformValue, initialTransformValue, "-16%", "-16%", "-49%", "-49%", "-100%"]
  );
  const openerHeight = useTransform(scrollYProgress, [0.40, 0.55], [initialTransformValue, "100%"]);


  return (
    <div ref={containerRef} className='relative h-[900vh]'>
      <motion.div 
      className='sticky top-0 w-screen h-screen justify-items-center content-center overflow-hidden'>
        <motion.div className='flex w-screen' style={{ x: x || "0%", y: y || "0%" }}>
          <ProjectPagePath transform={transform} />
          <div className='relative w-screen h-[300vh] justify-items-center xl:justify-items-start flex-shrink-0 '>
            <motion.div 
            style={{ height : openerHeight }}
            className='relative w-full  xl:w-2/3 border-2 border-bg-black overflow-hidden top-[16%]'>
              <Telepathy />
            </motion.div>
          </div>
          <div className='w-screen flex-shrink-0' >
            <motion.div className="relative w-full bg-blue-50 top-[49%] ">
              <TechCloud />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
