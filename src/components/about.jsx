// src/components/About.jsx
import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import resumeFile from '../assets/rajitha_resume.pdf';


const milestones = [
  {
    year: '2023',
    title: 'Began My Web Development Journey',
    description: 'Started learning HTML, CSS, and JavaScript. Built basic websites and explored frontend development.',
    icon: '🧑‍💻'
  },
  {
    year: '2024',
    title: 'Built Academic & Personal Projects',
    description: 'Worked on MERN stack projects, explored Git & GitHub, and started creating a strong developer portfolio.',
    icon: '📈'
  },
  {
    year: '2025',
    title: 'Looking for First Developer Role',
    description: 'Actively applying for frontend or full-stack roles. Open to internships and freelance work. Eager to grow!',
    icon: '🚀'
  }
];

function About() {
  return (
    <section id="about" className="section about">
      <h2>About Me</h2>

      <p className="about-bio">
        I'm a passionate and self-driven web developer with a strong interest in building interactive and responsive web applications. As a fresher, I've dedicated time to mastering modern technologies like React, Node.js, and MongoDB through hands-on projects. I'm actively seeking opportunities to learn, grow, and contribute to real-world development teams.
      </p>

      <div className="timeline">
        {milestones.map((item, idx) => (
          <motion.div
            className="timeline-item"
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <div className="dot">{item.icon}</div>
            <div className="info">
              <h3>{item.year} — {item.title}</h3>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Resume Download */}
<div className="resume-download">
  <a href={resumeFile} download className="resume-btn">
    📄 Download Resume
  </a>
  
</div>

{/* Certifications */}
<h3 className="cert-heading">Certifications</h3>
<div className="certifications">
  <div className="cert-card">
    <h4>📜 MERN Stack Course Completion</h4>
    <p>Successfully completed MERN stack development training at Camerin Folks Pvt Ltd.</p>
  </div>
  <div className="cert-card">
    <h4>📜 Internship Experience – MERN Developer</h4>
    <p>Received experience certificate from Camerin Folks Pvt Ltd for hands-on MERN stack development work.</p>
  </div>
  <a href="/Camerin_Course_Certificate.pdf" target="_blank" className="resume-btn">📜 View Course Certificate</a>
<a href="/Camerin_Experience_Certificate.pdf" target="_blank" className="resume-btn">🏅 View Experience Certificate</a>

</div>

    </section>
  );
}

export default About;
