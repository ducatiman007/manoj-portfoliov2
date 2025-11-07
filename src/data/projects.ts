// src/data/projects.ts
export type Project = {
  title: string;
  summary: string;
  tags: string[];
  live?: string;   // optional live URL
  repo?: string;   // optional GitHub URL
  image?: string;  // optional /public image path
  highlight?: boolean;
};

export const projects: Project[] = [
  {
    title: "Luxury Portfolio (This Site)",
    summary: "Next.js + Tailwind v4 + premium black/white/gold UI with glass, gradient borders, and subtle motion.",
    tags: ["Next.js", "Tailwind v4", "UI/UX"],
    repo: "https://github.com/ducatiman007/manoj-portfolio",
    highlight: true,
  },
  {
    title: "Fitness Progress Tracker (Coming Soon)",
    summary: "Full-stack app with login, progress logs, and photo uploads. We’ll build this next with Firebase & MongoDB.",
    tags: ["Next.js", "Firebase", "MongoDB"],
    highlight: true,
  },
  {
    title: "Admin Dashboard (Coming Soon)",
    summary: "CRUD tables, filters, analytics. Tech stack planned: Next.js API routes + MongoDB.",
    tags: ["Next.js", "MongoDB", "Dashboard"],
  },
];
