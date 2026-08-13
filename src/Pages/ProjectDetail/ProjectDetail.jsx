import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import styles from "./ProjectDetail.module.css";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import { useProjects } from "../../Context/ProjectContext";
import { FiExternalLink, FiArrowLeft, FiX, FiChevronLeft, FiChevronRight, FiMaximize } from "react-icons/fi";

const ProjectDetail = () => {
  const { id } = useParams();
  const projects = useProjects();
  const project = projects.find((p) => String(p.id) === id);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const images = project?.images?.length ? project.images : project ? [project.image] : [];

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!isFullscreen) return;

    const handleKey = (e) => {
      if (e.key === "Escape") setIsFullscreen(false);
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isFullscreen, goNext, goPrev]);

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
          <button
            type="button"
            className={styles.mainImageWrap}
            onClick={() => setIsFullscreen(true)}
            aria-label="View fullscreen"
          >
            <img
              src={images[activeIndex]}
              alt={`${project.title} screenshot ${activeIndex + 1}`}
              className={styles.mainImage}
            />
            <span className={styles.expandHint}>
              <FiMaximize /> view fullscreen
            </span>
          </button>

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

      {isFullscreen && (
        <div className={styles.lightbox} onClick={() => setIsFullscreen(false)}>
          <button
            type="button"
            className={styles.lightboxClose}
            onClick={() => setIsFullscreen(false)}
            aria-label="Close fullscreen"
          >
            <FiX />
          </button>

          <span className={styles.lightboxCounter}>
            {activeIndex + 1} / {images.length}
          </span>

          {images.length > 1 && (
            <button
              type="button"
              className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              aria-label="Previous image"
            >
              <FiChevronLeft />
            </button>
          )}

          <img
            src={images[activeIndex]}
            alt={`${project.title} screenshot ${activeIndex + 1}`}
            className={styles.lightboxImage}
            onClick={(e) => e.stopPropagation()}
          />

          {images.length > 1 && (
            <button
              type="button"
              className={`${styles.lightboxNav} ${styles.lightboxNext}`}
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              aria-label="Next image"
            >
              <FiChevronRight />
            </button>
          )}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProjectDetail;