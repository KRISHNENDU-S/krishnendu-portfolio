"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, BookOpen, Star, ZoomIn, X } from "lucide-react";
import { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

const categoryColors: Record<Project["category"], string> = {
  AI: "text-violet-400 bg-violet-400/10 border-violet-400/20",
  Backend: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  Fullstack: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  ML: "text-amber-400 bg-amber-400/10 border-amber-400/20",
};

function CertLightbox({
  src,
  title,
  onClose,
}: {
  src: string;
  title: string;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
      style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl overflow-hidden border border-bg-border shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-bg-card border-b border-bg-border">
          <p className="font-mono text-xs text-text-muted truncate pr-4">
            Certificate of Presentation &mdash; {title}
          </p>
          <button
            onClick={onClose}
            className="flex-shrink-0 p-1.5 rounded-lg text-text-muted hover:text-white hover:bg-bg-border transition-all"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>
        {/* Full cert image */}
        <div className="relative w-full bg-bg-primary" style={{ aspectRatio: "4/3" }}>
          <Image
            src={src}
            alt={`Certificate of Presentation — ${title}`}
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[10px] text-white/30">
        Click outside to close
      </p>
    </div>
  );
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [showCert, setShowCert] = useState(false);
  const hasFooter = project.publicationUrl || project.liveUrl || project.certUrl;

  return (
    <>
      {/* Lightbox — only renders when cert exists and is triggered */}
      {showCert && project.certUrl && (
        <CertLightbox
          src={project.certUrl}
          title={project.title}
          onClose={() => setShowCert(false)}
        />
      )}

      <article className="group relative flex flex-col bg-bg-card rounded-xl p-5 glow-border transition-all duration-300 h-full">

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 flex items-center gap-1 text-amber-400 text-xs font-mono">
            <Star size={10} fill="currentColor" />
            <span>Featured</span>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className={cn("px-2 py-0.5 rounded text-[10px] font-mono font-medium border", categoryColors[project.category])}>
            {project.category}
          </span>
          {project.publicationUrl && (
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium border border-violet-400/25 bg-violet-400/10 text-violet-400">
              IEEE Published
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-base text-text-primary mb-2 group-hover:text-accent-secondary transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-2 py-0.5 rounded text-[10px] font-mono text-text-muted bg-bg-border/60">
              {tech}
            </span>
          ))}
        </div>

        {/* Footer */}
        {hasFooter && (
          <div className="mt-auto pt-4 border-t border-bg-border">
            <div className="flex items-start gap-3">

              {/* ── Cert thumbnail — clickable, opens lightbox ── */}
              {project.certUrl && (
                <button
                  onClick={() => setShowCert(true)}
                  className="group/cert flex-shrink-0 relative w-[56px] h-[72px] rounded-lg overflow-hidden border border-bg-border hover:border-violet-400/60 transition-all cursor-zoom-in"
                  aria-label={`View certificate for ${project.title}`}
                >
                  <Image
                    src={project.certUrl}
                    alt={`Certificate — ${project.title}`}
                    fill
                    className="object-cover object-top"
                  />
                  {/* Zoom overlay on hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover/cert:bg-black/50 transition-all">
                    <ZoomIn size={14} className="text-white opacity-0 group-hover/cert:opacity-100 transition-opacity" />
                  </div>
                </button>
              )}

              {/* Links */}
              <div className="flex flex-col gap-2 justify-center">
                {project.publicationUrl && (
                  <a
                    href={project.publicationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    <BookOpen size={11} />
                    IEEE Paper
                  </a>
                )}
                {project.certUrl && (
                  <button
                    onClick={() => setShowCert(true)}
                    className="flex items-center gap-1.5 text-xs font-mono text-text-muted hover:text-white transition-colors text-left"
                  >
                    <ZoomIn size={11} />
                    View Certificate
                  </button>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono text-accent-secondary hover:text-accent-primary transition-colors"
                  >
                    <ExternalLink size={11} />
                    Live Demo
                  </a>
                )}
              </div>

            </div>
          </div>
        )}
      </article>
    </>
  );
}
