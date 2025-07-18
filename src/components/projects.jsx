// src/components/Projects.jsx
import React from 'react';
import './projects.css';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Weather App',
    description: 'Weather app built using React.js weather API.',
    tags: ['React', 'Weather API'],
    link: 'https://weather-app-olive-zeta-ocg2ey1y2y.vercel.app/'
  },
  {
    title: 'Portfolio Site',
    description: 'Personal website built using React and hosted on Render.',
    tags: ['React', 'CSS', 'Render'],
    link: 'https://mypersonalporfolio.vercel.app/'
  }
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((proj, idx) => (
          <div className="project-card" key={idx}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="tags">
              {proj.tags.map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
           
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <FaGithub className="github-icon" /> View on GitHub /In Live 
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
