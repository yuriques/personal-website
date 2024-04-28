import { canva, quantium } from "../assets/images";
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
    git,
    github,
    githubactions,
    html,
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
    threads,
    typescript,
    vue
} from "../assets/icons";

export const skills = [
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
        imageUrl: bash,
        name: "Bash",
        type: "Scripting",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
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
        type: "Deployment Tools",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Deployment Tools",
    },
    {
        imageUrl: githubactions,
        name: "Github Actions",
        type: "Deployment Tools",
    },
    {
        imageUrl: azure,
        name: "Azure",
        type: "Cloud",
    }
];

export const experiences = [
    {
        title: "Software Engineer",
        company_name: "Quantium",
        icon: quantium,
        iconBg: "#f0f0f0",
        date: "Feb 2022 - Present",
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
            "Completed high-level solution design and architecture documents clearly explaining decisions made"
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/yuriques',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/elizabeth-zhong1',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Personal website',
        description: 'Developed a 3D personal portfolio to learn Three.js',
        link: 'https://github.com/yuriques/personal-website',
    },
];