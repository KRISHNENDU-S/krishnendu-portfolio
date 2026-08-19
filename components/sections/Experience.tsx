import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    role: "AI Engineer",
    company: "Avira Digital",
    period: "07/2026 – Present",
    location: "Hyderabad",
    color: "#10b981",
    highlights: [
      "Built a production LangChain DeepAgents transformer node with Tavily search and AzureChatOpenAI, replacing a UI-based internal agent in a pharma data pipeline",
      "Implemented async concurrent execution with semaphore tuning, processing 100 rows in 3 minutes across an 11K-row production database within a hard 500s platform timeout",
      "Delivered an AI tagging pipeline integrating LangChain DeepAgents with PostgreSQL read/write nodes and internet-augmented enrichment, handed over end-to-end within the first month",
      "Led systematic evaluation of the LangChain DeepAgents framework: built a modular repo spanning config, middleware, skills, memory, and subagent layers, wrote 2 custom middleware, and documented 26 middleware across 4 categories via a Streamlit configurator UI",
    ],
  },
  {
    role: "Associate Software Developer",
    company: "Oracle",
    period: "07/2025 – 04/2026",
    location: "Hyderabad",
    color: "#f97316",
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
    color: "#f97316",
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
    color: "#6366f1",
    highlights: [
      "Contributed to development of application modules, improving feature delivery speed by 15%",
    ],
  },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-bg-secondary">
      <SectionHeading
        label="career"
        title="Work Experience"
        subtitle="Professional experience building production AI systems and software at Avira Digital, Oracle, and beyond."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="group flex flex-col bg-bg-card rounded-2xl border border-bg-border hover:border-accent-primary/25 transition-all duration-300 overflow-hidden"
          >
            {/* Top accent bar */}
            <div
              className="h-[3px] w-full"
              style={{ background: `linear-gradient(90deg, ${exp.color}90 0%, transparent 100%)` }}
            />

            <div className="flex flex-col flex-1 p-5 gap-4">

              {/* Company badge + role */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-mono font-semibold border"
                    style={{
                      color: exp.color,
                      borderColor: `${exp.color}30`,
                      background: `${exp.color}10`,
                    }}
                  >
                    <Briefcase size={9} />
                    {exp.company}
                  </span>
                </div>
                <h3 className="font-display font-bold text-text-primary text-base leading-snug group-hover:text-accent-secondary transition-colors">
                  {exp.role}
                </h3>
              </div>

              {/* Meta — location + period */}
              <div className="flex flex-col gap-1">
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-text-muted">
                  <MapPin size={9} />
                  {exp.location}
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-text-muted">
                  <Calendar size={9} />
                  {exp.period}
                </span>
              </div>

              {/* Divider */}
              <div className="border-t border-bg-border" />

              {/* Highlights */}
              <ul className="flex flex-col gap-2 flex-1">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="text-xs text-text-secondary leading-relaxed flex gap-2">
                    <span className="text-accent-primary flex-shrink-0 mt-0.5">&rsaquo;</span>
                    {h}
                  </li>
                ))}
              </ul>

            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
