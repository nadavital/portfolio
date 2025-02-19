import React from 'react';
import resumeData from '../../Nadav_Avital_Resume.json';
import GlassCard from '../components/GlassCard';

const ProjectsSection = () => (
  <section id="projects" className="section projects-section">
    <h2 className="section-title">Featured Projects</h2>
    <div className="sections-grid">
      {resumeData.projects.map((project, index) => (
        <GlassCard key={index}>
          <h3>{project.name}</h3>
          <p className="duration">{project.duration}</p>
          <p>{project.description}</p>
        </GlassCard>
      ))}
    </div>
  </section>
);

export default ProjectsSection;