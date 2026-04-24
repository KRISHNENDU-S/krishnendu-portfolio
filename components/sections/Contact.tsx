"use client";

import { useState, FormEvent } from "react";
import { Github, Linkedin, Mail, Send, MapPin, Code2 } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/lib/config";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate submission — wire up to Formspree/Resend in production
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <SectionWrapper id="contact" className="bg-bg-secondary">
      <SectionHeading
        label="get in touch"
        title="Let's Work Together"
        subtitle="Open to full-time roles, consulting, and interesting AI/backend projects."
      />

      <div className="grid md:grid-cols-2 gap-16">
        {/* Left — info */}
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-text-secondary leading-relaxed mb-6">
              Whether you have a role to discuss, a problem to solve, or just want
              to connect — my inbox is always open.
            </p>

            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 text-accent-secondary hover:text-accent-primary font-mono text-sm transition-colors"
            >
              <Mail size={14} />
              {siteConfig.email}
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs text-text-muted uppercase tracking-widest">
              Find me on
            </p>
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary font-mono transition-colors"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary font-mono transition-colors"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href={siteConfig.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary font-mono transition-colors"
              >
                <Code2 size={16} />
                LeetCode
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 text-text-muted font-mono text-xs">
            <MapPin size={12} />
            {siteConfig.location}
          </div>
        </div>

        {/* Right — form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="name"
              className="block font-mono text-xs text-text-muted mb-1.5"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Jane Smith"
              className="w-full px-4 py-2.5 bg-bg-card border border-bg-border rounded text-text-primary text-sm font-sans placeholder:text-text-muted focus:outline-none focus:border-accent-primary transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block font-mono text-xs text-text-muted mb-1.5"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="jane@company.com"
              className="w-full px-4 py-2.5 bg-bg-card border border-bg-border rounded text-text-primary text-sm font-sans placeholder:text-text-muted focus:outline-none focus:border-accent-primary transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block font-mono text-xs text-text-muted mb-1.5"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tell me about your project or role..."
              className="w-full px-4 py-2.5 bg-bg-card border border-bg-border rounded text-text-primary text-sm font-sans placeholder:text-text-muted focus:outline-none focus:border-accent-primary transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className="self-start inline-flex items-center gap-2 px-6 py-2.5 bg-accent-primary text-white text-sm font-mono rounded hover:bg-indigo-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "sending" ? (
              <>
                <span className="animate-spin w-3 h-3 border border-white/40 border-t-white rounded-full" />
                Sending…
              </>
            ) : status === "sent" ? (
              <>✓ Message Sent</>
            ) : (
              <>
                <Send size={13} />
                Send Message
              </>
            )}
          </button>

          {status === "error" && (
            <p className="text-red-400 text-xs font-mono">
              Something went wrong. Please email directly.
            </p>
          )}
        </form>
      </div>
    </SectionWrapper>
  );
}
