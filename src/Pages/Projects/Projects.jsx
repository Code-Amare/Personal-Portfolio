import styles from "./Projects.module.css";
import Nav from "../../Components/Nav/Nav";
import SplitText from "../../Components/SplitText/SplitText";
import Footer from "../../Components/Footer/Footer";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import { useProjects } from "../../Context/ProjectContext"; // match your actual filename

const Projects = () => {
  const projects = useProjects();

  return (
    <div className={styles.ProjectsContainer}>
      <div className={styles.content}>
        <Nav currentPage="projects" />

        <div className={styles.header}>
          <div className={styles.terminalBar}>
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.terminalPath}>
              amare@portfolio:~/projects
            </span>
          </div>
          <p className={styles.prompt}>$ ls ./projects</p>
          <SplitText
            text="Projects"
            splitType="chars"
            delay={100}
            duration={0.7}
            className={styles.pageTitle}
            threshold={0.3}
          />
        </div>

        <main className={styles.mainContent}>
          <div className={styles.introBlock}>
            <span className={styles.commentMark}>/**</span>
            <p className={styles.intro}>
              Here are some of my featured projects — each one carefully built
              with strong architecture, modern UI, and enterprise-level
              security. I focus on performance, scalability, and crafting clean,
              maintainable code.
            </p>
            <span className={styles.commentMark}>*/</span>
          </div>

          <div className={styles.sectionLabel}>
            <span className={styles.bracket}>&lt;</span>
            Featured Work
            <span className={styles.bracket}>/&gt;</span>
          </div>

          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                image={project.image}
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                gitLink={project.gitLink}
                liveLink={project.liveLink}
              />
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Projects;
