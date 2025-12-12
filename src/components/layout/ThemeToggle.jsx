// ==================== Component: ThemeToggle ====================
//  Light/Dark Mode 

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
      {/* แสดงไอคอนตามธีมขาวดำ */}
      {isDark ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
}