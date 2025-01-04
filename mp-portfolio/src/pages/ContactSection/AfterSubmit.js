import React, { useEffect } from 'react'
import confetti from "canvas-confetti";
import {motion} from 'framer-motion';


export const AfterSubmit = () => {
    const triggerConfetti = () => {
        const end = Date.now() + 3 * 1000; // 3 seconds
        const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];
     
        const frame = () => {
          if (Date.now() > end) return;
     
          confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            startVelocity: 60,
            origin: { x: 0, y: 0.5 },
            colors: colors,
          });
          confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            startVelocity: 60,
            origin: { x: 1, y: 0.5 },
            colors: colors,
          });
     
          requestAnimationFrame(frame);
        };
     
        frame();
      };
    
    useEffect(() => {
        triggerConfetti();
    })

  return (
    <div className='relative flex w-full h-full  justify-center items-center'>   
        <label className='font-Onest font-semibold'>Thank you for your interest</label>
        <motion.div 
                    initial={{ opacity: 0, y: -10, transformOrigin: "top" }}
                    animate={{ opacity: 1, y: 0, transformOrigin: "top" }}
                    exit={{ opacity: 0, y: -10, transformOrigin: "top" }}
                    transition={{ duration: 1 }}
                    className='relative p-3 '
                >
                    <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <defs>
                            <linearGradient
                            id="gradientStroke"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                            gradientUnits="userSpaceOnUse"
                            >
                            <stop offset="0%" stopColor="#36D0F2" />
                            <stop offset="100%" stopColor="#D74EDA" />
                            </linearGradient>
                        </defs>
                        <path
                            d="M8 11L10 13L14.5 8.5M6.33377 2.8187C7.1376 2.75455 7.90071 2.43846 8.51447 1.91542C9.94672 0.69486 12.0533 0.69486 13.4855 1.91542C14.0993 2.43846 14.8624 2.75455 15.6662 2.8187C17.5421 2.96839 19.0316 4.45794 19.1813 6.33377C19.2455 7.1376 19.5615 7.90071 20.0846 8.51447C21.3051 9.94672 21.3051 12.0533 20.0846 13.4855C19.5615 14.0993 19.2455 14.8624 19.1813 15.6662C19.0316 17.5421 17.5421 19.0316 15.6662 19.1813C14.8624 19.2455 14.0993 19.5615 13.4855 20.0846C12.0533 21.3051 9.94672 21.3051 8.51447 20.0846C7.90071 19.5615 7.1376 19.2455 6.33377 19.1813C4.45794 19.0316 2.96839 17.5421 2.8187 15.6662C2.75455 14.8624 2.43846 14.0993 1.91542 13.4855C0.69486 12.0533 0.69486 9.94672 1.91542 8.51447C2.43846 7.90071 2.75455 7.1376 2.8187 6.33377C2.96839 4.45794 4.45794 2.96839 6.33377 2.8187Z"
                            stroke="url(#gradientStroke)" 
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        </svg>
        </motion.div>
    </div>
  )
}

export default AfterSubmit;