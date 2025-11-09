// ==================== Section: AboutSection ====================
// ส่วนแนะนำตัวและแสดง Skills
// แบ่งเป็น 2 คอลัมน์: เกี่ยวกับเรา และ ความสามารถ

import React from "react";
import SkillItem from "../ui/SkillItem";
import { skills } from "../../data/skills";

export default function AboutSection({ isDark }) {
  const textMuted = isDark ? "text-white/60" : "text-black/60";

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Grid 2 คอลัมน์บนจอขนาดกลางขึ้นไป */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* คอลัมน์ซ้าย: เกี่ยวกับเรา */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-8">About</h2>
            <div className={`space-y-4 leading-relaxed ${textMuted}`}>
              <p>
                I’m a recent graduate passionate about web design and
                development. Though I don’t have much professional experience
                yet, I’m eager to learn, explore, and grow through new
                challenges.
              </p>
              <p>
                I enjoy turning creative ideas into real websites and
                continuously improving my skills to build better digital
                experiences.
              </p>
            </div>
          </div>

          {/* คอลัมน์ขวา: ความสามารถ */}
          <div>
            <h3 className="text-2xl font-light mb-6">Skills</h3>
            <div className={`space-y-3 ${textMuted}`}>
              {/* วนลูปแสดง skills ทั้งหมดจาก data */}
              {skills.map((skill) => (
                <SkillItem key={skill.id} name={skill.name} isDark={isDark} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
