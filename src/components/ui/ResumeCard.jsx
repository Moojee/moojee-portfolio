import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "../../data/resume";

export default function ResumeCard({ isDark }) {
  const handleDownload = () => {
    // สร้าง link element แบบ programmatic
    const link = document.createElement('a');
    link.href = resumeData.fileUrl;
    link.download = resumeData.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.button
        onClick={handleDownload}
        className={`px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2 transition-colors cursor-pointer ${isDark}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>{resumeData.btnDownload}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>
      </motion.button>
    </motion.div>
  );
}