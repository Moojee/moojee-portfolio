// ==================== Section: HeroSection ====================
// ส่วนหัวหน้าแรกของเว็บ พร้อม parallax effect
// แสดงชื่อ/ตำแหน่งงานและคำบรรยาย

import React from "react";
import ScrollIndicator from "../layout/ScrollIndicator";
import { personalInfo } from "../../data/socialLinks";
import { socialLinks } from "../../data/socialLinks";
import SocialLink from "../ui/SocialLink";
import ResumeCard from "../ui/ResumeCard";

export default function HeroSection({ isDark, scrollY }) {
  const textMuted = isDark ? "text-white/60" : "text-black/60";

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div
        className="text-center transition-transform duration-100"
        // Parallax effect: เลื่อนช้ากว่าการ scroll จริง (0.3 เท่า)
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        {/* หัวข้อใหญ่ */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-light leading-tight mb-8">
          Web Developer
        </h1>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight" >
          Web Developer | Building things for the web.
        </h3>

        {/* คำบรรยาย */}

        <div className="flex flex-row gap-8 text-sm mt-16 justify-center">
          {socialLinks.map((link) => (
            <SocialLink
              key={link.name}
              name={link.name}
              url={link.url}
              icon={link.icon}
              isDark={isDark}
            />
          ))}
        </div>
      </div>

      {/* ตัวบ่งชี้ scroll */}
      <ScrollIndicator isDark={isDark} />
    </section>
  );
}
