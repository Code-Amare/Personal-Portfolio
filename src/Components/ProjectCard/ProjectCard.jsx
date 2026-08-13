import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ id, image, title, description, techStack, gitLink, liveLink }) => {
  const slug = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={styles.ProjectCard}>
      <Link to={`/projects/${id}`} className={styles.cardLink}>
        <div className={styles.tab}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.tabName}>{slug}.log</span>
        </div>

        <div className={styles.imageWrap}>
          <img src={image} alt={title} className={styles.image} />
        </div>

        <div className={styles.bodyTop}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.line}>
            <span className={styles.comment}>//</span>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      </Link>

      <div className={styles.body}>
        <div className={styles.stackLine}>
          <span className={styles.yamlKey}>stack:</span>
          <div className={styles.stackTags}>
            {techStack.map((tech) => (
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

        {(gitLink || liveLink) && (
          <div className={styles.linkRow}>
            {gitLink && (
              <a href={gitLink} target="_blank" rel="noopener noreferrer" className={styles.cloneLine}>
                <span className={styles.prompt}>$</span> git clone {gitLink.replace("https://", "")}
              </a>
            )}
            {liveLink && (
              <a href={liveLink} target="_blank" rel="noopener noreferrer" className={styles.liveLine}>
                <FiExternalLink /> {liveLink.replace(/^https?:\/\//, "")}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;