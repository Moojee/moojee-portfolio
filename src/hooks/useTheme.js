// ==================== Custom Hook: useTheme ====================
// Hook นี้จัดการ theme (dark/light mode) ทั้งหมด
// รวมถึงการบันทึกลง localStorage

import { useState, useEffect } from 'react';

export function useTheme() {
  // อ่านธีมจาก localStorage หรือใช้ dark เป็นค่าเริ่มต้น
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true; // ค่าเริ่มต้นเป็น dark
  });

  // บันทึกธีมลง localStorage ทุกครั้งที่เปลี่ยน
  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  // ฟังก์ชันสลับธีม
  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  // คืนค่า state และฟังก์ชัน
  return { isDark, toggleTheme };
}