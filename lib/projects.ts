export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  publicationUrl?: string;
  featured: boolean;
  category: "AI" | "Backend" | "Fullstack" | "ML";
}

export const projects: Project[] = [
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
