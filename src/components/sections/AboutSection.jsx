// ==================== Section: AboutSection ====================

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
        {/* Grid 2  */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* คอลัมน์ซ้าย: เกี่ยวกับ */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-8">About Me</h2>
            <div className={`space-y-4 leading-relaxed ${textMuted}`}>
              <p>Hello, my name is Film. I’m 26 years old.</p>
              <p>
                I'm a recent graduate with a background in digital technology,
                passionate about problem-solving and creating meaningful digital
                experiences. I enjoy working at the intersection of technology
                and people — whether that's designing systems, building
                interfaces, or improving the way things work.
              </p>
              <p>
                I'm always eager to learn, take on new challenges, and grow
                through hands-on experience.
              </p>
            </div>
          </div>

          {/* คอลัมน์ขวา: สกิล */}
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
