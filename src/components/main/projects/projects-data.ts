import invoiceHubImage from "../../../../public/images/invoicehub.png";
import positivus from "../../../../public/images/positivus.png";
import travelguide from "../../../../public/images/travelguide.png";
import gtu from "../../../../public/images/gtu.png";
import hooks from "../../../../public/images/hooks.png";

export const projectsData = [
  {
    id: 1,
    title: "InvoiceHub",
    description: "invoicehub",
    tags: [
      "react",
      "typescript",
      "react router",
      "tailwindcss",
      "shadcn",
      "keycloak",
      "framermotion",
      "react-signature-canvas",
      "lucide-react",
      "recharts",
      "radix-ui",
      "react-pdf/renderer",
      "vercel",
    ],
    githubUrl: "https://invoicehub.space/",
    imageUrl: invoiceHubImage,
  },
  {
    id: 2,

    title: "Positivus",
    description: "positivus",
    tags: ["react", "tailwindcss", "react router", "figma"],
    githubUrl: "https://philipbaravi.github.io/Positivus/",
    imageUrl: positivus,
  },
  {
    id: 3,

    title: "React Hooks Explorer",
    description: "reacthooks",
    tags: [
      "react",
      "react-router",
      "monaco editor",
      "algorithms and data structures",
    ],
    githubUrl: "https://philipbaravi.github.io/react-hooks/",
    imageUrl: hooks,
  },
  {
    id: 4,

    title: "Georgian TravelGuide",
    description: "travelguide",
    tags: ["html", "css", "javascript", "jquery", "bootstrap"],
    githubUrl: "https://georgiantravelguide.com/en",
    imageUrl: travelguide,
  },
  {
    id: 5,

    title: "Georgian Technical University",
    description: "gtu",
    tags: ["bitrix", "forms", "markup", "javascript"],
    githubUrl: "https://old.gtu.ge/Eng/",
    imageUrl: gtu,
  },
];
