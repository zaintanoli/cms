"use client"
import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { useLanguage } from "@/context/LanguageContext";
import { signOut, useSession } from "next-auth/react";
import ProfileOption from "../ProfileOption/ProfileOption";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Assets",
    url: "/assets",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
  {
    id: 7,
    title: "Pricing",
    url: "/pricing",
  },
];

const Navbar = ({ toggleSidebar }) => {
  const session = useSession();

  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [searchQuery, setSearchQuery] = useState("");
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };
  const handleSearch = () => {
    // Implement your search logic here, e.g., filter data or make an API request
    console.log("Search query:", searchQuery);
  };
  const handleLogout = async () => {
    try {
      await signOut(); // Or your specific logout logic
    } catch (error) {
      // Handle logout error if needed
      console.error("Logout failed:", error);
    }
  };
  return (
    <div className={styles.container}>
      <button className={styles.sidebarToggleButton} onClick={toggleSidebar}>
      </button>
      <Link href="/" className={styles.logo}>
        CMMS
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {/* Language selection */}
        <select
          value={selectedLanguage}
          onChange={(e) => handleLanguageChange(e.target.value)}
        >
          <option value="en">English</option>
          <option value="es">Español</option>
          {/* Add more language options as needed */}
        </select>
        {/* Step 3: Search input field */}
        <div className={styles["search-bar"]}>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSearch(); // Trigger search on Enter key press
              }
            }}
          />
          <button onClick={handleSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <ProfileOption
          avatarSrc="path_to_your_avatar_image"
          handleLogout={handleLogout} // Make sure handleLogout is defined
        />
        
      </div>
    </div>
  );
};

export default Navbar;
