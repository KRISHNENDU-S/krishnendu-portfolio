import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { skillCategories, Skill } from "@/lib/skills";
import { cn } from "@/lib/utils";

const levelConfig: Record<
  NonNullable<Skill["level"]>,
  { badge: string; dot: string; label: string }
> = {
  expert: {
    badge:
      "border-indigo-400/40 bg-indigo-400/12 hover:border-indigo-400/60 hover:bg-indigo-400/20",
    dot: "bg-indigo-400 shadow-[0_0_7px_rgba(99,102,241,0.9)]",
    label: "Expert",
  },
  proficient: {
    badge:
      "border-sky-400/30 bg-sky-400/10 hover:border-sky-400/50 hover:bg-sky-400/15",
    dot: "bg-sky-400 shadow-[0_0_6px_rgba(56,189,248,0.7)]",
    label: "Proficient",
  },
  familiar: {
    badge:
      "border-bg-border bg-bg-card hover:border-text-muted/30",
    dot: "bg-text-muted",
    label: "Familiar",
  },
};

const levelTextColor: Record<NonNullable<Skill["level"]>, string> = {
  expert: "text-indigo-300 group-hover:text-indigo-200",
  proficient: "text-sky-300 group-hover:text-sky-200",
  familiar: "text-text-secondary group-hover:text-text-primary",
};

function SkillBadge({ skill }: { skill: Skill }) {
  const level = skill.level ?? "familiar";
  const config = levelConfig[level];

  return (
    <div
      className={cn(
        "group flex items-center gap-2 px-3 py-2 rounded-lg border transition-all duration-200",
        config.badge
      )}
    >
      <span
        className={cn("w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all", config.dot)}
        title={config.label}
        aria-label={config.label}
      />
      <span
        className={cn(
          "font-mono text-xs transition-colors",
          levelTextColor[level]
        )}
      >
        {skill.name}
      </span>
    </div>
  );
}

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-bg-secondary">
      <SectionHeading
        label="capabilities"
        title="Skills & Tech"
        subtitle="Languages, frameworks, and tools from 2+ years of professional development at Oracle."
      />

      {/* Legend */}
      <div className="flex flex-wrap gap-5 mb-10">
        {(["expert", "proficient", "familiar"] as const).map((level) => (
          <div key={level} className="flex items-center gap-2">
            <span
              className={cn("w-2 h-2 rounded-full", levelConfig[level].dot)}
              aria-hidden="true"
            />
            <span className="font-mono text-xs text-text-muted capitalize">
              {levelConfig[level].label}
            </span>
          </div>
        ))}
      </div>

      {/* Categories grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category) => (
          <div key={category.label}>
            <h3 className="font-mono text-xs text-accent-primary uppercase tracking-widest mb-4">
              {category.label}
            </h3>
            <div className="flex flex-col gap-2">
              {category.skills.map((skill) => (
                <SkillBadge key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
