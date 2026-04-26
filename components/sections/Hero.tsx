import { Github, Linkedin, Code2 } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden">

      {/* Background glow orbs */}
      <div
        className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto w-full pt-28 pb-16">
        <div className="max-w-4xl">

          {/* Availability pill */}
          {siteConfig.availableForWork && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/8 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              <span className="font-mono text-xs text-emerald-400 tracking-wide">
                Open to SDE / Backend / Full-Stack roles
              </span>
            </div>
          )}

          {/* Name — fixed to single line, controlled size */}
          <h1 className="font-display font-extrabold leading-none mb-4 whitespace-nowrap"
            style={{ fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)" }}>
            <span style={{ color: "#f0f0ff" }}>Krishnendu </span>
            <span style={{
              background: "linear-gradient(135deg, #a78bfa 0%, #6366f1 50%, #ec4899 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>S</span>
          </h1>

          {/* Role — styled with accent colour for contrast */}
          <p className="font-display font-semibold text-xl md:text-2xl mb-8 tracking-wide"
            style={{ color: "#a78bfa" }}>
            Software Development Engineer
          </p>

          {/* Punchy 3-line description */}
          <div className="flex flex-col gap-4 mb-10 max-w-2xl">
            <p className="text-lg leading-relaxed font-sans" style={{ color: "#d0d0f0" }}>
              I don&apos;t just write code —{" "}
              <span style={{ color: "#a78bfa", fontWeight: 600 }}>I engineer systems that matter.</span>{" "}
              SDE at Oracle, building production microservices, REST APIs, and AI-driven platforms used by real users at scale.
            </p>
            <p className="text-base leading-relaxed font-sans" style={{ color: "#9090b8" }}>
              <span style={{ color: "#f472b6", fontWeight: 600 }}>3× IEEE-published researcher</span> — my work spans real-time emergency systems, deep learning architectures, and healthcare ML. Research that doesn&apos;t just sit on paper — it&apos;s been built and shipped.
            </p>
            <p className="text-base leading-relaxed font-sans" style={{ color: "#9090b8" }}>
              B.Tech CSE · Amrita Vishwa Vidyapeetham ·{" "}
              <span style={{ color: "#34d399", fontWeight: 600 }}>CGPA 9.5 / 10</span>
              {" "}·{" "}
              <span style={{ color: "#34d399", fontWeight: 600 }}>Rank 6th in batch.</span>{" "}
              Built for impact, not just employment.
            </p>
          </div>

          {/* Stat pills */}
          <div className="flex flex-wrap gap-2.5 mb-10">
            {[
              { label: "Oracle SDE", icon: "💼", color: "#fbbf24" },
              { label: "3× IEEE Published", icon: "📄", color: "#a78bfa" },
              { label: "CGPA 9.5 / 10", icon: "🎓", color: "#34d399" },
              { label: "Hyderabad, India", icon: "📍", color: "#60a5fa" },
            ].map((stat) => (
              <span
                key={stat.label}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-mono text-xs font-medium"
                style={{
                  border: `1px solid ${stat.color}30`,
                  background: `${stat.color}0d`,
                  color: stat.color,
                }}
              >
                <span>{stat.icon}</span>
                {stat.label}
              </span>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-bg-border text-text-muted hover:text-white hover:border-accent-primary/50 transition-all"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-bg-border text-text-muted hover:text-white hover:border-accent-primary/50 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={siteConfig.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-bg-border text-text-muted hover:text-white hover:border-accent-primary/50 transition-all"
              aria-label="LeetCode"
            >
              <Code2 size={18} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
