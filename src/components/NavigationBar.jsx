import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from '../contexts/ThemeContext';
import { HiSun, HiMoon } from 'react-icons/hi';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const NavigationBar = ({ activeSection, onNavigate }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef(null);
  const router = useRouter();

  const sections = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'experience', label: 'Experience', path: '/' },
    { id: 'projects', label: 'Projects', path: '/' },
    { id: 'skills', label: 'Skills', path: '/' },
    { id: 'contact', label: 'Contact', path: '/' }
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const handleNavClick = (id, path, event) => {
    // Prevent default if it's potentially a same-page scroll handled by button/logic
    if (path === '/' && router.pathname === '/') {
       event?.preventDefault(); // Prevent default for button clicks triggering scroll
    }

    if (path === '/' && router.pathname === '/') {
      // If on the main page and clicking a main section, scroll
      onNavigate(id);
    } else if (path === '/' && router.pathname !== '/') {
      router.push('/');
    } else if (path !== '/') {
      // If it's a link to a different page (e.g., /playcount), Link component handles it.
      // We might still want to close the menu if needed, handled below.
    }
    setIsMenuOpen(false); // Close menu after any navigation action
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
            {sections.map(({ id, label, path }) => {
              const isCurrentPageSection = path === '/' && router.pathname === '/' && activeSection === id;
              const isCurrentPageLink = path !== '/' && router.pathname === path;
              const isActive = isCurrentPageSection || isCurrentPageLink;

              // Always render a button for main sections, handle navigation logic in onClick
              if (path === '/') {
                return (
                  <button
                    key={id}
                    role="menuitem"
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(id, path, e)} // Pass event
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {label}
                  </button>
                );
              } else {
                // Render Link for distinct pages like /playcount
                return (
                  <Link
                    key={id}
                    role="menuitem"
                    href={path}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={() => handleNavClick(id, path)} // Close menu on link click
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {label}
                  </Link>
                );
              }
            })}
            {/* Theme toggle button */}
            <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
              {isDarkMode ? <HiSun size={20} /> : <HiMoon size={20} />}
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile menu overlay */}
      {isMobile && isMenuOpen && <div className="mobile-menu-overlay" onClick={() => setIsMenuOpen(false)}></div>}
    </>
  );
};

export default NavigationBar;