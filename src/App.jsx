import React, { useState, useEffect } from 'react';
import './App.css';
import './styles/GlassCard.css';
import NavigationBar from './components/NavigationBar';
import HomeSection from './sections/HomeSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import ContactSection from './sections/ContactSection';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: [0.2, 0.5],
      rootMargin: '-80px 0px -20% 0px'
    });

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 80; // Height of the navigation bar
      const sectionTop = section.getBoundingClientRect().top;
      const offsetPosition = sectionTop + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="page-wrapper">
      <NavigationBar activeSection={activeSection} onNavigate={scrollToSection} />
      <div className="app-container">
        <div className="main-content">
          <HomeSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </div>
      </div>
    </div>
  );
}

export default App;
