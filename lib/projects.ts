export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  showGithub?: boolean;
  liveUrl?: string;
  publicationUrl?: string;
  featured: boolean;
  category: "AI" | "Backend" | "Fullstack" | "ML";
}

export const projects: Project[] = [
  {
    id: "bus-charging-scheduler",
    title: "Bus Charging Scheduler",
    description:
      "Scheduling system for 20 electric buses on the Bengaluru–Kochi corridor across 4 charging stations. Event-driven greedy engine with a pluggable cost function, three tunable optimization weights (individual fairness, operator fairness, network efficiency), and an extensible rule registry — adding a new rule is one file and one line.",
    techStack: ["Python", "Streamlit", "Greedy Algorithms", "Event-Driven", "JSON"],
    githubUrl: "https://github.com/KRISHNENDU-S/bus-charging-scheduler",
    showGithub: true,
    liveUrl: "https://bus-charging-scheduler-aytsjp67mn6gpupbin6wmx.streamlit.app",
    featured: true,
    category: "Backend",
  },
  {
    id: "leafmark",
    title: "LeafMark",
    description:
"Private reading log built without a social layer — designed for focus, not engagement. Implements secure JWT auth with Argon2id hashing and httpOnly cookies, normalized genre relationships via a join table, and full CRUD with search and filter across a PostgreSQL backend. Backed by 16 Cypress E2E scenarios in Gherkin BDD gating every push to master via GitHub Actions, and an LLM-powered recommendation engine that calls Gemini server-side and returns structured JSON — API key never touches the frontend.",
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "Argon2", "Cypress", "GitHub Actions", "Tailwind CSS", "Vite","Gemini API", "react-markdown"],
    githubUrl: "https://github.com/KRISHNENDU-S/LeafMark",
    showGithub: true,
    liveUrl: "https://leaf-mark.vercel.app",
    featured: true,
    category: "Fullstack",
  },
  {
    id: "brahmo-governance",
    title: "BRAHMO Governance Engine",
    description:
      "Governance system for hospital AI knowledge infrastructure — built as part of a backend developer assessment. When a base clinical protocol changes, the cascade invalidation engine walks the knowledge graph (BFS) and flags every derived rule for human review. Includes a live 4-dimension health score (Coverage, Freshness, Balance, Consistency), a department-aware notification router, and a state-machine-validated review loop. Fully deterministic — zero LLM.",
    techStack: ["Python", "FastAPI", "PostgreSQL", "Supabase", "React", "Tailwind CSS", "psycopg"],
    githubUrl: "https://github.com/KRISHNENDU-S/brahmo-governance",
    showGithub: true,
    featured: true,
    category: "Backend",
  },
  {
    id: "emergify",
    title: "EMERGIFY",
    description:
      "Real-time emergency reporting mobile app with instant alerts and communication. Enhanced emergency response efficiency by ~40% through scalable real-time data handling and notification systems.",
    techStack: ["Flutter", "Firebase", "Real-time DB", "Push Notifications"],
    githubUrl: "https://github.com/KRISHNENDU-S",
    publicationUrl: "https://ieeexplore.ieee.org/abstract/document/11005046",
    featured: true,
    category: "Fullstack",
  },
  {
    id: "oracle-chatbot",
    title: "Oracle AI Chatbot",
    description:
      "AI chatbot using Oracle Digital Assistant achieving ~99% accuracy via vectorized PDF training and query optimization. Reduced manual support dependency by 40% through automated query resolution.",
    techStack: ["Oracle Digital Assistant", "OJET", "Python", "Vector Search", "Oracle Cloud"],
    githubUrl: "https://github.com/KRISHNENDU-S",
    featured: true,
    category: "AI",
  },
  {
    id: "bci-hand-movement",
    title: "Brain-Computer Interface",
    description:
      "Interpretable ML solution using Python MNE to analyze EEG signals for accurate hand-grasp movement detection. Contributed ~70% to model development and ~90% to analysis.",
    techStack: ["Python", "MNE", "EEG Signal Processing", "Machine Learning", "Explainability"],
    githubUrl: "https://github.com/KRISHNENDU-S",
    featured: false,
    category: "ML",
  },
  {
    id: "age-gender-prediction",
    title: "Age & Gender Prediction",
    description:
      "Deep learning models with TensorFlow reducing computational cost by 25% while maintaining ~85% accuracy. Published in IEEE.",
    techStack: ["Python", "TensorFlow", "Deep Learning", "CNNs"],
    githubUrl: "https://github.com/KRISHNENDU-S",
    publicationUrl: "https://ieeexplore.ieee.org/abstract/document/10724502",
    featured: false,
    category: "ML",
  },
  {
    id: "heart-failure-prediction",
    title: "Heart Failure Prediction",
    description:
      "ML models using Python and Keras on healthcare datasets. Improved predictive performance and decision-making efficiency by ~50% through enhanced model selection. Published in IEEE.",
    techStack: ["Python", "Keras", "ML", "Feature Engineering", "Healthcare Data"],
    githubUrl: "https://github.com/KRISHNENDU-S",
    publicationUrl: "https://ieeexplore.ieee.org/abstract/document/10724418",
    featured: false,
    category: "ML",
  },
];