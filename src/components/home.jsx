import React, { useCallback } from 'react';
import './Home.css';
import profile from '../assets/profile.jpg';
import background from '../assets/background.jpg';
import { TypeAnimation } from 'react-type-animation';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function Home() {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <section id="home" className="hero-section" style={{ backgroundImage: `url(${background})` }}>
      <Particles
        className="particles"
        init={particlesInit}
        options={{
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 80 } },
          },
          particles: {
            color: { value: "#58a6ff" },
            links: { enable: true, color: "#58a6ff", distance: 100 },
            move: { enable: true, speed: 1 },
            size: { value: 2 },
          },
        }}
      />

      <div className="overlay" />

      <div className="hero-content">
        <div className="text-column">
          <h1>Hi, I'm <span className="highlight">Rajitha</span></h1>

          <TypeAnimation
            sequence={[
              'Web Developer 👨‍💻',
              2000,
              'UI/UX Designer 🎨',
              2000,
              'Tech Explorer 🚀',
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            wrapper="span"
            className="typed-text"
          />



          <a href="#projects" className="btn-primary">See My Work</a>
        </div>

        <div className="image-column">
          <img src={profile} alt="Rajitha" className="profile-image" />
        </div>
      </div>
    </section>
  );
}

export default Home;
