// ==================== Component: ProjectCard ====================
// Card แสดงผลงานแต่ละชิ้น พร้อม hover effect
// ใช้งาน: <ProjectCard title="..." date="..." role="..." link="..." isDark={isDark} />

import React, { useState } from 'react';

export default function ProjectCard({ title, date, role, link, isDark }) {
  // state เก็บสถานะว่า hover อยู่หรือไม่
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <a
      href={link || '#'}  // ลิงก์ไปยังโปรเจค ถ้าไม่มีใช้ #
      target="_blank"      // เปิดในแท็บใหม่
      rel="noopener noreferrer" // security best practice
      className={`group relative border p-8 transition-all duration-500 ${
        isDark 
          ? 'border-white/10 hover:border-white/30 hover:bg-white/5'
          : 'border-black/10 hover:border-black/30 hover:bg-black/5'
      }`}
      onMouseEnter={() => setIsHovered(true)}  // เมื่อเมาส์เข้า
      onMouseLeave={() => setIsHovered(false)} // เมื่อเมาส์ออก
    >
      <div className="relative overflow-hidden">
        {/* ชื่อโปรเจค */}
        <h3 className="text-2xl font-light mb-4 transition-transform duration-500 group-hover:translate-x-2">
          {title}
        </h3>
        
        {/* ข้อมูลวันที่และบทบาท */}
        <div className={`space-y-1 text-sm ${isDark ? 'text-white/60' : 'text-black/60'}`}>
          <p>{date}</p>
          <p>{role}</p>
        </div>
        
        {/* เส้นใต้ที่ขยายออกเมื่อ hover */}
        <div className={`absolute bottom-0 left-0 h-0.5 transition-all duration-500 ${
          isDark ? 'bg-white' : 'bg-black'
        } ${isHovered ? 'w-full' : 'w-0'}`} />
      </div>
    </a>
  );
}