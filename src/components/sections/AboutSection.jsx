// ==================== Section: AboutSection ====================
// ส่วนแนะนำตัวและแสดง Skills
// แบ่งเป็น 2 คอลัมน์: เกี่ยวกับเรา และ ความสามารถ

import React from "react";
import SkillItem from "../ui/SkillItem";
import { skills } from "../../data/skills";
import { socialLinks } from "../../data/socialLinks"; 
import SocialLink from "../ui/SocialLink"; 

export default function AboutSection({ isDark }) {
  const textMuted = isDark ? "text-white/60" : "text-black/60";

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Grid 2 คอลัมน์บนจอขนาดกลางขึ้นไป */}
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* คอลัมน์ซ้าย: เกี่ยวกับเรา */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-8">About Me</h2>
            <div className={`space-y-4 leading-relaxed ${textMuted}`}>
              <p>Hello, my name is Film. I’m 25 years old.</p>
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

            {/* โซเชียลลิงก์
              <div className="flex flex-wrap gap-8 text-sm mt-8">
                {socialLinks.map((link) => (
                  <SocialLink
                    key={link.name} 
                    name={link.name}
                    url={link.url}
                    icon={link.icon}
                    isDark={isDark}
                  />
                ))}
              </div> */}
          </div>

          {/* คอลัมน์ขวา: ความสามารถ */}
          <div>
            <h3 className="text-2xl font-light mb-6">Skills</h3>
            <div className={`space-y-3 ${textMuted}`}>
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
