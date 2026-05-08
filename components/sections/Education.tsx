"use client";

import { useState } from "react";
import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { GraduationCap, ZoomIn, X } from "lucide-react";

function PhotoLightbox({
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
        <div className="flex items-center justify-between px-4 py-3 bg-bg-card border-b border-bg-border">
          <p className="font-mono text-xs text-text-muted truncate pr-4">{title}</p>
          <button
            onClick={onClose}
            className="flex-shrink-0 p-1.5 rounded-lg text-text-muted hover:text-white hover:bg-bg-border transition-all"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>
        <div className="relative w-full bg-bg-primary" style={{ aspectRatio: "4/3" }}>
          <Image src={src} alt={title} fill className="object-contain" priority />
        </div>
      </div>
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[10px] text-white/30">
        Click outside to close
      </p>
    </div>
  );
}

const collegePhotos = [
  {
    src: "/convocation.jpg",
    caption: "Certificate of Merit",
    sub: "Convocation Day",
    title: "Convocation — Certificate of Merit, Amrita Vishwa Vidyapeetham",
  },
  {
    src: "/college-award.jpg",
    caption: "Academic Excellence",
    sub: "College Topper",
    title: "Academic Excellence — College Topper Award",
  },
];

const schoolPhotos = [
  {
    src: "/school-1.jpg",
    caption: "School Days",
    sub: "St. Joseph Public School",
    title: "School — St. Joseph Public School, Pattanakad",
  },
  {
    src: "/school-2.jpg",
    caption: "Head Girl",
    sub: "2019 – 20",
    title: "Head Girl 2019–20 — St. Joseph Public School",
  },
];

const schoolMarks = [
  { label: "Class 10 ICSE", year: "2019", score: "95.1%", tag: "School Topper" },
  { label: "Class 12 ISC", year: "2021", score: "94.8%", tag: "Stream Topper" },
];

const schoolSubjects = [
  { label: "Computer Science", score: "100%", highlight: true },
  { label: "Mathematics", score: "97–98%", highlight: true },
  { label: "English", score: "96%", highlight: false },
  { label: "Science / Physics", score: "90–96%", highlight: false },
];

