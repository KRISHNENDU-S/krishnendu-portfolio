import Link from "next/link";
import { Github, Linkedin, Download, ArrowDown, Code2, FileText } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(167, 139, 250, 0.05) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto w-full pt-24">
        <div className="max-w-3xl">

          {/* Status */}
          {siteConfig.availableForWork && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              <span className="font-mono text-xs text-emerald-400">
                Open to SDE / Backend / Full-Stack roles
              </span>
            </div>
          )}

          <p className="font-mono text-sm text-text-muted mb-4">Hi, I&apos;m</p>

          <h1 className="font-display font-extrabold text-5xl md:text-7xl text-text-primary leading-none mb-4">
            <span>Krishnendu </span>
            <span className="text-gradient">S</span>
          </h1>

          <p className="font-display text-xl md:text-2xl text-text-secondary mb-6">
            {siteConfig.role}
          </p>

          {/* Strengthened description — 3 punchy lines */}
          <div className="flex flex-col gap-2 mb-8 max-w-xl">
            <p className="text-base text-text-primary leading-relaxed">
              SDE at <span className="text-accent-secondary font-medium">Oracle</span> — building microservices, REST APIs, and AI-powered systems that run in production.
            </p>
            <p className="text-base text-text-secondary leading-relaxed">
              Author of <span className="text-accent-secondary font-medium">3 IEEE-published papers</span> across emergency systems, deep learning, and healthcare ML.
            </p>
            <p className="text-base text-text-secondary leading-relaxed">
              B.Tech CSE · Amrita Vishwa Vidyapeetham · <span className="text-accent-secondary font-medium">CGPA 9.5 / 10 · Rank 6th in batch.</span>
            </p>
          </div>

          {/* Quick stat pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {[
              { label: "Oracle SDE", icon: "💼" },
              { label: "3× IEEE Published", icon: "📄" },
              { label: "CGPA 9.5", icon: "🎓" },
              { label: "Hyderabad, India", icon: "📍" },
            ].map((stat) => (
              <span
                key={stat.label}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-bg-border bg-bg-card font-mono text-xs text-text-secondary"
              >
                <span>{stat.icon}</span>
                {stat.label}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={siteConfig.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-primary text-white text-sm font-mono font-medium rounded hover:bg-indigo-500 transition-colors"
            >
              <Download size={14} />
              Download Resume
            </a>

            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 border border-bg-border text-text-secondary text-sm font-mono rounded hover:border-accent-primary hover:text-text-primary transition-all"
            >
              <FileText size={14} />
              View Projects
            </Link>

            <div className="flex items-center gap-3 ml-2">
              <a href={siteConfig.github} target="_blank" rel="noopener noreferrer"
                className="p-2 text-text-muted hover:text-text-primary border border-bg-border rounded hover:border-accent-primary/40 transition-colors" aria-label="GitHub">
                <Github size={16} />
              </a>
              <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer"
                className="p-2 text-text-muted hover:text-text-primary border border-bg-border rounded hover:border-accent-primary/40 transition-colors" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href={siteConfig.leetcode} target="_blank" rel="noopener noreferrer"
                className="p-2 text-text-muted hover:text-text-primary border border-bg-border rounded hover:border-accent-primary/40 transition-colors" aria-label="LeetCode">
                <Code2 size={16} />
              </a>
            </div>
          </div>

          <div className="mt-20 flex items-center gap-3 text-text-muted">
            <ArrowDown size={14} className="animate-bounce" aria-hidden="true" />
            <span className="font-mono text-xs">Scroll to explore</span>
          </div>
        </div>
      </div>
    </section>
  );
}
