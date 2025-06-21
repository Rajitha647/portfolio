// src/components/Skills.jsx
import React from 'react';
import './Skills.css';
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaCode,
} from 'react-icons/fa';
import {
  SiMongodb, SiExpress, SiPostman,
} from 'react-icons/si';

const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 style={{ color: '#E34F26' }} /> },
      { name: 'CSS3', icon: <FaCss3Alt style={{ color: '#1572B6' }} /> },
      { name: 'JavaScript', icon: <FaJs style={{ color: '#F7DF1E' }} /> },
      { name: 'ReactJS', icon: <FaReact style={{ color: '#61DAFB' }} /> }
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'NodeJS', icon: <FaNodeJs style={{ color: '#339933' }} /> },
      { name: 'ExpressJS', icon: <SiExpress style={{ color: '#000000' }} /> },
      { name: 'MongoDB', icon: <SiMongodb style={{ color: '#47A248' }} /> }
    ]
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'GitHub', icon: <FaGithub style={{ color: '#181717' }} /> },
      { name: 'VS Code', icon: <FaCode style={{ color: '#007ACC' }} /> },
      { name: 'Postman', icon: <SiPostman style={{ color: '#FF6C37' }} /> }
    ]
  }
];


function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <div className="skill-group-container">
        {skillGroups.map((group, idx) => (
          <div key={idx} className="skill-group">
            <h3>{group.title}</h3>
            <div className="skills-grid">
              {group.skills.map((skill, i) => (
                <div className="skill-card" key={i}>
                  <div className="skill-icon">{skill.icon}</div>
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
