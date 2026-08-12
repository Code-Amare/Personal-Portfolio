import styles from "./Nav.module.css";
import Logo from "../../assets/logos/whitemode.svg";
import { useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";

const Nav = ({ currentPage = "home" }) => {
  const navigate = useNavigate();
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const routes = [
    { key: "home", label: "home", path: "/" },
    { key: "about", label: "about", path: "/about" },
    { key: "projects", label: "projects", path: "/projects" },
    { key: "resume", label: "resume", path: "/resume" },
  ];

  return (
    <div
      className={`${styles.NavContainer} ${isSideBarOpen ? styles.sideBarOpen : ""} ${
        currentPage === "home" ? "" : styles.notHome
      }`}
    >
      <img
        src={Logo}
        alt="Amare's personal portfolio logo."
        className={styles.logo}
        onClick={() => navigate("/")}
      />

      <ul>
        <div className={styles.closeButton}>
          <HiX onClick={() => setIsSideBarOpen(false)} />
        </div>

        {routes.map((route) => (
          <li
            key={route.key}
            className={currentPage === route.key ? styles.currentPage : ""}
            onClick={() => {
              navigate(route.path);
              setIsSideBarOpen(false);
            }}
          >
            <span className={styles.pathPrefix}>~/</span>
            {route.label}
          </li>
        ))}
      </ul>

      <div className={styles.menuButton}>
        <HiMenu onClick={() => setIsSideBarOpen(true)} />
      </div>

      <div
        className={styles.overlay}
        onClick={() => setIsSideBarOpen(false)}
      ></div>
    </div>
  );
};

export default Nav;
