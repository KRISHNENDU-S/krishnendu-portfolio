import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { BadgeCheck, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Oracle Cloud Infrastructure AI Foundations Associate",
    issuer: "Oracle",
    date: "Mar 2026",
    credentialUrl: "https://www.oracle.com/cloud/",
    color: "text-red-400 bg-red-400/10 border-red-400/20",
    dot: "bg-red-400",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera · DeepLearning.AI",
    date: "2024",
    credentialUrl: "https://www.coursera.org/specializations/machine-learning-introduction",
    color: "text-sky-400 bg-sky-400/10 border-sky-400/20",
    dot: "bg-sky-400",
  },
  {
    title: "Deep Learning with PyTorch",
    issuer: "Coursera",
    date: "2024",
    credentialUrl: "https://www.coursera.org/",
    color: "text-orange-400 bg-orange-400/10 border-orange-400/20",
    dot: "bg-orange-400",
  },
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM · Coursera",
    date: "2023",
    credentialUrl: "https://www.coursera.org/learn/python-for-applied-data-science-ai",
    color: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    dot: "bg-blue-400",
  },
];

export default function Certifications() {
  return (
    <SectionWrapper id="certifications" withGrid>
      <SectionHeading
        label="credentials"
        title="Certifications"
        subtitle="Verified credentials in AI, machine learning, and cloud infrastructure."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {certifications.map((cert) => (
          <a
            key={cert.title}
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col bg-bg-card rounded-xl p-5 border border-bg-border hover:border-accent-primary/30 transition-all duration-200"
          >
            {/* Icon + issuer badge */}
            <div className="flex items-start justify-between mb-4">
              <BadgeCheck size={20} className="text-accent-primary" />
              <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-medium border ${cert.color}`}>
                {cert.issuer.split("·")[0].trim()}
              </span>
            </div>

            {/* Title */}
            <p className="font-display font-bold text-sm text-text-primary leading-snug mb-2 group-hover:text-accent-secondary transition-colors flex-1">
              {cert.title}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-bg-border">
              <div className="flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${cert.dot}`} />
                <span className="font-mono text-[10px] text-text-muted">{cert.date}</span>
              </div>
              <ExternalLink size={11} className="text-text-muted group-hover:text-accent-primary transition-colors" />
            </div>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}
