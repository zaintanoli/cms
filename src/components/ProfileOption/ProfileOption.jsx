import React, { useState } from "react";
import styles from "./profileOption.module.css"; // Import styles for the profile option

const ProfileOption = ({ avatarSrc, handleLogout }) => {
  const [showLogout, setShowLogout] = useState(false);

  const toggleLogout = () => {
    setShowLogout(!showLogout);
  };

  const handleClick = () => {
    setShowLogout(!showLogout);
  };

  const handleLogoutClick = (e) => {
    // Prevents the click on the logout button from propagating to the profile option div
    e.stopPropagation();
  };

  return (
    <div className={styles.profileOption} onClick={handleClick}>
      <div className={styles.avatar}>
        <img src={avatarSrc} alt="Avatar" />
      </div>
      {showLogout && (
        <button
          className={styles.logoutButton}
          onClick={handleLogout}
          onMouseDown={handleLogoutClick}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default ProfileOption;
