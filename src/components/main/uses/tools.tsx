"use client";

import { FaReact, FaGithub, FaCss3Alt } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiWebpack,
  SiBabel,
  SiEslint,
  SiPrettier,
  SiGit,
  SiAxios,
  SiKeycloak,
  SiI18Next,
  SiShadcnui,
  SiFigma,
  SiBootstrap,
  SiFramer,
  SiNpm,
  SiOpenai,
  SiWordpress,
} from "react-icons/si";

export const tools = {
  Languages: [
    {
      name: "TypeScript",
      description: "Typed superset of JavaScript",
      icon: <SiTypescript className="w-full h-full" />,
      href: "https://www.typescriptlang.org/",
    },
    {
      name: "JavaScript",
      description: "Core language for web development",
      icon: <SiJavascript className="w-full h-full" />,
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "HTML5",
      description: "Markup language for structuring web content",
      icon: <SiHtml5 className="w-full h-full" />,
      href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "CSS3",
      description: "Styling language for web design",
      icon: <FaCss3Alt className="w-full h-full" />,
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
  ],
  "Frameworks And Libraries": [
    {
      name: "React",
      description: "JavaScript library for building user interfaces",
      icon: <FaReact className="w-full h-full" />,
      href: "https://reactjs.org/",
    },
    {
      name: "Next.js",
      description: "React framework for SSR and SSG",
      icon: <SiNextdotjs className="w-full h-full" />,
      href: "https://nextjs.org/",
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first CSS framework",
      icon: <SiTailwindcss className="w-full h-full" />,
      href: "https://tailwindcss.com/",
    },
    {
      name: "Axios",
      description: "Promise-based HTTP client",
      icon: <SiAxios className="w-full h-full" />,
      href: "https://axios-http.com/",
    },
    {
      name: "i18next",
      description: "Internationalization framework",
      icon: <SiI18Next className="w-full h-full" />,
      href: "https://www.i18next.com/",
    },
    {
      name: "Framer Motion",
      description: " For animations and transitions.",
      icon: <SiFramer className="w-full h-full" />,
      href: "https://motion.dev/",
    },
  ],
  "UI/UX": [
    {
      name: "Shadcn UI",
      description: "For integrating pre-styled components with Tailwind CSS.",
      icon: <SiShadcnui className="w-full h-full" />,
      href: "https://ui.shadcn.com/",
    },
    {
      name: "Figma",
      description:
        "Figma helps design and development teams build great products, together.",
      icon: <SiFigma className="w-full h-full" />,
      href: "https://www.figma.com/",
    },
    {
      name: "Bootstrap",
      description: "Powerful, extensible, and feature-packed frontend toolkit.",
      icon: <SiBootstrap className="w-full h-full" />,
      href: "https://getbootstrap.com/",
    },
  ],
  "Build Tools": [
    {
      name: "Vite",
      description: "Frontend build tool for modern web projects",
      icon: <SiVite className="w-full h-full" />,
      href: "https://vitejs.dev/",
    },
    {
      name: "Webpack",
      description: "Module bundler for JavaScript applications",
      icon: <SiWebpack className="w-full h-full" />,
      href: "https://webpack.js.org/",
    },
    {
      name: "Babel",
      description: "JavaScript compiler",
      icon: <SiBabel className="w-full h-full" />,
      href: "https://babeljs.io/",
    },
    {
      name: "ESLint",
      description: "Linting tool for identifying and fixing code issues",
      icon: <SiEslint className="w-full h-full" />,
      href: "https://eslint.org/",
    },
    {
      name: "Prettier",
      description: "Code formatter",
      icon: <SiPrettier className="w-full h-full" />,
      href: "https://prettier.io/",
    },
  ],
  "Version Control": [
    {
      name: "Git",
      description: "Version control system",
      icon: <SiGit className="w-full h-full" />,
      href: "https://git-scm.com/",
    },
    {
      name: "GitHub",
      description: "Code hosting platform for version control",
      icon: <FaGithub className="w-full h-full" />,
      href: "https://github.com/PhilipBaravi",
    },
  ],
  Authentication: [
    {
      name: "Keycloak",
      description: "Open-source identity and access management",
      icon: <SiKeycloak className="w-full h-full" />,
      href: "https://www.keycloak.org/",
    },
  ],
  "Other Tools": [
    {
      name: "npm",
      description: "Node package manager.",
      icon: <SiNpm className="w-full h-full" />,
      href: "https://www.npmjs.com/",
    },
    {
      name: "ChatGPT",
      description: "AI Tool",
      icon: <SiOpenai className="w-full h-full" />,
      href: "https://openai.com/",
    },
    {
      name: "Wordpress",
      description: "Website building platform",
      icon: <SiWordpress className="w-full h-full" />,
      href: "https://wordpress.com/",
    },
  ],
};
