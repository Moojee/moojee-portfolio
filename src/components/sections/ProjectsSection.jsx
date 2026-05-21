
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { projects, categories } from '../../data/projects'
import ProjectCard from '../ui/ProjectCard'

export default function ProjectsSection({ isDark }) {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  // จัดกลุ่มตาม category สำหรับ section headings
  const grouped = categories
    .filter(c => c.id !== 'all')
    .map(c => ({
      ...c,
      items: filtered.filter(p => p.category === c.id),
    }))
    .filter(g => g.items.length > 0)

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-light mb-12 text-center">
          My Works
        </h2>

        {/* Tab filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 text-sm border transition-all duration-300 rounded-lg ${
                activeCategory === cat.id
                  ? isDark
                    ? 'bg-white text-black border-white'
                    : 'bg-black text-white border-black'
                  : isDark
                    ? 'border-white/20 text-white/60 hover:border-white/50 hover:text-white'
                    : 'border-black/20 text-black/60 hover:border-black/50 hover:text-black'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Sections แยกตาม category */}
        <div className="space-y-20">
          {grouped.map(group => (
            <div key={group.id}>
              {/* Section heading */}
              <div className="flex items-center gap-4 mb-8">
                <span className={`text-xs tracking-widest uppercase ${
                  isDark ? 'text-white/40' : 'text-black/40'
                }`}>
                  {group.label}
                </span>
                <div className={`flex-1 h-px ${
                  isDark ? 'bg-white/10' : 'bg-black/10'
                }`} />
              </div>

              {/* Cards grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.items.map(project => (
                  <Link key={project.id} to={`/projects/${project.slug}`}>
                    <ProjectCard
                      title={project.title}
                      date={project.date}
                      role={project.role}
                      link={project.link}
                      image={project.image}
                      description={project.description}
                      tags={project.tags}
                      isDark={isDark}
                    />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}