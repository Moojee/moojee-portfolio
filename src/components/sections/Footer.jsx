// ==================== Section: Footer ====================

import React from "react";
import { personalInfo } from "../../data/socialLinks";

export default function Footer({ isDark }) {
  const textVeryMuted = isDark ? "text-white/40" : "text-black/40";
  const borderColor = isDark ? "border-white/10" : "border-black/10";

  // ดึงปีปัจจุบัน
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`relative py-12 px-6 border-t ${borderColor}`}>
      <div
        className={`max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm ${textVeryMuted}`}
      >
        <p>
          © {currentYear} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
