import React from 'react';
import resumeData from '../../Nadav_Avital_Resume.json';
import GlassCard from '../components/GlassCard';

const ExperienceSection = () => (
  <section id="experience" className="section experience-section">
    <h2 className="section-title">Experience & Education</h2>
    <div className="sections-grid">
      {resumeData.experience.map((exp, index) => (
        <GlassCard key={index}>
          <h3>{exp.position}</h3>
          <p className="subtitle">{exp.company} • {exp.location}</p>
          <p className="duration">{exp.duration}</p>
          <ul>
            {exp.responsibilities.map((resp, i) => (
              <li key={i}>{resp}</li>
            ))}
          </ul>
        </GlassCard>
      ))}
      <GlassCard>
        <h3>{resumeData.education.university}</h3>
        <p className="subtitle">{resumeData.education.degree}</p>
        <p className="duration">Graduation: {resumeData.education.graduation_date}</p>
        <p className="highlight">GPA: {resumeData.education.GPA}</p>
        <p className="honors">{resumeData.education.honors}</p>
        {/* Relevant coursework as inline comma‑separated list */}
        <p className="coursework">
          <strong>Relevant Coursework: </strong>
          {resumeData.education.relevant_coursework.join(', ')}
        </p>
      </GlassCard>
    </div>
  </section>
);

export default ExperienceSection;