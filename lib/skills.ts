export interface SkillCategory {
  label: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level?: "expert" | "proficient" | "familiar";
}

export const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    skills: [
      { name: "Java", level: "expert" },
      { name: "Python", level: "expert" },
      { name: "C++", level: "proficient" },
      { name: "JavaScript", level: "proficient" },
      { name: "TypeScript", level: "proficient" },
      { name: "SQL", level: "expert" },
      { name: "Shell / Bash", level: "proficient" },
    ],
  },
  {
    label: "Frameworks & Tools",
    skills: [
      { name: "Cypress", level: "expert" },
      { name: "Oracle JET (OJET)", level: "expert" },
      { name: "Flutter", level: "proficient" },
      { name: "TensorFlow", level: "proficient" },
      { name: "Keras", level: "proficient" },
      { name: "HELIDON", level: "familiar" },
      { name: "Firebase", level: "proficient" },
    ],
  },
  {
    label: "Backend & Architecture",
    skills: [
      { name: "Microservices", level: "expert" },
      { name: "REST APIs", level: "expert" },
      { name: "API Testing", level: "expert" },
      { name: "Distributed Systems", level: "proficient" },
      { name: "SOA", level: "proficient" },
      { name: "Auth & Authorization", level: "proficient" },
      { name: "System Design", level: "proficient" },
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      { name: "Oracle Cloud (OCI)", level: "expert" },
      { name: "Git / GitHub", level: "expert" },
      { name: "CI/CD", level: "proficient" },
      { name: "Docker", level: "familiar" },
      { name: "Agile / Scrum", level: "expert" },
      { name: "Monitoring & Logging", level: "proficient" },
    ],
  },
];
