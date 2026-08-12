import styles from "./Home.module.css";
import Nav from "../../Components/Nav/Nav";
import { useContext, useState, useRef } from "react";
import { DeveloperContext } from "../../Context/DeveloperContext";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Home = () => {
  const developer = useContext(DeveloperContext);
  const [isFrontend, setIsFrontend] = useState(true);
  const navigate = useNavigate();

  const containerRef = useRef(null);
  const rotatorRef = useRef(null);
  const reactUnderlineRef = useRef(null);
  const djangoUnderlineRef = useRef(null);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useGSAP(
    () => {
      if (prefersReducedMotion) {
        gsap.set(".bg-icon", { x: 0, y: 0, scale: 1, opacity: 0.3 });
        gsap.set(reactUnderlineRef.current, {
          scaleX: 1,
          transformOrigin: "left center",
        });
        gsap.set(djangoUnderlineRef.current, { scaleX: 0 });
        return;
      }

      const tl = gsap.timeline({ repeat: -1 });

      // --- TWEAK THIS VARIABLE ---
      const rotationStartOffset = "-=0.3";

      gsap.set(".bg-icon", { x: 0, y: 40, scale: 0.8, opacity: 0 });
      gsap.set(reactUnderlineRef.current, {
        scaleX: 1,
        transformOrigin: "left center",
      });
      gsap.set(djangoUnderlineRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.utils.toArray(".bg-icon").forEach((icon) => {
        gsap.set(icon, { rotation: gsap.utils.random(-15, 15) });
      });

      // --- PHASE 1: FRONTEND ---
      tl.to(".frontend-icon", {
        y: 0,
        scale: 1,
        opacity: 0.8,
        duration: 1.2,
        stagger: 0.15,
        ease: "elastic.out(1, 0.4)",
      })
        .to(".frontend-icon", {
          y: "random(-8, 8)",
          x: "random(-8, 8)",
          duration: 1.5,
          yoyo: true,
          repeat: 1,
          ease: "sine.inOut",
          stagger: { each: 0.1, from: "random" },
        })
        .to(".frontend-icon", {
          y: "-150vh",
          opacity: 0,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.in",
        })
        .to(
          rotatorRef.current,
          { rotation: 180, duration: 2.1, ease: "expo.inOut" },
          rotationStartOffset,
        )
        .add("colorChangeToBackend", "<1")
        .add(() => setIsFrontend(false), "colorChangeToBackend")
        .to(
          reactUnderlineRef.current,
          {
            scaleX: 0,
            transformOrigin: "right center",
            duration: 0.5,
            ease: "power2.inOut",
          },
          "colorChangeToBackend",
        )
        .to(
          djangoUnderlineRef.current,
          {
            scaleX: 1,
            transformOrigin: "left center",
            duration: 0.5,
            ease: "power2.inOut",
          },
          "colorChangeToBackend+=0.2",
        )
        // --- PHASE 2: BACKEND ---
        .to(
          ".backend-icon",
          {
            y: 0,
            scale: 1,
            opacity: 0.8,
            duration: 1.2,
            stagger: 0.15,
            ease: "elastic.out(1, 0.4)",
          },
          "<0.4",
        )
        .to(".backend-icon", {
          y: "random(-8, 8)",
          x: "random(-8, 8)",
          duration: 1.5,
          yoyo: true,
          repeat: 1,
          ease: "sine.inOut",
          stagger: { each: 0.1, from: "random" },
        })
        .to(".backend-icon", {
          y: "-150vh",
          opacity: 0,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.in",
        })
        .to(
          rotatorRef.current,
          { rotation: 360, duration: 1.2, ease: "expo.inOut" },
          rotationStartOffset,
        )
        .add("colorChangeToFrontend", "<1")
        .add(() => setIsFrontend(true), "colorChangeToFrontend")
        .to(
          djangoUnderlineRef.current,
          {
            scaleX: 0,
            transformOrigin: "right center",
            duration: 0.5,
            ease: "power2.inOut",
          },
          "colorChangeToFrontend",
        )
        .to(
          reactUnderlineRef.current,
          {
            scaleX: 1,
            transformOrigin: "left center",
            duration: 0.5,
            ease: "power2.inOut",
          },
          "colorChangeToFrontend+=0.2",
        )
        .set(".frontend-icon", { x: 0, y: 40, scale: 0.8 })
        .set(".backend-icon", { x: 0, y: 40, scale: 0.8 });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className={`${styles.HomeContainer} ${isFrontend ? styles.frontend : styles.backend}`}
    >
      <Nav />

      <div
        className={`${styles.hero} ${isFrontend ? styles.frontendMode : styles.backendMode}`}
      >
        <div className={styles.terminalTag}>
          ~/home <span className={styles.cursor}>▍</span>
        </div>

        <h1>
          Hi, I'm <span>Amare Misgana</span>
        </h1>
        <h2>
          I craft REST APIs & full-stack web apps with <br />
          <span className={styles.names}>
            <span className={styles.djangoWord}>
              Django
              <span ref={djangoUnderlineRef} className={styles.underline} />
            </span>
            {" & "}
            <span className={styles.reactWord}>
              React
              <span ref={reactUnderlineRef} className={styles.underline} />
            </span>
          </span>
        </h2>

        <div className={styles.modeLine}>
          <span className={styles.modeDot} />
          mode: {isFrontend ? "frontend" : "backend"}
        </div>

        <div className={styles.cta}>
          <button onClick={() => navigate("/projects")}>
            <span className={styles.ctaPrompt}>&gt;</span> View Projects
          </button>
        </div>
      </div>

      {/* ROTATING ARC SECTION */}
      <div className={styles.iconCircle}>
        <div className={styles.frameworkIconsContainer}>
          <div ref={rotatorRef} className={styles.frameworkIcons}>
            <div className={styles.react}>{developer.frontend_framework}</div>
            <div className={styles.django}>{developer.backend_framework}</div>
          </div>
        </div>
      </div>

      {/* BACKGROUND WATERMARK ICONS */}
      <div className={styles.backgroundIconsContainer}>
        <div className={`${styles.frontendIcons} ${styles.icons}`}>
          {developer.frontend_icons?.map((icon, index) => (
            <span key={index} className="bg-icon frontend-icon">
              {icon}
            </span>
          ))}
        </div>
        <div className={`${styles.backendIcons} ${styles.icons}`}>
          {developer.backend_icons?.map((icon, index) => (
            <span key={index} className="bg-icon backend-icon">
              {icon}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
