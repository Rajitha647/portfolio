// src/components/Footer.jsx
import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-socials">
        <a href="https://github.com/Rajitha647" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/rajitha-r-65949121b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:rajitharajan610@gmail.com">
          <FaEnvelope />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Rajitha R. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
