// ==================== App.jsx - Main Component ====================
// ไฟล์หลักที่รวม components ทั้งหมดเข้าด้วยกัน
// ใช้ custom hooks และ import sections ต่างๆ

import React from 'react';

// Import Custom Hooks
import { useTheme } from './hooks/useTheme';
import { useScrollY } from './hooks/useScrollY';

// Import Layout Components
import AnimatedBackground from './components/layout/AnimatedBackground';
import ThemeToggle from './components/layout/ThemeToggle';

// Import Section Components
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/sections/Footer';

export default function App() {
  // ใช้ custom hooks
  const { isDark, toggleTheme } = useTheme();  // จัดการธีม
  const scrollY = useScrollY();                // ติดตาม scroll position
  
  // กำหนด CSS classes ตามธีม
  const themeClasses = isDark 
    ? 'bg-black text-white' 
    : 'bg-white text-gray-900';
  
  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 ${themeClasses}`}>
      {/* พื้นหลัง animated */}
      <AnimatedBackground isDark={isDark} />
      
      {/* ปุ่มสลับธีม */}
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      
      {/* ส่วนหัวหน้าแรก */}
      <HeroSection isDark={isDark} scrollY={scrollY} />
      
      {/* ส่วนแนะนำตัว */}
      <AboutSection isDark={isDark} />
      
      {/* ส่วนแสดงผลงาน */}
      <ProjectsSection isDark={isDark} />
      
      {/* ส่วนติดต่อ */}
      <ContactSection isDark={isDark} />
      
      {/* ส่วนท้าย */}
      <Footer isDark={isDark} />
    </div>
  );
}