import Link from "next/link";
import { Github, Linkedin, Mail, Terminal, Code2 } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-bg-border bg-bg-primary">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2 text-text-muted">
          <Terminal size={14} className="text-accent-primary" />
          <span className="font-mono text-xs">
            {siteConfig.name.toLowerCase().replace(" ", ".")} © {year}
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={siteConfig.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text-primary transition-colors"
            aria-label="LeetCode"
          >
            <Code2 size={16} />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-text-muted hover:text-text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>

        <p className="font-mono text-xs text-text-muted">
          Built with Next.js + Tailwind
        </p>
      </div>
    </footer>
  );
}
