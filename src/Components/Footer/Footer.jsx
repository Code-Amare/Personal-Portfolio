import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { TbBrandFiverr, TbBrandUpwork } from "react-icons/tb";
import { useContext } from "react";
import { DeveloperContext } from "../../Context/DeveloperContext";

function Footer() {
  const developer = useContext(DeveloperContext);
  return (
    <footer className={styles.footer}>
      <div className={styles.fileTab}>
        <span className={styles.fileDot} />
        footer.jsx
      </div>

      <div className={styles.content}>
        <div className={styles.left}>
          <span className={styles.comment}>//</span>
          <div>
            <h3 className={styles.name}>Amare</h3>
            <p className={styles.role}>
              Full-Stack Developer <strong>Django &amp; React</strong>
            </p>
          </div>
        </div>

        <nav className={styles.links}>
          <span className={styles.yamlKey}>routes:</span>
          <Link to="/">home</Link>
          <Link to="/projects">projects</Link>
          <Link to="/resume">resume</Link>
          <Link to="/about">about</Link>
        </nav>

        <div className={styles.socials}>
          <a
            href={`mailto:${developer.email}`}
            className={styles.tag}
            aria-label="Email"
          >
            <FiMail />
          </a>
          <a
            href={developer.github_link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.tag}
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href={developer.fiverr_link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.tag}
            aria-label="Fiverr"
          >
            <TbBrandFiverr />
          </a>
          <a
            href={developer.upwork_link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.tag}
            aria-label="Fiverr"
          >
            <TbBrandUpwork />
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <span className={styles.promptChar}>$</span> echo "©{" "}
        {new Date().getFullYear()} Amare - all rights reserved."
      </div>
    </footer>
  );
}

export default Footer;
