// ==================== Component: SkillItem ====================
// แสดงรายการความสามารถแต่ละอย่าง พร้อมจุดนำหน้า
// ใช้งาน: <SkillItem name="React" isDark={isDark} />

import React from 'react';

export default function SkillItem({ name, isDark }) {
  return (
    <div className="flex items-center gap-3">
      {/* จุดนำหน้า */}
      <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-white' : 'bg-black'}`} />
      {/* ชื่อ skill */}
      <span>{name}</span>
    </div>
  );
}