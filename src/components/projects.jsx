// src/components/Projects.jsx
import React from 'react';
import './projects.css';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Smart Grocery App',
    description: 'Drag-and-drop smart grocery list with real-time syncing.',
    tags: ['React', 'Node', 'MongoDB'],
    link: 'https://github.com/your/grocery-app'
  },
  {
    title: 'Portfolio Site',
    description: 'Personal website built using React and hosted on Render.',
    tags: ['React', 'CSS', 'Render'],
    link: 'https://github.com/yourusername/portfolio-site'
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
            GitHub :
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <FaGithub className="github-icon" /> View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
