import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; // Import routing components
import './App.css';
import './styles/GlassCard.css';
import NavigationBar from './components/NavigationBar';
import HomeSection from './sections/HomeSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import ContactSection from './sections/ContactSection';
import PlayCountPage from './pages/PlayCountPage'; // Import the new page
import PlayCountPrivacyPolicyPage from './pages/PlayCountPrivacyPolicyPage'; // Import PlayCount-specific privacy policy

// Component to render the main sections for the home page
function MainPageContent({ setActiveSection }) {
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

    const sections = document.querySelectorAll('.section:not(.playcount-page)'); // Exclude PlayCount page from observer
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [setActiveSection]);

  return (
    <>
      <HomeSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  // Reset active section if not on the main page
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection(null); // Or set to a default/neutral state
    }
    // Optionally, scroll to top when navigating to a new page
    window.scrollTo(0, 0);
  }, [location.pathname]);


  const scrollToSection = (sectionId) => {
    // Check if we are on the main page before scrolling
    if (location.pathname === '/') {
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
    }
  };

  return (
    <div className="page-wrapper">
      {/* Pass location to NavigationBar if needed */}
      <NavigationBar activeSection={activeSection} onNavigate={scrollToSection} />
      <div className="app-container">
        <div className="main-content">
          <Routes> {/* Define routes */}
            <Route path="/" element={<MainPageContent setActiveSection={setActiveSection} />} />
            <Route path="/playcount" element={<PlayCountPage />} />
            <Route path="/playcount/privacy-policy" element={<PlayCountPrivacyPolicyPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
