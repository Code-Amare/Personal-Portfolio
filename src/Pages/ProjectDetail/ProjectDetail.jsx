import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import styles from "./ProjectDetail.module.css";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import { useProjects } from "../../Context/ProjectContext";
import { FiExternalLink, FiArrowLeft } from "react-icons/fi";

const ProjectDetail = () => {
  const { id } = useParams();
  const projects = useProjects();
  const project = projects.find((p) => String(p.id) === id);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!project) {
    return (
      <div className={styles.container}>
        <Nav currentPage="projects" />
        <div className={styles.notFound}>
          <p className={styles.prompt}>$ cat project.log</p>
          <p className={styles.errorText}>Error: project not found (404)</p>
          <Link to="/projects" className={styles.backLink}>
            <FiArrowLeft /> back to ./projects
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const images = project.images?.length ? project.images : [project.image];
  const slug = project.title.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={styles.container}>
      <Nav currentPage="projects" />

      <header className={styles.header}>
        <div className={styles.terminalBar}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.terminalPath}>
            amare@portfolio:~/projects/{slug}
          </span>
        </div>
        <p className={styles.prompt}>$ cat {slug}.log</p>
        <h1 className={styles.title}>{project.title}</h1>
      </header>

      <main className={styles.mainContent}>
        <Link to="/projects" className={styles.backLink}>
          <FiArrowLeft /> back to ./projects
        </Link>

        <div className={styles.gallery}>
          <div className={styles.mainImageWrap}>
            <img
              src={images[activeIndex]}
              alt={`${project.title} screenshot ${activeIndex + 1}`}
              className={styles.mainImage}
            />
          </div>

          {images.length > 1 && (
            <div className={styles.thumbRow}>
              {images.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  className={`${styles.thumb} ${i === activeIndex ? styles.thumbActive : ""}`}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`View screenshot ${i + 1}`}
                >
                  <img src={img} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className={styles.infoFile}>
          <div className={styles.fileTab}>
            <span className={styles.fileDot} />
            {slug}.yaml
          </div>

          <div className={styles.fileBody}>
            <div className={`${styles.fileLine} ${styles.keyLine}`}>
              <span className={styles.yamlKey}>description:</span>
            </div>
            <div className={`${styles.fileLine} ${styles.itemLine}`}>
              <span className={styles.fieldValue}>{project.description}</span>
            </div>

            {project.longDescription && (
              <>
                <div className={`${styles.fileLine} ${styles.keyLine}`}>
                  <span className={styles.yamlKey}>details:</span>
                </div>
                <div className={`${styles.fileLine} ${styles.itemLine}`}>
                  <span className={styles.fieldValue}>
                    {project.longDescription}
                  </span>
                </div>
              </>
            )}

            <div className={`${styles.fileLine} ${styles.keyLine}`}>
              <span className={styles.yamlKey}>stack:</span>
            </div>
            <div className={`${styles.fileLine} ${styles.itemLine}`}>
              <div className={styles.stackTags}>
                {project.techStack.map((tech) => (
                  <a
                    key={tech.iconLabel}
                    href={tech.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.tag}
                  >
                    {tech.icon}
                    <span>{tech.iconLabel}</span>
                  </a>
                ))}
              </div>
            </div>

            {(project.gitLink || project.liveLink) && (
              <>
                <div className={`${styles.fileLine} ${styles.keyLine}`}>
                  <span className={styles.yamlKey}>links:</span>
                </div>
                {project.gitLink && (
                  <div className={`${styles.fileLine} ${styles.itemLine}`}>
                    <a
                      href={project.gitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cloneLine}
                    >
                      <span className={styles.promptChar}>$</span> git clone{" "}
                      {project.gitLink.replace("https://", "")}
                    </a>
                  </div>
                )}
                {project.liveLink && (
                  <div className={`${styles.fileLine} ${styles.itemLine}`}>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.liveLine}
                    >
                      <FiExternalLink />{" "}
                      {project.liveLink.replace(/^https?:\/\//, "")}
                    </a>
                  </div>
                )}
              </>
            )}

            <span className={styles.cursorBlink}>▍</span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
