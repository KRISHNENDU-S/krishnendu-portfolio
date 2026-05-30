import { ExternalLink, BookOpen, Star, Github } from "lucide-react";
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

export default function ProjectCard({ project }: ProjectCardProps) {
  const hasLinks = project.publicationUrl || project.liveUrl || project.showGithub;

  return (
    <article
      className={cn(
        "group relative flex flex-col bg-bg-card rounded-xl p-6 glow-border",
        "transition-all duration-300"
      )}
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 flex items-center gap-1 text-amber-400 text-xs font-mono">
          <Star size={10} fill="currentColor" />
          <span>Featured</span>
        </div>
      )}

      {/* Category tag */}
      <span
        className={cn(
          "self-start px-2 py-0.5 rounded text-[10px] font-mono font-medium border mb-4",
          categoryColors[project.category]
        )}
      >
        {project.category}
      </span>

      {/* Title */}
      <h3 className="font-display font-bold text-lg text-text-primary mb-2 group-hover:text-accent-secondary transition-colors">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-5">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 rounded text-[10px] font-mono text-text-muted bg-bg-border/60"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links — only IEEE paper and Live Demo, no Code link */}
      {hasLinks && (
        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-bg-border flex-wrap">
          {project.showGithub && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono text-text-muted hover:text-text-primary transition-colors"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github size={13} />
              <span>Code</span>
            </a>
          )}

          {project.publicationUrl && (
            <a
              href={project.publicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono text-violet-400 hover:text-violet-300 transition-colors"
              aria-label={`Read ${project.title} IEEE publication`}
            >
              <BookOpen size={13} />
              <span>IEEE Paper</span>
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono text-accent-secondary hover:text-accent-primary transition-colors ml-auto"
              aria-label={`View ${project.title} live demo`}
            >
              <span>Live Demo</span>
              <ExternalLink size={11} />
            </a>
          )}
        </div>
      )}
    </article>
  );
}
