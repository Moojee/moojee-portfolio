// ==================== Section: ContactSection ====================
// ดึงข้อมูลจาก data/socialLinks.js

import React from "react";
import SocialLink from "../ui/SocialLink";
import { socialLinks } from "../../data/socialLinks";
import ResumeCard from "../ui/ResumeCard";

export default function ContactSection({ isDark }) {
  const textMuted = isDark ? "text-white/60" : "text-black/60";
  const borderColor = isDark ? "border-white/10" : "border-black/10";

  return (
    <section className={`relative py-32 px-6 border-t ${borderColor}`}>
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl md:text-6xl font-light mb-8">
          Let's Work Together
        </h2>


        <div className="flex flex-wrap justify-center gap-8 text-sm">
          {/* วนลูป */}
          {socialLinks.map((link) => (
            <SocialLink
              key={link.id}
              name={link.name}
              url={link.url}
              icon={link.icon}
              isDark={isDark}
            />
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-sm mt-10 ">
          <ResumeCard />
        </div>
      </div>
    </section>
  );
}
