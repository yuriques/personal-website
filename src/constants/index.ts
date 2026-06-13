export interface Skill {
  imageUrl: string;
  name: string;
  type: string;
}

export interface Experience {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

export interface SocialLink {
  name: string;
  iconUrl: string;
  link: string;
}

export interface Project {
  iconUrl: string;
  theme: string;
  name: string;
  description: string;
  link: string;
}

import { canva, quantium, microsoft } from "../assets/images";
import {
  azure,
  bash,
  c,
  car,
  contact,
  csharp,
  css,
  docker,
  dotnet,
  estate,
  golang,
  github,
  githubactions,
  html,
  publicholidays,
  java,
  javascript,
  kubernetes,
  linkedin,
  mongodb,
  nextjs,
  nodejs,
  pricewise,
  python,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  terraform,
  typescript,
  vue,
} from "../assets/icons";

export const skills: Skill[] = [
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Backend",
  },
  {
    imageUrl: csharp,
    name: "C #",
    type: "Backend",
  },
  {
    imageUrl: dotnet,
    name: ".Net",
    type: "Backend",
  },
  {
    imageUrl: java,
    name: "Java",
    type: "Backend",
  },
  {
    imageUrl: c,
    name: "C",
    type: "Backend",
  },
  {
    imageUrl: golang,
    name: "Go",
    type: "Backend",
  },
  {
    imageUrl: bash,
    name: "Bash",
    type: "DevOps",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: vue,
    name: "Vue",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: kubernetes,
    name: "Kubernetes",
    type: "DevOps",
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "DevOps",
  },
  {
    imageUrl: githubactions,
    name: "Github Actions",
    type: "DevOps",
  },
  {
    imageUrl: azure,
    name: "Azure",
    type: "DevOps",
  },
  {
    imageUrl: terraform,
    name: "Terraform",
    type: "DevOps",
  },
];

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company_name: "Microsoft",
    icon: microsoft,
    iconBg: "#ffffff",
    date: "Jan 2025 - Present",
    points: [
      "Resolved service team requests and GitHub issues for the Azure Terraform Provider (Golang), improving provider reliability, performance, and alignment with evolving Azure APIs.",
      "Engineered core React/TypeScript components and framework patterns for the Azure Portal UI Framework, enabling consistent, accessible, and performant experiences across dozens of Azure product teams.",
      "Delivered end‑to‑end Azure Storage (File Share, Disks, Storage Discovery) and Arc UI experiences using React, TypeScript, and Fluent UI, improving customer workflows through optimized API integrations, scalable UI patterns, and telemetry driven iteration.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Quantium",
    icon: quantium,
    iconBg: "#f0f0f0",
    date: "Feb 2022 - Dec 2024",
    points: [
      "Performed full stack application development on the replatforming of Quantium's flagship product Q.Checkout, utilising React/Typescript for the frontend and C#/.NET for the backend.",
      "Led the conception and execution of multiple features, proactively organizing tickets, providing seamless support for inquiries, and actively contributing to the development process",
      "Designed and implemented performant APIs endpoints within several microservices as well as developed reusable UI components, layouts and visuals abiding to UX standards",
      "Collaborated closely with cross-functional teams, including product managers, business analysts, UX designers and fellow engineers to conceptialise and develop product ",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Canva",
    icon: canva,
    iconBg: "#e3fffc",
    date: "Dec 2020 - Feb 2021",
    points: [
      "Developed and deployed an internal tool automating notifications received by over 1400 internal employees using Python",
      "Drove the requirements gathering process, orchestrating stakeholder meetings, and conducting extensive research to lay the foundation for an internal notification system",
      "Maintained a high standard of code quality, aligning to team standards.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Quantium",
    icon: quantium,
    iconBg: "#f0f0f0",
    date: "Dec 2019 - Sep 2020",
    points: [
      "Pioneered the design and implementation of a React web app integration into Microsoft Excel deployed to external clients, improving their usability and ease of access to current Quantium products",
      "Completed high-level solution design and architecture documents clearly explaining decisions made",
    ],
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/yuriques",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/elizabeth-zhong1",
  },
];

export const projects: Project[] = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Personal website",
    description:
      "A portfolio which serves as a playground for learning and experimenting with new web technologies",
    link: "https://github.com/yuriques/personal-website",
  },
  {
    iconUrl: publicholidays,
    theme: "btn-back-blue",
    name: "Public Holidays MCP server",
    description: "Developed a MCP server and client to display public holidays",
    link: "https://github.com/yuriques/public-holiday-mcp/tree/master",
  },
];
