import styles from "./IconHolder.module.css";

const IconHolder = ({ icon, iconLabel, link, text = false }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.IconHolderContainer}
    >
      <span className={`${styles.icon} ${text ? styles.text : ""}`}>
        {icon}
      </span>
      <p className={styles.label}>{iconLabel}</p>
    </a>
  );
};

export default IconHolder;
