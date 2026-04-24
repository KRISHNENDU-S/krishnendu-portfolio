import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <SectionWrapper id="projects" withGrid>
      <SectionHeading
        label="work"
        title="Selected Projects"
        subtitle="AI systems, ML research, and real-time applications — published in IEEE and built at Oracle."
      />

      {/* Featured projects */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Other projects */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {others.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
}
