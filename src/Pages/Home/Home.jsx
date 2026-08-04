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

  useGSAP(
    () => {
      const tl = gsap.timeline({ repeat: -1 });

      // --- TWEAK THIS VARIABLE ---
      // Changes when the rotation starts relative to the fly-out ending.
      // Examples: "-=0.5" (starts 0.5s early), "+=0.2" (delays by 0.2s), "<" (starts simultaneously)
      const rotationStartOffset = "-=0.5";

      // Initial setup: Place icons slightly offset for the "pop/bounce" entrance
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
      // 1. Pop/Bounce Entrance
      tl.to(".frontend-icon", {
        y: 0,
        scale: 1,
        opacity: 0.8,
        duration: 1.2,
        stagger: 0.15,
        ease: "elastic.out(1, 0.4)",
      })
        // 2. Hover in place (short random distances, varied directions)
        .to(".frontend-icon", {
          y: "random(-8, 8)", // Short distance up or down
          x: "random(-8, 8)", // Short distance left or right
          duration: 1.5,
          yoyo: true, // Float back
          repeat: 1,
          ease: "sine.inOut",
          stagger: {
            each: 0.1,
            from: "random", // Start randomly so they don't move together
          },
        })
        // 3. Fly out animation
        .to(".frontend-icon", {
          y: "-150vh", // Fly out of the screen
          opacity: 0,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.in",
        })

        // --- TRANSITION TO BACKEND ---
        // Start rotation first (using the tweakable offset variable)
        .to(
          rotatorRef.current,
          { rotation: 180, duration: 2.1, ease: "expo.inOut" },
          rotationStartOffset,
        )
        // Set a label exactly 1 second after rotation starts
        .add("colorChangeToBackend", "<1")
        // Trigger the background change and underlines at that exact label
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
        // 1. Pop/Bounce Entrance
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
        // 2. Hover in place (short random distances, varied directions)
        .to(".backend-icon", {
          y: "random(-8, 8)", // Short distance up or down
          x: "random(-8, 8)", // Short distance left or right
          duration: 1.5,
          yoyo: true, // Float back
          repeat: 1,
          ease: "sine.inOut",
          stagger: {
            each: 0.1,
            from: "random", // Start randomly so they don't move together
          },
        })
        // 3. Fly out animation
        .to(".backend-icon", {
          y: "-150vh", // Fly out of the screen
          opacity: 0,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.in",
        })

        // --- TRANSITION TO FRONTEND ---
        // Start rotation first (using the tweakable offset variable)
        .to(
          rotatorRef.current,
          { rotation: 360, duration: 1.2, ease: "expo.inOut" },
          rotationStartOffset,
        )
        // Set a label exactly 1 second after rotation starts
        .add("colorChangeToFrontend", "<1")
        // Trigger the background change and underlines at that exact label
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

        // Reset positions seamlessly for the loop to start over
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
        <div className={styles.cta}>
          <button onClick={() => navigate("/projects")}>View Projects</button>
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
          {developer.frontend_icons?.map((icon, index) => {
            let displayIcon = icon;

            // Check and replace HTML and CSS text dynamically
            if (typeof icon === "string") {
              const lowerIcon = icon.toLowerCase();
              if (lowerIcon === "css" || lowerIcon === "css3") {
                displayIcon = "Tailwind CSS";
              } else if (lowerIcon === "html" || lowerIcon === "html5") {
                displayIcon = "JavaScript";
              }
            }

            return (
              <span key={index} className="bg-icon frontend-icon">
                {displayIcon}
              </span>
            );
          })}
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
