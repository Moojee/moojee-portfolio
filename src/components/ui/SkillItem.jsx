// ==================== Component: SkillItem ====================


import React from 'react';

export default function SkillItem({ name, isDark }) {
  return (
    <div className="flex items-center gap-3">
      {/* จุด */}
      <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-white' : 'bg-black'}`} />
      {/* skill */}
      <span>{name}</span>
    </div>
  );
}