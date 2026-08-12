import styles from "./About.module.css";
import Nav from "../../Components/Nav/Nav";
import SplitText from "../../Components/SplitText/SplitText";
import Footer from "../../Components/Footer/Footer";
import { developerData } from "../../Context/DeveloperContext"; // adjust path to match where you place this file

const StackGroup = ({ label, items }) => (
  <>
    <div className={`${styles.fileLine} ${styles.keyLine}`}>
      <span className={styles.yamlKey}>{label}:</span>
    </div>
    {items.map((item) => (
      <div key={item.name} className={`${styles.fileLine} ${styles.itemLine}`}>
        <span className={styles.yamlDash}>-</span>
        <span className={styles.stackIcon}>{item.icon}</span>
        <span className={styles.stackName}>{item.name}</span>
      </div>
    ))}
  </>
);

const About = () => {
  const username = developerData.name.split(" ")[0].toLowerCase();

  return (
    <div className={styles.AboutContainer}>
      <div className={styles.background}></div>
      <div className={styles.content}>
        <Nav currentPage="about" />

        <div className={styles.header}>
          <div className={styles.terminalBar}>
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.terminalPath}>
              {username}@portfolio:~/about
            </span>
          </div>
          <p className={styles.prompt}>$ cat about.md</p>
          <SplitText
            text="About"
            splitType="chars"
            delay={100}
            duration={0.7}
            className={styles.pageTitle}
            threshold={0.3}
          />
        </div>

        <main className={styles.mainContent}>
          <div className={styles.aboutBlock}>
            <span className={styles.commentMark}>/**</span>
            <p className={styles.aboutMe}>
              Hi, I'm Amare, a full-stack developer specializing in Django and
              React. I design and build scalable back-end systems, clean APIs,
              and beautiful, intuitive user interfaces.
              <br />
              <br />
              Security is a top priority in everything I create. All my
              applications are safeguarded against brute-force attacks, DDoS,
              SQL injection, and other top OWASP security threats, ensuring
              reliable and trustworthy systems for users. I also focus on making
              UIs not only functional but visually appealing, delivering
              seamless interactions that users enjoy.
            </p>
            <span className={styles.commentMark}>*/</span>
          </div>

          <div className={styles.sectionLabel}>
            <span className={styles.bracket}>&lt;</span>
            Tech Stack
            <span className={styles.bracket}>/&gt;</span>
          </div>

          <div className={styles.stackFile}>
            <div className={styles.fileTab}>
              <span className={styles.fileDot} />
              stack.yaml
            </div>
            <div className={styles.fileBody}>
              <StackGroup label="languages" items={developerData.languages} />
              <StackGroup label="frameworks" items={developerData.frameworks} />
              <StackGroup label="tools" items={developerData.tools} />
              <span className={styles.cursorBlink}>▍</span>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default About;
