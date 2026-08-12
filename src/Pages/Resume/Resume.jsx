import styles from "./Resume.module.css";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import {
  SiReact,
  SiDjango,
  SiPython,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGithub,
} from "react-icons/si";
import { useContext } from "react";
import { DeveloperContext } from "../../Context/DeveloperContext";

export default function Resume() {
  const skills = [
    { icon: <SiReact />, iconLabel: "React", link: "https://react.dev" },
    {
      icon: <SiDjango />,
      iconLabel: "Django",
      link: "https://www.djangoproject.com",
    },
    { icon: <SiPython />, iconLabel: "Python", link: "https://www.python.org" },
    {
      icon: <SiJavascript />,
      iconLabel: "JavaScript",
      link: "https://developer.mozilla.org",
    },
    {
      icon: <SiHtml5 />,
      iconLabel: "HTML5",
      link: "https://developer.mozilla.org",
    },
    {
      icon: <SiCss3 />,
      iconLabel: "CSS3",
      link: "https://developer.mozilla.org",
    },
    {
      icon: <SiGithub />,
      iconLabel: "GitHub",
      link: "https://github.com/Amare-Misgana",
    },
  ];

  const projects = [
    {
      name: "BlogNet",
      description: "Full-stack blog (Django + React).",
      link: "https://github.com/Amare-Misgana/BlogNet-Django-React",
    },
    {
      name: "Comboni Fullstack Website",
      description:
        "School management system with multi-role dashboards and real-time features.",
      link: "https://github.com/Amare-Misgana/comboni_fullstack_webiste",
    },
  ];

  const education = ["Graduated (degree)", "Attended INSA Summer Camp Program"];
  const developer = useContext(DeveloperContext);
  const email = developer.email;

  return (
    <div className={styles.container}>
      <Nav currentPage="resume" />

      <header className={styles.header}>
        <div className={styles.terminalBar}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.terminalPath}>amare@portfolio:~/resume</span>
        </div>
        <p className={styles.prompt}>$ cat resume.yaml</p>
        <h1 className={styles.title}>Amare Misgana</h1>
        <p className={styles.subtitle}>
          Full-Stack Developer — Django &amp; React
        </p>
        <a
          href="https://www.fiverr.com/amare_dev/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.hireMe}
        >
          <span className={styles.ctaPrompt}>&gt;</span> Hire me - On Fiverr
        </a>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.resumeFile}>
          <div className={styles.fileTab}>
            <span className={styles.fileDot} />
            resume.yaml
          </div>

          <div className={styles.fileBody}>
            {/* contact */}
            <div className={`${styles.fileLine} ${styles.keyLine}`}>
              <span className={styles.yamlKey}>contact:</span>
            </div>
            <div className={`${styles.fileLine} ${styles.itemLine}`}>
              <span className={styles.yamlDash}>-</span>
              <span className={styles.fieldLabel}>location:</span>
              <span className={styles.fieldValue}>Ethiopia / Oromia</span>
            </div>
            <div className={`${styles.fileLine} ${styles.itemLine}`}>
              <span className={styles.yamlDash}>-</span>
              <span className={styles.fieldLabel}>email:</span>
              <a href={`mailto:${email}`} className={styles.fieldLink}>
                {email}
              </a>
            </div>

            {/* skills */}
            <div className={`${styles.fileLine} ${styles.keyLine}`}>
              <span className={styles.yamlKey}>skills:</span>
            </div>
            <div
              className={`${styles.fileLine} ${styles.itemLine} ${styles.skillsLine}`}
            >
              <span className={styles.yamlDash}>-</span>
              <div className={styles.skillTags}>
                {skills.map((s) => (
                  <a
                    key={s.iconLabel}
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.tag}
                  >
                    {s.icon}
                    <span>{s.iconLabel}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* projects */}
            <div className={`${styles.fileLine} ${styles.keyLine}`}>
              <span className={styles.yamlKey}>projects:</span>
            </div>
            {projects.map((p) => (
              <div
                key={p.name}
                className={`${styles.fileLine} ${styles.itemLine} ${styles.projectLine}`}
              >
                <span className={styles.yamlDash}>-</span>
                <div className={styles.projectDetail}>
                  <span className={styles.fieldValue}>
                    <strong>{p.name}</strong> — {p.description}
                  </span>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cloneLine}
                  >
                    <span className={styles.promptChar}>$</span> git clone{" "}
                    {p.link.replace("https://", "")}
                  </a>
                </div>
              </div>
            ))}

            {/* education */}
            <div className={`${styles.fileLine} ${styles.keyLine}`}>
              <span className={styles.yamlKey}>education:</span>
            </div>
            {education.map((e) => (
              <div key={e} className={`${styles.fileLine} ${styles.itemLine}`}>
                <span className={styles.yamlDash}>-</span>
                <span className={styles.fieldValue}>{e}</span>
              </div>
            ))}

            <span className={styles.cursorBlink}>▍</span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
