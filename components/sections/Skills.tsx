import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { skillCategories, Skill } from "@/lib/skills";
import { cn } from "@/lib/utils";

const levelDot: Record<NonNullable<Skill["level"]>, string> = {
  expert: "bg-accent-primary",
  proficient: "bg-accent-secondary/70",
  familiar: "bg-text-muted",
};

const levelLabel: Record<NonNullable<Skill["level"]>, string> = {
  expert: "Expert",
  proficient: "Proficient",
  familiar: "Familiar",
};

function SkillBadge({ skill }: { skill: Skill }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-bg-border bg-bg-card hover:border-accent-primary/30 transition-colors group">
      {skill.level && (
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full flex-shrink-0",
            levelDot[skill.level]
          )}
          title={levelLabel[skill.level]}
          aria-label={levelLabel[skill.level]}
        />
      )}
      <span className="font-mono text-xs text-text-secondary group-hover:text-text-primary transition-colors">
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
      <div className="flex flex-wrap gap-4 mb-10">
        {(["expert", "proficient", "familiar"] as const).map((level) => (
          <div key={level} className="flex items-center gap-1.5">
            <span
              className={cn("w-1.5 h-1.5 rounded-full", levelDot[level])}
              aria-hidden="true"
            />
            <span className="font-mono text-xs text-text-muted capitalize">
              {levelLabel[level]}
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