export default function Education() {
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);

  return (
    <SectionWrapper id="education" withGrid>
      <SectionHeading
        label="education"
        title="Education"
        subtitle="Academic background and achievements."
      />

      {lightbox && (
        <PhotoLightbox
          src={lightbox.src}
          title={lightbox.title}
          onClose={() => setLightbox(null)}
        />
      )}

      <div className="flex flex-col gap-5">

        {/* ── COLLEGE ── */}
        <div className="flex flex-col sm:flex-row gap-6 p-6 bg-bg-card rounded-2xl border border-bg-border hover:border-accent-primary/20 transition-all">

          {/* Clickable photos */}
          <div className="flex gap-3 flex-shrink-0">
            {collegePhotos.map((photo) => (
              <button
                key={photo.src}
                onClick={() => setLightbox({ src: photo.src, title: photo.title })}
                className="group/photo relative w-[96px] h-[120px] rounded-xl overflow-hidden border border-bg-border hover:border-accent-primary/50 transition-all cursor-zoom-in flex-shrink-0"
                aria-label={`View ${photo.caption}`}
              >
                <Image src={photo.src} alt={photo.caption} fill className="object-cover object-top group-hover/photo:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover/photo:bg-black/40 transition-all">
                  <ZoomIn size={16} className="text-white opacity-0 group-hover/photo:opacity-100 transition-opacity" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 px-1.5 py-1" style={{ background: "linear-gradient(to top, rgba(10,10,15,0.85) 0%, transparent 100%)" }}>
                  <p className="font-mono text-[7px] text-white/70 leading-tight">{photo.caption}</p>
                  <p className="font-mono text-[6px] text-white/40">{photo.sub}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Details */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-1">
              <GraduationCap size={14} className="text-accent-primary flex-shrink-0" />
              <p className="font-display font-bold text-text-primary text-base">
                B.Tech &mdash; Computer Science Engineering
              </p>
            </div>
            <p className="font-mono text-xs text-accent-secondary mb-1">
              Amrita Vishwa Vidyapeetham &middot; Amritapuri
            </p>
            <p className="font-mono text-[10px] text-text-muted mb-4">08/2021 &ndash; 05/2025</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-lg text-xs font-mono bg-accent-primary/10 text-accent-primary border border-accent-primary/20">CGPA 9.5 / 10</span>
              <span className="px-2.5 py-1 rounded-lg text-xs font-mono bg-bg-border text-text-secondary">Rank 6th in Batch</span>
              <span className="px-2.5 py-1 rounded-lg text-xs font-mono bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">First Class with Distinction</span>
              <span className="px-2.5 py-1 rounded-lg text-xs font-mono bg-violet-400/10 text-violet-400 border border-violet-400/20">Perfect 10 SGPA — Final Sem</span>
            </div>
            <p className="font-mono text-[10px] text-text-muted mt-3 flex items-center gap-1">
              <ZoomIn size={10} /> Click photos to view full size
            </p>
          </div>
        </div>

        {/* ── SCHOOL ── */}
        <div className="flex flex-col sm:flex-row gap-6 p-6 bg-bg-card rounded-2xl border border-bg-border hover:border-accent-primary/20 transition-all">

          {/* Clickable school photos */}
          <div className="flex gap-3 flex-shrink-0">
            {schoolPhotos.map((photo) => (
              <button
                key={photo.src}
                onClick={() => setLightbox({ src: photo.src, title: photo.title })}
                className="group/photo relative w-[96px] h-[120px] rounded-xl overflow-hidden border border-bg-border hover:border-amber-400/50 transition-all cursor-zoom-in flex-shrink-0"
                aria-label={`View ${photo.caption}`}
              >
                <Image src={photo.src} alt={photo.caption} fill className="object-cover object-top group-hover/photo:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover/photo:bg-black/40 transition-all">
                  <ZoomIn size={16} className="text-white opacity-0 group-hover/photo:opacity-100 transition-opacity" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 px-1.5 py-1" style={{ background: "linear-gradient(to top, rgba(10,10,15,0.85) 0%, transparent 100%)" }}>
                  <p className="font-mono text-[7px] text-white/70 leading-tight">{photo.caption}</p>
                  <p className="font-mono text-[6px] text-white/40">{photo.sub}</p>
                </div>
              </button>
            ))}
          </div>

          {/* School details */}
          <div className="flex-1 flex flex-col justify-center gap-4">

            {/* Name + board */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <GraduationCap size={14} className="text-amber-400 flex-shrink-0" />
                <p className="font-display font-bold text-text-primary text-base">
                  St. Joseph Public School, Pattanakad
                </p>
              </div>
              <p className="font-mono text-xs text-amber-400/80 mb-1">
                CISCE Board &middot; ICSE &amp; ISC
              </p>
              <p className="font-mono text-[10px] text-text-muted">2008 &ndash; 2021</p>
            </div>

            {/* Marks row */}
            <div className="flex flex-wrap gap-3">
              {schoolMarks.map((m) => (
                <div
                  key={m.label}
                  className="flex flex-col px-3 py-2 rounded-xl border border-amber-400/20 bg-amber-400/8"
                >
                  <span className="font-display font-extrabold text-lg leading-none text-amber-400">{m.score}</span>
                  <span className="font-mono text-[9px] text-text-muted mt-0.5">{m.label} &middot; {m.year}</span>
                  <span className="font-mono text-[9px] text-amber-400/70 mt-0.5">&#9733; {m.tag}</span>
                </div>
              ))}
            </div>

            {/* Subject highlights */}
            <div className="flex flex-wrap gap-2">
              {schoolSubjects.map((s) => (
                <span
                  key={s.label}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-mono border ${
                    s.highlight
                      ? "bg-emerald-400/10 text-emerald-400 border-emerald-400/20"
                      : "bg-bg-border text-text-secondary border-transparent"
                  }`}
                >
                  {s.label}: {s.score}
                </span>
              ))}
            </div>

            {/* Achievement badges */}
            <div className="flex flex-wrap gap-2">
              {[
                { label: "&#9733; Head Girl 2019–20", color: "text-amber-400 bg-amber-400/10 border-amber-400/20" },
                { label: "House Captain", color: "bg-bg-border text-text-secondary" },
                { label: "Best Outgoing Student '19 &amp; '21", color: "text-violet-400 bg-violet-400/10 border-violet-400/20" },
                { label: "Basketball School Team", color: "text-sky-400 bg-sky-400/10 border-sky-400/20" },
              ].map((badge) => (
                <span
                  key={badge.label}
                  className={`px-2.5 py-1 rounded-full text-[10px] font-mono border ${badge.color}`}
                  dangerouslySetInnerHTML={{ __html: badge.label }}
                />
              ))}
            </div>

          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
