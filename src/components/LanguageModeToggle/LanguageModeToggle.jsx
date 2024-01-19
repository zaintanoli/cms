// LanguageToggle.jsx
import React, { useContext } from "react";
import styles from "./languageToggle.module.css";
import { LanguageContext } from "../../context/LanguageContext";

const LanguageToggle = () => {
  const { toggleLanguage, language } = useContext(LanguageContext);
  return (
    <div className={styles.container} onClick={toggleLanguage}>
      <div className={styles.icon}>{language === "en" ? "🌎" : "🌍"}</div>
    </div>
  );
};

export default LanguageToggle;
