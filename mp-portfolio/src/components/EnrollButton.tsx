import { MouseEventHandler, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const CHARS = "!@#$%^&*():{};|,.<>/?";

interface EncryptButtonProps {
    targetText: string;
    cyclesPerTime?: number;
    shuffleTime?: number;
    chars?: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    className?: string;
}

export default function EncryptButton({ targetText , cyclesPerTime = 2, shuffleTime = 50, chars = CHARS , onClick , className } : EncryptButtonProps) {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [text, setText] = useState(targetText);

  useEffect(() => {
    setText(targetText);
  }, [targetText]);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = targetText.split("")
        .map((char, index) => {
          if (pos / cyclesPerTime > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= targetText.length * cyclesPerTime) {
        stopScramble();
      }
    }, shuffleTime);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);

    setText(targetText);
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.975,
      }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-lg border-[1px] border-blue-accent px-4 py-2 font-mono font-medium uppercase text-bg-white transition-colors hover:text-white ${className}`}
    >
      <div className="relative z-10 justify-center flex items-center gap-2">
        <span>{text}</span>
      </div>
      <motion.span
        initial={{
          y: "100%",
        }}
        animate={{
          y: "-100%",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
      />
    </motion.button>
  );
};