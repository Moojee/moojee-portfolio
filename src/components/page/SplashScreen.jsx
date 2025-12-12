

import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function SplashScreen({ onFinish }) {
  // แบ่งข้อความเป็น 2 
  const lines = ["MOOJEEFILM", "PORTFOLIO"];

  useEffect(() => {
    
    const timer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 8000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  const handleSkip = (e) => {
    e.stopPropagation();
    if (onFinish) onFinish();
  };

  const letterVariants = {
    hidden: () => {
      const randomX = Math.floor(Math.random() * 1000) - 500;
      const randomY = Math.floor(Math.random() * 1000) - 500;
      const randomRotate = Math.floor(Math.random() * 360) - 180;

      return {
        x: randomX,
        y: randomY,
        rotate: randomRotate,
        opacity: 0,
        scale: 0.2,
      };
    },
    visible: (index) => ({
      x: 0,
      y: 0,
      rotate: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 20,
        mass: 1,
        delay: index * 0.08, // ใช้ index ที่นับต่อเนื่องกัน
      },
    }),
  };

  return (
    <motion.div
      onClick={onFinish}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black cursor-pointer overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        filter: "blur(10px)",
        transition: { duration: 0.8 }
      }}
    >
    
      <div className="relative flex flex-col justify-center items-center z-10">
        
        {lines.map((line, lineIndex) => {
          // คำนวณ Index เริ่มต้นของบรรทัดนี้ เพื่อให้ Animation เล่นต่อจากบรรทัดแรก
          // ถ้าเป็นบรรทัดที่ 2 (index 1) ให้เริ่มนับต่อจากความยาวบรรทัดแรก
          const startIndex = lineIndex === 0 ? 0 : lines[0].length;

          return (
            <div key={lineIndex} className="flex flex-wrap justify-center overflow-hidden my-2">
              {line.split("").map((char, charIndex) => {
                // index จริงที่จะส่งไปให้ Animation
                const globalIndex = startIndex + charIndex;

                return (
                  <motion.span
                    key={charIndex}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    custom={globalIndex} 
                    className="inline-block font-bold font-mono leading-none text-[10vw] sm:text-7xl md:text-8xl lg:text-9xl text-white mix-blend-difference"
                    style={{ textShadow: "0 0 15px rgba(255,255,255,0.4)" }}
                  >
                    {char}
                  </motion.span>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Skip Button */}
      <motion.button
        onClick={handleSkip}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 1, duration: 0.5 } }}
        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
        whileTap={{ scale: 0.95 }}
        className="absolute bottom-8  px-6 py-2 border border-white/30 rounded-full text-xs md:text-sm text-white/80 tracking-widest uppercase hover:bg-white/10 hover:border-white transition-colors z-50 backdrop-blur-sm"
      >
        Skip Intro
      </motion.button>
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-60 z-0"></div>
    </motion.div>
  );
}