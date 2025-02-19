import React from 'react';
import resumeData from '../../Nadav_Avital_Resume.json';
import '../styles/ContactSection.css';
import GlassButton from '../components/GlassButton';

const ContactSection = () => (
  <section id="contact" className="section contact-section">
    <h2 className="section-title">Get in Touch</h2>
    <div className="contact-buttons">
      <GlassButton size="medium" onClick={() => window.location.href = `mailto:${resumeData.contact.email}`}>
        Email
      </GlassButton>
      <GlassButton size="medium" onClick={() => window.open(resumeData.contact.linkedin, '_blank')}>
        LinkedIn
      </GlassButton>
      <GlassButton size="medium" onClick={() => window.open('https://github.com/nadavital', '_blank')}>
        GitHub
      </GlassButton>
    </div>
  </section>
);

export default ContactSection;