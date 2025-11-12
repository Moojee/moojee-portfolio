import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import App from "../../App"; 

const SplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000); // แสดง 3 วิ
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {showSplash ? (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        //   className="flex items-center justify-center min-h-screen bg-black"
        className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#1e1a17] to-[#3a322d]"

        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-2xl md:text-4xl font-semibold text-white"
          >
            • Moojeefilm Portfolio •
          </motion.h1>
        </motion.div>
      ) : (
        <motion.div
          key="mainApp"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <App />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
