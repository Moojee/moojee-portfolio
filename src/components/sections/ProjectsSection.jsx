// ==================== Section: ProjectsSection ====================
// ส่วนแสดงผลงานทั้งหมดในรูปแบบ grid
// ดึงข้อมูลจาก data/projects.js

import React from 'react';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/projects';

export default function ProjectsSection({ isDark }) {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* หัวข้อ */}
        <h2 className="text-4xl md:text-5xl font-light mb-16 text-center">
          Selected Works
        </h2>
        
        {/* Grid แสดงโปรเจค: 1 คอลัมน์บนมือถือ, 2 บน tablet, 3 บน desktop */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* วนลูปแสดง ProjectCard ทุกโปรเจคจาก data */}
          {projects.map((project) => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              date={project.date}
              role={project.role}
              link={project.link}
              isDark={isDark}
            />
          ))}
        </div>
      </div>
    </section>
  );
}