
import React, { useState } from 'react';
import { IconCloud } from './IconClod';
import { motion } from 'framer-motion';
import { TourGuider } from './TourGuider';

export const TechCloud = ({ isDesktop = false }) => {
  const [text, setText] = useState("And I'm still eager to learn more");

  const iconSlugs = [
    "react", "flutter", "tailwindcss", "framer", 
    "figma", "adobephotoshop", "dotnet", "express", 
    "dart", "nodedotjs", "firebase", "mysql", "mongodb", 
    "firebase", "javascript", "csharp", "python", "cplusplus", 
    "c", "dart" ,
  ];

  const Techs = [
    { 'Front-End': ['React', 'Flutter', 'TailwindCSS', 'Framer Motion'] },
    { 'Design': ['Figma', 'Photoshop'] },
    { 'Back-End': ['Express.js', 'Nodejs' , 'Asp.Net'] },
    { 'Database': ['MongoDB', 'Firebase' ,'MySQL'] },
    { 'Languages': ['Javascript', 'Dart' ,'C#', 'Python', 'C++', 'C'] },
  ];

  const mobile = (
    <div className="w-full flex flex-col p-6 gap-14">
      <div className="relative w-full flex flex-col gap-7 items-center">
        <h3 className="relative font-urbanist font-semibold text-[18px] leading-[26px] sm:text-2xl md:text-[18px] md:leading-[26px] text-center p-3">
          Here is my tech cloud
        </h3>
        <div className="relative w-full max-w-[702px]">
          <IconCloud iconSlugs={iconSlugs} />
        </div>
        <motion.label 
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          className="font-urbanist font-semibold text-[18px] sm:text-2xl md:text-[18px] leading-[26px] px-14">
          {text}
        </motion.label>
      </div>
      <div className='relative w-full flex flex-col md:flex-wrap md:flex-row gap-8 px-9 md:px-0 font-urbanist font-normal text-base sm:text-2xl md:text-lg text-left sm:ml-6 md:ml-0'>
        {Techs.map((categoryObj) => {
          const category = Object.keys(categoryObj)[0];
          const tech = categoryObj[category];

          return (
            <div key={category} className='flex gap-5 md:w-[196px]'>
              <motion.h3 
              initial={{ opacity: 0 , y: 20 }}
              whileInView={{ opacity: 1 , y: 0 }}
              className='font-semibold w-1/3 md:min-w-24'>{category}</motion.h3>
              <div className='flex flex-col gap-[10px] text-left'>
                {tech.map((tech) => (
                  <motion.button className='text-left' key={tech}>
                    {tech}
                  </motion.button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )

  const desktop = (
    <div className='relative w-screen flex flex-col justify-items-center gap-16 xl:p-20  '>
        <h3 className="relative font-urbanist font-semibold text-[18px] leading-[26px] sm:text-2xl md:text-[18px] md:leading-[26px] text-center p-3">
          Here is my tech cloud
        </h3>
        <div className=' relative flex gap-28 2xl:gap-69  justify-center '>
            <div className='flex flex-col gap-5 font-urbanist font-normal text-lg text-left'>
                {Techs.slice(0,3).map((categoryObj) => {
                const category = Object.keys(categoryObj)[0];
                const tech = categoryObj[category];

                return (
                    <div key={category} className='flex flex-col gap-6 md:w-[196px]'>
                        <motion.h3
                        initial={{ opacity: 0 , y: 20 }}
                        whileInView={{ opacity: 1 , y: 0 }}
                        transition={{ duration: 1 }}
                        className='font-semibold'>{category}</motion.h3>
                        <div className='flex flex-col gap-[10px] text-left'>
                            {tech.map((tech) => (
                            <motion.button
                            initial={{ opacity: 0 , y: 20 }}
                            whileInView={{ opacity: 1 , y: 0 }}
                            transition={{ duration: 1 , delay: 1 }}
                            className='text-left' key={tech}>
                                {tech}
                            </motion.button>
                            ))}
                        </div>
                    </div>
                );
                })}
            </div>
            <div className='2xl:flex-shrink-0 S w-2/4'>
              <IconCloud iconSlugs={iconSlugs} />
            </div>
            <div className='flex flex-col h-full gap-5 font-urbanist font-normal text-lg text-left '>
                {Techs.slice(3,5).map((categoryObj) => {
                const category = Object.keys(categoryObj)[0];
                const tech = categoryObj[category];

                return (
                    <div key={category} className='flex flex-col gap-5 md:w-[196px]'>
                        <motion.h3
                        initial={{ opacity: 0 , y: 20 }}
                        whileInView={{ opacity: 1 , y: 0 }}
                        transition={{ duration: 1 , delay: 2 }}
                        className='font-semibold'>{category}</motion.h3>
                        <div className='flex flex-col gap-[10px] text-left'>
                            {tech.map((tech) => (
                            <motion.button
                            initial={{ opacity: 0 , y: 20 }}
                            whileInView={{ opacity: 1 , y: 0 }}
                            transition={{ duration: 1 , delay: 3 }}
                            className='text-left' key={tech}>
                                {tech}
                            </motion.button>
                            ))}
                        </div>
                    </div>
                );
                })}
            </div>        
        </div>
    </div>
  )

  return (
    <>
        {isDesktop ? desktop : mobile}
        <TourGuider />
    </>
  );
};
