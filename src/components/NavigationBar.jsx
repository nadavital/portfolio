import React from 'react';
import '../styles/NavigationBar.css';

const NavigationBar = ({ activeSection, onNavigate }) => {
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="navigation-bar">
      <div className="nav-content">
        <div className="nav-logo">NA</div>
        <div className="nav-links">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              className={`nav-link ${activeSection === id ? 'active' : ''}`}
              onClick={() => onNavigate(id)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;