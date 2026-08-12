import { createContext, useContext } from "react";
import {
  SiReact,
  SiDjango,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import CsssTemplate from "../assets/templates/csss.png";
import BlogNetTemplate from "../assets/templates/blognet.png";
import ITClubPortal from "../assets/templates/it-club-portal.png";

const ProjectsContext = createContext([]);

export const ProjectsProvider = ({ children }) => {
  const projects = [
    {
      id: 1,
      title: "BlogNet",
      description:
        "A full-stack blogging platform built with Django backend and React frontend, featuring user authentication and CRUD operations.",
      image: BlogNetTemplate,
      techStack: [
        { icon: <SiReact />, iconLabel: "React", link: "https://react.dev" },
        {
          icon: <SiDjango />,
          iconLabel: "Django",
          link: "https://www.djangoproject.com",
        },
        {
          icon: <SiJavascript />,
          iconLabel: "JavaScript",
          link: "https://developer.mozilla.org",
        },
      ],
      liveLink: "https://blognet.up.railway.app",
    },
    {
      id: 2,
      title: "Comboni Fullstack Website",
      description:
        "A school project website built with full-stack architecture using Django and React for a smooth UI/UX experience.",
      image: CsssTemplate,
      techStack: [
        {
          icon: <SiDjango />,
          iconLabel: "Django",
          link: "https://www.djangoproject.com",
        },
        {
          icon: <SiCss3 />,
          iconLabel: "CSS3",
          link: "https://developer.mozilla.org",
        },
      ],
      gitLink: "https://github.com/Amare-Misgana/BlogNet-Django-React",
    },
    {
      id: 3,
      title: "CSSS IT Club Portal",
      description:
        "A portal made for CSSS IT Club member to enhance learning experiance with Learning Tasks and Community feedback system.",
      image: ITClubPortal,
      techStack: [
        { icon: <SiReact />, iconLabel: "React", link: "https://react.dev" },
        {
          icon: <SiDjango />,
          iconLabel: "Django",
          link: "https://www.djangoproject.com",
        },
        {
          icon: <SiCss3 />,
          iconLabel: "CSS3",
          link: "https://developer.mozilla.org",
        },
      ],
      gitLink: "https://github.com/Code-Amare/IT-Club",
    },
  ];

  return (
    <ProjectsContext.Provider value={projects}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectsContext);
