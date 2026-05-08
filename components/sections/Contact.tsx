import { Github, Linkedin, Mail, MapPin, Code2 } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-bg-border bg-bg-primary">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Top row — title + availability pill */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <p className="font-mono text-[10px] text-accent-primary uppercase tracking-widest mb-1">
              // get in touch
            </p>
            <h2 className="font-display font-bold text-2xl text-text-primary">
              Let&apos;s Work Together
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs text-emerald-400 tracking-wide">
              Open to SDE / Full-Stack / AI · ML Engineering roles
            </span>
          </div>
        </div>

        {/* Bottom row — all links in one compact bar */}
        <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-bg-border">

          {/* Email */}
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 text-sm font-mono text-accent-secondary hover:text-accent-primary transition-colors"
          >
            <Mail size={14} />
            {siteConfig.email}
          </a>

          {/* Divider */}
          <span className="hidden sm:block w-px h-4 bg-bg-border" />

          {/* Location */}
          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-text-muted">
            <MapPin size={12} />
            {siteConfig.location}
          </span>

          {/* Divider */}
          <span className="hidden sm:block w-px h-4 bg-bg-border" />

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono text-text-secondary hover:text-text-primary transition-colors"
            >
              <Github size={14} />
              GitHub
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono text-text-secondary hover:text-text-primary transition-colors"
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
            <a
              href={siteConfig.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono text-text-secondary hover:text-text-primary transition-colors"
            >
              <Code2 size={14} />
              LeetCode
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
