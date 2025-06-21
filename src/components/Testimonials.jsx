// src/components/Testimonials.jsx
import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'Freelance Client',
    text: 'Rajitha delivered an amazing website on time and with great attention to detail. Highly recommended!',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'David Patel',
    title: 'Open Source Maintainer',
    text: 'His contributions to our open-source project were efficient and thoughtful. Great team player!',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-list">
        {testimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <img src={t.image} alt={t.name} />
            <h3>{t.name}</h3>
            <p className="title">{t.title}</p>
            <p className="text">"{t.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
