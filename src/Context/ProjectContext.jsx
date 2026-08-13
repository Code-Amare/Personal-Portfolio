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
import ITClubPortalTemplate from "../assets/templates/it-club-portal.png";
import CityShopDashboard from "../assets/templates/cityshop/dashboard.png";

import BlognetHomeGreen from "../assets/templates/blognet/home-green.png";
import BlognetHomeRed from "../assets/templates/blognet/home-red.png";
import BlognetLoginRed from "../assets/templates/blognet/login-red.png";

import ITClubAdminDashboard from "../assets/templates/it-club-portal/admin-dashboard.png";
import ITClubAdminFullDashboard from "../assets/templates/it-club-portal/admin-full-dashboard.png";
import ITClubHome from "../assets/templates/it-club-portal/home.png";
import ITClubLogin from "../assets/templates/it-club-portal/home.png";

import CityShopHome from "../assets/templates/cityshop/home.png";
import CityShopFeatures from "../assets/templates/cityshop/features.png";
import CityShopLogin from "../assets/templates/cityshop/login.png";

import CSSSFeatures from "../assets/templates/csss/features.png";

const ProjectsContext = createContext([]);

export const ProjectsProvider = ({ children }) => {
  const projects = [
    {
      id: 1,
      title: "BlogNet",
      description:
        "A full-stack blogging platform built with Django backend and React frontend, featuring user authentication and CRUD operations.",
      image: BlogNetTemplate,
      images: [
        BlogNetTemplate,
        BlognetHomeGreen,
        BlognetHomeRed,
        BlognetLoginRed,
      ],
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
      images: [CsssTemplate, CSSSFeatures],
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
      image: ITClubPortalTemplate,
      images: [
        ITClubPortalTemplate,
        ITClubAdminDashboard,
        ITClubAdminFullDashboard,
        ITClubHome,
        ITClubLogin,
      ],
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
    {
      id: 4,
      title: "City Shop",
      description:
        "A portal made for CSSS IT Club member to enhance learning experiance with Learning Tasks and Community feedback system.",
      image: CityShopHome,
      images: [
        CityShopHome,
        CityShopDashboard,
        CityShopFeatures,
        CityShopLogin,
      ],
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
      gitLink: "https://github.com/Code-Amare/IT-Club.git",
    },
  ];

  return (
    <ProjectsContext.Provider value={projects}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectsContext);
