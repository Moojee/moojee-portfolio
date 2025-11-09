// ==================== Custom Hook: useScrollY ====================
// Hook นี้ติดตามตำแหน่ง scroll แนวตั้ง (Y-axis)
// ใช้สำหรับสร้าง parallax effect หรือ scroll-based animations

import { useState, useEffect } from 'react';

export function useScrollY() {
  // state เก็บค่าตำแหน่ง scroll แนวตั้ง
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // ฟังก์ชันอัพเดทค่า scroll
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // ติด event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup เมื่อ component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // คืนค่าตำแหน่ง scroll ปัจจุบัน
  return scrollY;
}