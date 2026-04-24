import { Github, Linkedin, Mail, MapPin, Code2, Users, Award } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/lib/config";

const volunteering = [
  {
    icon: Award,
    title: "VIDYUT MULTIFEST — Event Director",
    description:
      "Led a team of 6 to organise a national-level tech fest, driving 100+ registrations in 3 days through cross-functional coordination and outreach.",
    tag: "Leadership",
    tagColor: "text-violet-400 bg-violet-400/10 border-violet-400/20",
  },
  {
    icon: Users,
    title: "Live In Labs — MALEGAON",
    description:
      "Led community-driven initiatives across villages, engaging 70+ residents and increasing participation by 40%. Outcomes published in a Q1 journal.",
    tag: "Social Impact",
    tagColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  },
  {
    icon: Award,
    title: "Oracle Volunteering Initiative",
    description:
      "Delivered sessions on ethical AI usage and responsible technology adoption to promote awareness within the organisation.",
    tag: "Oracle",
    tagColor: "text-red-400 bg-red-400/10 border-red-400/20",
  },
  {
    icon: Users,
    title: "Electro Savvy — SSR Initiative",
    description:
      "Conducted 3+ tech workshops to improve digital literacy across student communities.",
    tag: "Education",
    tagColor: "text-sky-400 bg-sky-400/10 border-sky-400/20",
  },
];

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="bg-bg-secondary">
      <SectionHeading
        label="get in touch"
        title="Let's Work Together"
        subtitle="Open to full-time SDE / Backend / Full-Stack roles."
      />

      <div className="grid lg:grid-cols-2 gap-16">

        {/* Left — contact info */}
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
            <div className="flex flex-wrap items-center gap-4">
              <a href={siteConfig.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary font-mono transition-colors">
                <Github size={16} />GitHub
              </a>
              <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary font-mono transition-colors">
                <Linkedin size={16} />LinkedIn
              </a>
              <a href={siteConfig.leetcode} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary font-mono transition-colors">
                <Code2 size={16} />LeetCode
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 text-text-muted font-mono text-xs">
            <MapPin size={12} />
            {siteConfig.location}
          </div>

          {/* Head Girl / House Captain badges */}
          <div className="flex flex-wrap gap-2">
            {["Head Girl 2019–20", "House Captain", "Class Topper"].map((badge) => (
              <span key={badge} className="px-3 py-1 rounded-full border border-bg-border font-mono text-xs text-text-muted bg-bg-card">
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Right — volunteering & leadership */}
        <div>
          <p className="font-mono text-xs text-accent-primary uppercase tracking-widest mb-6">
            Volunteering & Leadership
          </p>
          <div className="flex flex-col gap-4">
            {volunteering.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex gap-4 p-4 bg-bg-card rounded-xl border border-bg-border hover:border-accent-primary/20 transition-colors"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <Icon size={16} className="text-accent-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <p className="font-display font-bold text-sm text-text-primary leading-snug">
                        {item.title}
                      </p>
                      <span className={`flex-shrink-0 px-2 py-0.5 rounded text-[10px] font-mono font-medium border ${item.tagColor}`}>
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
