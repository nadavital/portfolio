import React from 'react';
import Image from 'next/image';
import resumeData from '../../Nadav_Avital_Resume.json';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import GlassButton from '../components/GlassButton';

const HomeSection = () => (
  <section id="home" className="section hero-section">
    <div className="hero-content">
      <div className="profile-image" style={{ position: 'relative', width: '200px', height: '200px' }}>
        <Image src="/assets/NadavPhoto.png" alt="Nadav Avital" fill style={{ objectFit: 'cover' }} />
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
        <GlassButton size="medium" onClick={() => window.open('/assets/NadavResume.pdf', '_blank')}>
          <FaFileDownload /> Resume
        </GlassButton>
      </div>
    </div>
  </section>
);

export default HomeSection;