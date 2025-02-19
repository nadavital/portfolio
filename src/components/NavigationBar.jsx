import React, { useState, useEffect, useRef } from 'react';
import '../styles/NavigationBar.css';
import { useTheme } from '../contexts/ThemeContext';
import { HiSun, HiMoon } from 'react-icons/hi';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const NavigationBar = ({ activeSection, onNavigate }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  const handleNavClick = (id) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`navigation-bar ${isMenuOpen ? 'menu-open' : ''}`}
        ref={menuRef}
        role="navigation"
      >
        <div className="nav-content">        
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>

          <div 
            className="nav-links"
            role="menu"
            aria-hidden={!isMenuOpen}
          >
            {sections.map(({ id, label }) => (
              <button
                key={id}
                className={`nav-link ${activeSection === id ? 'active' : ''}`}
                onClick={() => handleNavClick(id)}
                role="menuitem"
                aria-current={activeSection === id ? 'page' : undefined}
              >
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
      <button 
        className="theme-toggle" 
        onClick={toggleTheme}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDarkMode ? <HiSun size={24} /> : <HiMoon size={24} />}
      </button>
    </>
  );
};

export default NavigationBar;