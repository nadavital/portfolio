import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import NavigationBar from '../src/components/NavigationBar';
import HomeSection from '../src/sections/HomeSection';
import ExperienceSection from '../src/sections/ExperienceSection';
import ProjectsSection from '../src/sections/ProjectsSection';
import SkillsSection from '../src/sections/SkillsSection';
import ContactSection from '../src/sections/ContactSection';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const activeSectionRef = useRef('home');

  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  useEffect(() => {
    const sections = document.querySelectorAll('.section:not(.playcount-page)');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (activeSectionRef.current !== id) {
              setActiveSection(id);
              activeSectionRef.current = id;
            }
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = id => {
    const section = document.getElementById(id);
    if (section) {
      const navHeight = 80;
      const sectionTop = section.getBoundingClientRect().top;
      const offsetPosition = sectionTop + window.pageYOffset - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Head>
        <title>Nadav Avital | Software Engineer</title>
        <meta
          name="description"
          content="Portfolio of Nadav Avital, software engineer focusing on full-stack web development and user experiences."
        />
      </Head>
      <NavigationBar activeSection={activeSection} onNavigate={scrollToSection} />
      <main className="main-content">
        <HomeSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </>
  );
}
