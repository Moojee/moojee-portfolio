import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink, X } from 'lucide-react'
import { projects } from "../../data/projects";

export default function ProjectDetailPage({ isDark }) {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [activeImg, setActiveImg] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-lg">Project not found</p>
        <Link to="/" className="text-sm underline opacity-60">
          ← Back to home
        </Link>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen px-6 py-16 ${isDark ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Back button */}
        <Link
          to="/"
          className={`inline-flex items-center gap-2 text-sm mb-12 transition-opacity hover:opacity-100 ${
            isDark ? "opacity-50" : "opacity-40"
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to projects
        </Link>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — Image gallery */}
          <div>
            {/* Main image — คลิกเพื่อเปิดเต็ม */}
            <div
              className={`aspect-video overflow-hidden border mb-3 cursor-zoom-in ${
                isDark ? "border-white/10" : "border-black/10"
              }`}
              onClick={() => setLightboxOpen(true)}
            >
              <img
                src={project.images[activeImg]}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            {project.images.length > 1 && (
              <div className="flex gap-2">
                {project.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`w-16 h-12 overflow-hidden border transition-all ${
                      activeImg === i
                        ? isDark
                          ? "border-white"
                          : "border-black"
                        : isDark
                          ? "border-white/20 opacity-50"
                          : "border-black/20 opacity-50"
                    }`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right — Info */}
          <div>
            {/* Category badge */}
            <span
              className={`text-xs tracking-widest uppercase px-3 py-1 border ${
                isDark
                  ? "border-white/20 text-white/50"
                  : "border-black/20 text-black/50"
              }`}
            >
              {project.category}
            </span>

            <h1 className="text-3xl font-light mt-4 mb-2">{project.title}</h1>

            <p
              className={`text-sm mb-6 ${isDark ? "text-white/50" : "text-black/50"}`}
            >
              {project.date} · {project.role}
            </p>

            <p
              className={` whitespace-pre-line text-sm leading-relaxed mb-8 ${isDark ? "text-white/70" : "text-black/70"}`}
            >
              {project.longDescription}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className={`text-xs px-3 py-1 ${
                    isDark
                      ? "bg-white/10 text-white/70"
                      : "bg-black/10 text-black/70"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Visit button */}

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 text-sm border transition-all duration-300 ${
                  isDark
                    ? "border-white text-white hover:bg-white hover:text-black"
                    : "border-black text-black hover:bg-black hover:text-white"
                }`}
              >
                <ExternalLink className="w-4 h-4" />
                Visit website
              </a>
            )}
          </div>
          {/* Video section */}
          {project.video && (
            <div
              className={`mt-4 aspect-video border ${
                isDark ? "border-white/10" : "border-black/10"
              }`}
            >
              <iframe
                src={project.video}
                title={`${project.title} demo`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>
      </div>
      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 cursor-zoom-out"
          onClick={() => setLightboxOpen(false)}
        >
          {/* ปุ่มปิด */}
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setLightboxOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>

          {/* รูปเต็ม */}
          <img
            src={project.images[activeImg]}
            alt={project.title}
            className="max-w-[90vw] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* ปุ่ม prev/next ถ้ามีหลายรูป */}
          {project.images.length > 1 && (
            <>
              <button
                className="absolute left-6 text-white/70 hover:text-white transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImg(
                    (i) =>
                      (i - 1 + project.images.length) % project.images.length,
                  );
                }}
              >
                <ArrowLeft className="w-8 h-8" />
              </button>
              <button
                className="absolute right-6 text-white/70 hover:text-white transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImg((i) => (i + 1) % project.images.length);
                }}
              >
                <ArrowRight className="w-8 h-8" />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
