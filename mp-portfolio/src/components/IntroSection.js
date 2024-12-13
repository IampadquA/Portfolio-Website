'use client';

import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <motion.div className="relative w-screen h-screen content-center justify-items-center lg:grid lg:grid-cols-5 lg:justify-items-start bg-bg-white">
      <div className="z-10 relative md:col-start-2 md:col-span-3 flex flex-col gap-14 heading1 text-[72px] sm:text-[128px] md:text-[136px] lg:text-[156px] 2xl:text-[196px]">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Hi
        </motion.h1>
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Visitor
        </motion.h1>
      </div>
      <motion.div
        className="z-50 inset-0 top-0 left-0 absolute bg-[#565656] justify-items-center content-center lg:grid lg:grid-cols-5 lg:justify-items-start"
        initial={{ scaleY: 0, transformOrigin: "bottom" }}
        animate={{ scaleY: 1, transformOrigin: "bottom" }}
        exit={{ scaleY : 0, transformOrigin: "top" }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        <div className="z-60 relative flex flex-col gap-14 text-bg-white text-[64px] sm:text-[96px] md:text-[124px] md:col-start-2 md:col-span-3 heading1">
          <motion.h1
            className='whitespace-nowrap'
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 3 }}
          >
            Let me
          </motion.h1>
          <motion.h2
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 4 }}
          >
            Introduce
          </motion.h2>
          <motion.h2
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 4.6 }}
          >
            Myself
          </motion.h2>
        </div>
      </motion.div>
      <motion.div
        className="z-50 inset-0 top-0 left-0 absolute bg-bg-white justify-items-center content-center "
        initial={{ scaleY: 0, transformOrigin: "bottom" }}
        animate={{ scaleY: 1, transformOrigin: "bottom" }}
        exit={{ height: 0, transformOrigin: "top" }}
        transition={{ duration: 0.5, delay: 6 }}
      ></motion.div>
    </motion.div>
  );
}
