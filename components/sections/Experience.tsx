import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { Briefcase, ExternalLink } from "lucide-react";

const experiences = [
  {
    role: "Associate Software Developer",
    company: "Oracle",
    period: "08/2025 – 03/2026",
    location: "Hyderabad",
    highlights: [
      "Engineered Cypress automation frameworks, increasing test coverage by 20–30%",
      "Resolved critical production issues, improving system performance by 20%",
      "Built scalable microservices and API-driven systems, improving response time by 15%",
      "Delivered 10+ production-ready features, accelerating release cycles by 20% in Agile",
    ],
  },
  {
    role: "Project Intern",
    company: "Oracle",
    period: "01/2025 – 07/2025",
    location: "Hyderabad",
    highlights: [
      "Developed AI chatbot using Oracle Digital Assistant with ~99% accuracy via vectorized PDF training",
      "Reduced manual support dependency by 40% through automated query resolution",
      "Designed dynamic UI workflows using Oracle JET (OJET), improving UX efficiency by 25%",
    ],
  },
  {
    role: "Software Project Intern",
    company: "SBL",
    period: "08/2023 – 09/2023",
    location: "Kochi, Kerala",
    highlights: [
      "Contributed to development of application modules, improving feature delivery speed by 15%",
    ],
  },
];

const publications = [
  {
    title: "EMERGIFY — Real-Time Emergency Response Application",
    venue: "IEEE",
    url: "https://ieeexplore.ieee.org/abstract/document/11005046",
  },
  {
    title: "Deep Learning for Age & Gender Prediction",
    venue: "IEEE",
    url: "https://ieeexplore.ieee.org/abstract/document/10724502",
  },
  {
    title: "Heart Failure Prediction using Machine Learning",
    venue: "IEEE",
    url: "https://ieeexplore.ieee.org/abstract/document/10724418",
  },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-bg-secondary">
      <SectionHeading
        label="career"
        title="Experience & Publications"
        subtitle="Professional experience at Oracle and research published in IEEE."
      />

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Experience */}
        <div>
          <h3 className="font-mono text-xs text-accent-primary uppercase tracking-widest mb-6">
            Work Experience
          </h3>
          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-5 border-l border-bg-border">
                <div className="absolute -left-1 top-1 w-2 h-2 rounded-full bg-accent-primary" />
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div>
                    <p className="font-display font-bold text-text-primary text-base">
                      {exp.role}
                    </p>
                    <p className="font-mono text-xs text-accent-secondary flex items-center gap-1">
                      <Briefcase size={10} />
                      {exp.company} · {exp.location}
                    </p>
                  </div>
                  <span className="font-mono text-[10px] text-text-muted whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <ul className="mt-2 flex flex-col gap-1">
                  {exp.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="text-xs text-text-secondary leading-relaxed flex gap-2"
                    >
                      <span className="text-accent-primary mt-0.5 flex-shrink-0">›</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Publications + Education */}
        <div className="flex flex-col gap-10">
          {/* Publications */}
          <div>
            <h3 className="font-mono text-xs text-accent-primary uppercase tracking-widest mb-6">
              IEEE Publications
            </h3>
            <div className="flex flex-col gap-4">
              {publications.map((pub, i) => (
                <a
                  key={i}
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 p-4 bg-bg-card rounded-lg border border-bg-border hover:border-accent-primary/40 transition-all"
                >
                  <div className="flex-1">
                    <p className="text-sm text-text-primary group-hover:text-accent-secondary transition-colors font-medium leading-snug">
                      {pub.title}
                    </p>
                    <p className="font-mono text-xs text-text-muted mt-1">
                      {pub.venue}
                    </p>
                  </div>
                  <ExternalLink
                    size={13}
                    className="text-text-muted group-hover:text-accent-primary transition-colors flex-shrink-0 mt-0.5"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-mono text-xs text-accent-primary uppercase tracking-widest mb-6">
              Education
            </h3>
            <div className="p-4 bg-bg-card rounded-lg border border-bg-border">
              <p className="font-display font-bold text-text-primary">
                B.Tech — Computer Science Engineering
              </p>
              <p className="font-mono text-xs text-accent-secondary mt-1">
                Amrita Vishwa Vidyapeetham · Amritapuri
              </p>
              <p className="font-mono text-xs text-text-muted mt-1">
                08/2021 – 05/2025
              </p>
              <div className="flex gap-4 mt-3">
                <span className="px-2 py-1 rounded text-xs font-mono bg-accent-primary/10 text-accent-primary border border-accent-primary/20">
                  CGPA 9.5 / 10
                </span>
                <span className="px-2 py-1 rounded text-xs font-mono bg-bg-border text-text-secondary">
                  Rank 6th in Batch
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
