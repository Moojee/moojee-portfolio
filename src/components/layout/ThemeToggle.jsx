// ==================== Component: ThemeToggle ====================
// ปุ่มสลับธีม Light/Dark Mode อยู่มุมขวาบน
// แสดงไอคอน Sun สำหรับ dark mode และ Moon สำหรับ light mode

import React from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle({ isDark, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className={`fixed top-8 right-8 z-50 p-3 rounded-full transition-all duration-300 ${
        isDark 
          ? 'bg-white/10 hover:bg-white/20 text-white' 
          : 'bg-black/10 hover:bg-black/20 text-black'
      }`}
      aria-label="Toggle theme"
    >
      {/* แสดงไอคอนตามธีมปัจจุบัน */}
      {isDark ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
}