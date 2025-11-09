// ==================== Section: HeroSection ====================
// ส่วนหัวหน้าแรกของเว็บ พร้อม parallax effect
// แสดงชื่อ/ตำแหน่งงานและคำบรรยาย

import React from 'react';
import ScrollIndicator from '../layout/ScrollIndicator';
import { personalInfo } from '../../data/socialLinks';

export default function HeroSection({ isDark, scrollY }) {
  const textMuted = isDark ? 'text-white/60' : 'text-black/60';
  
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div 
        className="text-center transition-transform duration-100"
        // Parallax effect: เลื่อนช้ากว่าการ scroll จริง (0.3 เท่า)
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        {/* หัวข้อใหญ่ */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-light leading-tight mb-8">
          Creative Frontend
          <br />
          Developer
        </h1>
        
        {/* คำบรรยาย */}
        <p className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed ${textMuted}`}>
          {personalInfo.tagline}
          <br />
          {personalInfo.description}
        </p>
      </div>
      
      {/* ตัวบ่งชี้ scroll */}
      <ScrollIndicator isDark={isDark} />
    </section>
  );
}