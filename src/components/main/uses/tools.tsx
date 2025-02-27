"use client";

import V0Icon from "./v0icon";
import { VscVscode } from "react-icons/vsc";
import {
  FaReact,
  FaGithub,
  FaCss3Alt,
  FaCubes,
  FaNetworkWired,
  FaBootstrap,
  FaElementor,
  FaNodeJs,
} from "react-icons/fa";
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
  SiFramer,
  SiNpm,
  SiOpenai,
  SiWordpress,
  SiVercel,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import { CiGlobe } from "react-icons/ci";
import { VscExtensions } from "react-icons/vsc"; // Icon for extensions category

export const tools = {
  Languages: [
    {
      name: "TypeScript",
      description: "TypeScript.description",
      icon: <SiTypescript className="w-full h-full" />,
      href: "https://www.typescriptlang.org/",
    },
    {
      name: "JavaScript",
      description: "JavaScript.description",
      icon: <SiJavascript className="w-full h-full" />,
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "HTML5",
      description: "HTML5.description",
      icon: <SiHtml5 className="w-full h-full" />,
      href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "CSS3",
      description: "CSS3.description",
      icon: <FaCss3Alt className="w-full h-full" />,
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
  ],
  "Frameworks And Libraries": [
    {
      name: "React",
      description: "React.description",
      icon: <FaReact className="w-full h-full" />,
      href: "https://reactjs.org/",
    },
    {
      name: "Next.js",
      description: "NextJS.description",
      icon: <SiNextdotjs className="w-full h-full" />,
      href: "https://nextjs.org/",
    },
    {
      name: "Tailwind CSS",
      description: "TailwindCSS.description",
      icon: <SiTailwindcss className="w-full h-full" />,
      href: "https://tailwindcss.com/",
    },
    {
      name: "Axios",
      description: "Axios.description",
      icon: <SiAxios className="w-full h-full" />,
      href: "https://axios-http.com/",
    },
    {
      name: "Framer Motion",
      description: "FramerMotion.description",
      icon: <SiFramer className="w-full h-full" />,
      href: "https://www.framer.com/motion/",
    },
  ],
  "State Management": [
    {
      name: "Zustand",
      description: "Zustand.description",
      icon: <FaCubes className="w-full h-full" />,
      href: "https://zustand-demo.pmnd.rs/",
    },
    {
      name: "Context API",
      description: "ContextAPI.description",
      icon: <FaNetworkWired className="w-full h-full" />,
      href: "https://react.dev/reference/react/useContext",
    },
  ],
  Internationalization: [
    {
      name: "i18next",
      description: "i18next.description",
      icon: <SiI18Next className="w-full h-full" />,
      href: "https://www.i18next.com/",
    },
    {
      name: "next-intl",
      description: "nextIntl.description",
      icon: <CiGlobe className="w-full h-full" />,
      href: "https://next-intl.dev/",
    },
  ],
  "UI/UX": [
    {
      name: "Shadcn UI",
      description: "ShadcnUI.description",
      icon: <SiShadcnui className="w-full h-full" />,
      href: "https://ui.shadcn.com/",
    },
    {
      name: "Figma",
      description: "Figma.description",
      icon: <SiFigma className="w-full h-full" />,
      href: "https://www.figma.com/",
    },
    {
      name: "Bootstrap",
      description: "Bootstrap.description",
      icon: <FaBootstrap className="w-full h-full" />,
      href: "https://getbootstrap.com/",
    },
  ],
  BackEnd: [
    {
      name: "NodeJS",
      description: "NodeJs.description",
      icon: <FaNodeJs className="w-full h-full" />,
      href: "https://nodejs.org/en",
    },
    {
      name: "MongoDB",
      description: "MongoDB.description",
      icon: <SiMongodb className="w-full h-full" />,
      href: "https://www.mongodb.com/",
    },
    {
      name: "PostgreSQL",
      description: "Postgres.description",
      icon: <SiPostgresql className="w-full h-full" />,
      href: "https://www.postgresql.org/",
    },
  ],
  "Build Tools": [
    {
      name: "Vite",
      description: "Vite.description",
      icon: <SiVite className="w-full h-full" />,
      href: "https://vitejs.dev/",
    },
    {
      name: "Webpack",
      description: "Webpack.description",
      icon: <SiWebpack className="w-full h-full" />,
      href: "https://webpack.js.org/",
    },
    {
      name: "Babel",
      description: "Babel.description",
      icon: <SiBabel className="w-full h-full" />,
      href: "https://babeljs.io/",
    },
    {
      name: "ESLint",
      description: "ESLint.description",
      icon: <SiEslint className="w-full h-full" />,
      href: "https://eslint.org/",
    },
    {
      name: "Prettier",
      description: "Prettier.description",
      icon: <SiPrettier className="w-full h-full" />,
      href: "https://prettier.io/",
    },
  ],
  "Version Control": [
    {
      name: "Git",
      description: "Git.description",
      icon: <SiGit className="w-full h-full" />,
      href: "https://git-scm.com/",
    },
    {
      name: "GitHub",
      description: "GitHub.description",
      icon: <FaGithub className="w-full h-full" />,
      href: "https://github.com/",
    },
  ],
  Authentication: [
    {
      name: "Keycloak",
      description: "Keycloak.description",
      icon: <SiKeycloak className="w-full h-full" />,
      href: "https://www.keycloak.org/",
    },
  ],
  Deployment: [
    {
      name: "Vercel",
      description: "Vercel.description",
      icon: <SiVercel className="w-full h-full" />,
      href: "https://vercel.com/",
    },
    {
      name: "GithubPages",
      description: "GithubPages.description",
      icon: <FaGithub className="w-full h-full" />,
      href: "https://pages.github.com/",
    },
  ],
  "AI Tools": [
    {
      name: "ChatGPT",
      description: "ChatGPT.description",
      icon: <SiOpenai className="w-full h-full" />,
      href: "https://chat.openai.com/",
    },
    {
      name: "v0",
      description: "v0.description",
      icon: <V0Icon />,
      href: "https://v0.dev/",
    },
  ],
  "IDEs & Extensions": [
    {
      name: "VSCode",
      description: "VSCode.description",
      icon: <VscVscode className="w-full h-full" />,
      href: "https://code.visualstudio.com/",
    },
    {
      name: "ESLint Extension",
      description: "ESLintExtension.description",
      icon: <VscExtensions className="w-full h-full" />,
      href: "https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",
    },
    {
      name: "Prettier Extension",
      description: "PrettierExtension.description",
      icon: <VscExtensions className="w-full h-full" />,
      href: "https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",
    },
    {
      name: "Tailwind CSS IntelliSense",
      description: "TailwindCSSIntelliSense.description",
      icon: <VscExtensions className="w-full h-full" />,
      href: "https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss",
    },
    {
      name: "GitLens",
      description: "GitLens.description",
      icon: <VscExtensions className="w-full h-full" />,
      href: "https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens",
    },
    {
      name: "React PropTypes IntelliSense",
      description: "ReactPropTypesIntelliSense.description",
      icon: <VscExtensions className="w-full h-full" />,
      href: "https://marketplace.visualstudio.com/items?itemName=OfHumanBondage.react-proptypes-intellisense",
    },
  ],
  "Other Tools": [
    {
      name: "npm",
      description: "npm.description",
      icon: <SiNpm className="w-full h-full" />,
      href: "https://www.npmjs.com/",
    },
    {
      name: "Wordpress",
      description: "Wordpress.description",
      icon: <SiWordpress className="w-full h-full" />,
      href: "https://wordpress.com/",
    },
    {
      name: "Elementor",
      description: "Elementor.description",
      icon: <FaElementor className="w-full h-full" />,
      href: "https://elementor.com/",
    },
  ],
};
