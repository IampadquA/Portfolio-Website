import React from 'react'
import {motion} from 'framer-motion'

export const ProjectPagePath = ({ transform }) => {
  return (
    <div className='relative flex w-screen h-screen items-center justify-center flex-shrink-0 '>
              <motion.svg 
              style={{ top : transform }}

              className="absolute left-1/2 -translate-x-1/2 "
                  width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path  d="M9 15L0.339746 -1.63133e-06L17.6603 -1.17124e-07L9 15Z" fill="#0D0D0D"/>
              </motion.svg>
            <h3 className='z-20 font-urbanist font-semibold text-[20px] sm:text-3xl lg:text-2xl xl:text-xl leading-9 '>Let's Talk About My Projects</h3>
    </div>
  )
}
