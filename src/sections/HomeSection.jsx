import React from 'react';
import resumeData from '../../Nadav_Avital_Resume.json';
import profilePic from '../assets/NadavPhoto.png';
import resumePDF from '../assets/NadavResume.pdf';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import GlassButton from '../components/GlassButton';

const HomeSection = () => (
  <section id="home" className="section hero-section">
    <div className="hero-content">
      <div className="profile-image">
        <img src={profilePic} alt="Nadav Avital" />
      </div>
      <h1>{resumeData.name}</h1>
      <p>Software Engineer specializing in full-stack development with a focus on creating exceptional user experiences.</p>
      <p>Recent graduate from {resumeData.education.university}</p>
      <div className="social-links">
        <GlassButton size="medium" onClick={() => window.open('https://github.com/nadavital', '_blank')}>
          <FaGithub /> GitHub
        </GlassButton>
        <GlassButton size="medium" onClick={() => window.open(resumeData.contact.linkedin, '_blank')}>
          <FaLinkedin /> LinkedIn
        </GlassButton>
        <GlassButton size="medium" onClick={() => window.open(resumePDF, '_blank')}>
          <FaFileDownload /> Resume
        </GlassButton>
      </div>
    </div>
  </section>
);

export default HomeSection;