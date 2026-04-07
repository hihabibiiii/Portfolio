import { BrainCircuit, Code2, Database, GitBranch, Laptop } from "lucide-react";

export const skillGroups = [
  { title: "Languages", items: "Python, C++, C", icon: Code2, level: 88 },
  {
    title: "Data Science",
    items: "NumPy, Pandas, Matplotlib, Scikit-Learn, ML workflows",
    icon: BrainCircuit,
    level: 92,
  },
  {
    title: "Web / Full Stack",
    items: "HTML, CSS, JavaScript (basics), APIs, basic deployment",
    icon: Laptop,
    level: 82,
  },
  {
    title: "Tools & Practices",
    items: "Git & GitHub, VS Code, Problem Solving, Clean Code",
    icon: GitBranch,
    level: 84,
  },
  {
    title: "Areas of Interest",
    items: "Machine Learning, Recommendation Systems, Web Apps, Automation",
    icon: Database,
    level: 90,
  },
];

export const featuredSkills = [
  "Python",
  "Scikit-Learn",
  "Pandas",
  "NumPy",
  "HTML",
  "CSS",
  "JavaScript",
  "Git & GitHub",
];
