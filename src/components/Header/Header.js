import React from "react";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="containerLinks">
        <a href="https://github.com/thejohnpg/github-finder" target="_blank" className="header-icon"><FaGithub size={30} color="000" className="iconGitHub"  /></a>
        <a href="https://www.linkedin.com/in/thejohnpg/" target="_blank" className="header-icon" ><FaLinkedin  size={30} color="000"  className="iconGitHub"  /></a>
      </div>

      <div className="containerTitle">
        <span className="headerTitle">
          GitHub Finder
      </span>
      </div>


    </div>
  );
}
