import { createContext } from "react";
import {
  SiJavascript,
  SiCplusplus,
  SiPython,
  SiReact,
  SiDjango,
  SiGit,
  SiPostman,
  SiVite,
  SiTailwindcss,
  SiFigma,
  SiPostgresql,
  SiRedis,
} from "react-icons/si";
import { TbPlugConnected } from "react-icons/tb";

export const developerData = {
  name: "Amare Misgana",
  age: 18,
  email: "amaremisganacode@gmail.com",
  educationLevel: "High School Graduate",
  city: "Shashemene",
  country: "Ethiopia",
  school: "Comboni Senior Secondary School",
  fiverr_link: "https://www.fiverr.com/amare_dev/",
  upwork_link: "https://www.upwork.com/freelancers/~01f0d60e26e31a295e/",
  github_link: "https://github.com/Code-Amare",

  languages: [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Python", icon: <SiPython /> },
    { name: "C++ (For Fun)", icon: <SiCplusplus /> },
  ],

  frameworks: [
    { name: "React", icon: <SiReact /> },
    { name: "Django", icon: <SiDjango /> },
  ],

  frontend_framework: <SiReact className="react" />,
  backend_framework: <SiDjango className="django" />,

  frontend_icons: [
    <SiJavascript key="javascript" />,
    <SiTailwindcss key="tailwind" />,
    <SiVite key="vite" />,
    <SiFigma key="figma" />,
  ],

  backend_icons: [
    <SiPython key="python" />,
    <SiPostgresql key="postgresql" />,
    <SiRedis key="redis" />,
    <TbPlugConnected key="websocket" />,
  ],

  tools: [
    { name: "Git", icon: <SiGit /> },
    { name: "Postman", icon: <SiPostman /> },
  ],

  educationList: [
    "Comboni Senior Secondary School – Hawassa, Ethiopia",
    "Graduated in 2026",
    "Strong background in Physics and Mathematics with a passion for backend development and problem-solving.",
  ],

  resumeSummary:
    "Full-stack developer focused on building modern, scalable web applications using Django and React.",
};

export const DeveloperContext = createContext(developerData);
