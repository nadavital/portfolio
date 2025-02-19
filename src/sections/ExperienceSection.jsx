import React from 'react';
import resumeData from '../../Nadav_Avital_Resume.json';
import GlassCard from '../components/GlassCard';

const ExperienceSection = () => (
  <section id="experience" className="section experience-section">
    <h2 className="section-title">Experience & Education</h2>
    <div className="sections-grid">
      <GlassCard>
        <h2>Professional Experience</h2>
        {resumeData.experience.map((exp, index) => (
          <div key={index} style={{ marginBottom: index === resumeData.experience.length - 1 ? 0 : '2rem' }}>
            <h3>{exp.position}</h3>
            <p className="subtitle">{exp.company} • {exp.location}</p>
            <p className="duration">{exp.duration}</p>
            <ul>
              {exp.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </GlassCard>
      <GlassCard>
        <h2>Education</h2>
        <h3>{resumeData.education.university}</h3>
        <p className="subtitle">{resumeData.education.degree}</p>
        <p className="duration">Graduation: {resumeData.education.graduation_date}</p>
        <p className="highlight">GPA: {resumeData.education.GPA}</p>
        <p className="honors">{resumeData.education.honors}</p>
      </GlassCard>
    </div>
  </section>
);

export default ExperienceSection;