import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

// Import Custom Hooks
import { useTheme } from "./hooks/useTheme";
import { useScrollY } from "./hooks/useScrollY";

// Import Components
import AnimatedBackground from "./components/layout/AnimatedBackground";
import ThemeToggle from "./components/layout/ThemeToggle";
import SplashScreen from "./components/page/SplashScreen";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/sections/Footer";

export default function App() {
  const { isDark, toggleTheme } = useTheme();
  const scrollY = useScrollY();
  const [isLoading, setIsLoading] = useState(true);

  const handleFinish = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* ใช้ AnimatePresence เพื่อให้ตอนหายไป มันค่อยๆ จางออกตาม exit animation */}
      <AnimatePresence mode="wait">
        {isLoading && (
            <SplashScreen key="splash" onFinish={handleFinish} />
        )}
      </AnimatePresence>

      {/* ส่วนเนื้อหาเว็บ (แสดงรอไว้ข้างหลังเลย) */}
      {!isLoading && (
        <div className={`min-h-screen font-sans transition-colors duration-500 ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}>
          <AnimatedBackground isDark={isDark} />
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
          <HeroSection isDark={isDark} scrollY={scrollY} />
          <AboutSection isDark={isDark} />
          <ProjectsSection isDark={isDark} />
          <ContactSection isDark={isDark} />
          <Footer isDark={isDark} />
        </div>
      )}
    </>
  );
}