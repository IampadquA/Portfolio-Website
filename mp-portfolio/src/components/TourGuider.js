"use client";
import { motion } from "framer-motion"; 

export const TourGuider = ({className , text = "Tour is going on, don't give up"}) => {
  return (
    <motion.div
    initial={{ y: -10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 4+ 6,}}
    
    className={`relative -bottom-4 self-center flex flex-col h-fit items-center gap-6 ${className} `}>
      <label className="font-urbanist text-sm sm:text-[24px] md:text-[18px] leading-5 text-center"> {text} </label>
      <motion.svg
      animate={{
        y: ["5px", "-5px", "5px"], // Yukarı ve aşağı hareket
      }}
      transition={{
        duration: 2, // Animasyonun süresi
        ease: "easeInOut", // Animasyonun zamanlaması
        repeat: Infinity, // Sonsuz döngü
        repeatType: "loop", // Döngü tipi
      }}
      width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path  d="M9 15L0.339746 -1.63133e-06L17.6603 -1.17124e-07L9 15Z" fill="#0D0D0D"/>
      </motion.svg>
    </motion.div>
  )
}