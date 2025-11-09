// ==================== Component: ScrollIndicator ====================
// ตัวบ่งชี้ scroll รูปเมาส์พร้อมลูกบอลเด้ง
// แสดงที่ด้านล่างของ Hero Section

import React from 'react';

export default function ScrollIndicator({ isDark }) {
  return (
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
      {/* กล่องมนรูปเมาส์ */}
      <div className={`w-6 h-10 border-2 rounded-full flex justify-center pt-2 ${
        isDark ? 'border-white/30' : 'border-black/30'
      }`}>
        {/* จุดด้านใน */}
        <div className={`w-1 h-2 rounded-full ${
          isDark ? 'bg-white/50' : 'bg-black/50'
        }`} />
      </div>
    </div>
  );
}