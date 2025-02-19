import React, { useState } from 'react';
import '../styles/NavigationBar.css';
import { useTheme } from '../contexts/ThemeContext';
import { HiSun, HiMoon } from 'react-icons/hi';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const NavigationBar = ({ activeSection, onNavigate }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navigation-bar ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="nav-content">        
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>

        <div className="nav-links">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              className={`nav-link ${activeSection === id ? 'active' : ''}`}
              onClick={() => handleNavClick(id)}
            >
              <span>{label}</span>
            </button>
          ))}
          <button 
            className="nav-link theme-toggle" 
            onClick={toggleTheme}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <HiSun size={20} /> : <HiMoon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;