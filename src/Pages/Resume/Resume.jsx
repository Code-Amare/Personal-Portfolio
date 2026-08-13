import styles from "./Resume.module.css";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import { useContext } from "react";
import { DeveloperContext } from "../../Context/DeveloperContext";
import { useProjects } from "../../Context/ProjectContext";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function Resume() {
  const developer = useContext(DeveloperContext);
  const projects = useProjects();

  const skills = [
    ...developer.languages,
    ...developer.frameworks,
    ...developer.tools,
  ];

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
        <h1 className={styles.title}>{developer.name}</h1>
        <p className={styles.subtitle}>
          Full-Stack Developer — Django &amp; React
        </p>
        <a
          href={developer.fiverr_link}
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
            {/* summary */}
            <div className={`${styles.fileLine} ${styles.keyLine}`}>
              <span className={styles.yamlKey}>summary:</span>
            </div>
            <div className={`${styles.fileLine} ${styles.itemLine}`}>
              <span className={styles.fieldValue}>
                {developer.resumeSummary}
              </span>
            </div>

            {/* contact */}
            <div className={`${styles.fileLine} ${styles.keyLine}`}>
              <span className={styles.yamlKey}>contact:</span>
            </div>
            <div className={`${styles.fileLine} ${styles.itemLine}`}>
              <span className={styles.yamlDash}>-</span>
              <span className={styles.fieldLabel}>location:</span>
              <span className={styles.fieldValue}>
                {developer.city}, {developer.country}
              </span>
            </div>
            <div className={`${styles.fileLine} ${styles.itemLine}`}>
              <span className={styles.yamlDash}>-</span>
              <span className={styles.fieldLabel}>email:</span>
              <a href={`mailto:${developer.email}`} className={styles.fieldLink}>
                {developer.email}
              </a>
            </div>
            <div className={`${styles.fileLine} ${styles.itemLine}`}>
              <span className={styles.yamlDash}>-</span>
              <span className={styles.fieldLabel}>github:</span>
              <a
                href={developer.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.fieldLink}
              >
                <FiGithub /> {developer.github_link.replace("https://", "")}
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
                  <span key={s.name} className={styles.tag}>
                    {s.icon}
                    <span>{s.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* projects */}
            <div className={`${styles.fileLine} ${styles.keyLine}`}>
              <span className={styles.yamlKey}>projects:</span>
            </div>
            {projects.map((p) => (
              <div
                key={p.id}
                className={`${styles.fileLine} ${styles.itemLine} ${styles.projectLine}`}
              >
                <span className={styles.yamlDash}>-</span>
                <div className={styles.projectDetail}>
                  <span className={styles.fieldValue}>
                    <strong>{p.title}</strong> — {p.description}
                  </span>
                  {p.gitLink && (
                    <a
                      href={p.gitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cloneLine}
                    >
                      <span className={styles.promptChar}>$</span> git clone{" "}
                      {p.gitLink.replace("https://", "")}
                    </a>
                  )}
                  {p.liveLink && (
                    <a
                      href={p.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.liveLine}
                    >
                      <FiExternalLink /> {p.liveLink.replace(/^https?:\/\//, "")}
                    </a>
                  )}
                </div>
              </div>
            ))}

            {/* education */}
            <div className={`${styles.fileLine} ${styles.keyLine}`}>
              <span className={styles.yamlKey}>education:</span>
            </div>
            {developer.educationList.map((e) => (
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