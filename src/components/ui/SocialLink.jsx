// ==================== Component: SocialLink ====================

import React from "react";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  line: MessageCircle,
  mail: Mail,
};

export default function SocialLink({ name, url, icon, isDark }) {
  const Icon = iconMap[icon];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 transition-all duration-200 ${
        isDark
          ? "text-white hover:text-[#deb27f]"
          : "text-black hover:text-[#deb27f]"
      }`}
    >
      {Icon && <Icon size={20} strokeWidth={1.5} />}
      <span className="text-sm font-light">{name}</span>
    </a>
  );
}
