// src/data/profile.ts

export type EducationItem = {
  degree: string;
  college: string;
  notes?: string;
};

export const education: EducationItem[] = [
  { degree: "M.Sc. Computer Science", college: "St. Joseph's, Bangalore", notes: "2024–2026" },
  { degree: "BCA", college: "St. Francis College, Koramangala", notes: "2021–2024" },
];

export const certificates: string[] = [
  "Cybersecurity & Ethical Hacking",
  "Artificial Intelligence Fundamentals",
];

export type ProjectItem = {
  title: string;
  tech: string[];
  desc: string;
  tags?: string[];
  links: {
    live?: string;
    github?: string;
  };
};

export const projects: ProjectItem[] = [
  {
    title: "Maze Runner Game",
    tech: ["Unreal Engine 5", "Mixamo"],
    desc: "3D maze exploration game where the player navigates multiple levels to find the exit.",
    tags: ["BCA Final Year Project"],
    links: { live: "#", github: "#" }
  },
  {
    title: "Burger Billing System",
    tech: ["Python", "Jupyter Notebook"],
    desc: "Billing and order management application for a burger shop with price calculation and receipt output.",
    tags: ["BCA Project"],
    links: { live: "#", github: "#" }
  },
  {
    title: "Smart Inventory & Sales Tracker",
    tech: ["React/Next.js", "Node.js", "MongoDB", "Chart.js"],
    desc: "CRUD-enabled dashboard for inventory tracking and sales analytics with visual chart insights.",
    tags: ["MSc Mini Project"],
    links: { live: "#", github: "#" }
  }
];
