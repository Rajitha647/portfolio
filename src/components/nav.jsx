import React from 'react';
import { useTheme } from '../ThemeContext';

function Navbar() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <header className="navbar" style={{height:"30px"}}>
      <div className="logo">
        <h4>Rajitha</h4>
        </div>

      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <button onClick={() => setDarkMode(!darkMode)} className="theme-toggle">
              {darkMode ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
