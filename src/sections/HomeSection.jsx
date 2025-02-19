import React from 'react';
import resumeData from '../../Nadav_Avital_Resume.json';

const HomeSection = () => (
  <section id="home" className="section hero-section">
    <div className="hero-content">
      <h1>{resumeData.name}</h1>
      <p>Software Engineer specializing in full-stack development with a focus on creating exceptional user experiences.</p>
      <p>Recent graduate from {resumeData.education.university}</p>
    </div>
  </section>
);

export default HomeSection;