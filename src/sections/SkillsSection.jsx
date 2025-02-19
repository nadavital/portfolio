import React from 'react';
import resumeData from '../../Nadav_Avital_Resume.json';
import GlassCard from '../components/GlassCard';

const SkillsSection = () => (
  <section id="skills" className="section skills-section">
    <h2 className="section-title">Technical Skills</h2>
    <GlassCard>
      <div className="skills-container">
        {[...resumeData.skills.programming_languages, ...resumeData.skills.software_frameworks]
          .sort((a, b) => a.localeCompare(b))
          .map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))
        }
      </div>
    </GlassCard>
  </section>
);

export default SkillsSection;