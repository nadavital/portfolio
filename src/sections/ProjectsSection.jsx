import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import resumeData from '../../Nadav_Avital_Resume.json';
import GlassCard from '../components/GlassCard';
import appStoreBadge from '../assets/Download-on-the-App-Store/US/Download_on_App_Store/Black_lockup/SVG/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg';
import playcountIcon from '../assets/playcount/playcounticon.png';

// Define the desired order based on recency
const orderedProjects = [
  // Manually add PlayCount first
  {
    id: 'playcount', // Add a unique id if needed for keys
    name: 'PlayCount',
    duration: 'April 2025 - Present',
    description: 'Discover your most played songs, albums, and artists with PlayCount! Dive deep into your Apple Music library and see which tracks have been on repeat, which albums you love most, and which artists define your taste.',
    link: '/playcount',
    linkText: 'Learn More & Privacy Policy',
    appLink: 'https://apps.apple.com/us/app/playcount-listening-stats/id6744829166',
    appLinkText: 'Get it on the App Store'
  },
  // Add projects from resumeData in desired order
  resumeData.projects[0], // Split (Sept-Dec 2024)
  resumeData.projects[2], // Sous Chef (Mar-June 2024)
  resumeData.projects[1]  // Intelligrocery (Jan-Mar 2024)
];

const ProjectsSection = () => (
  <section id="projects" className="section projects-section">
    <h2 className="section-title">Featured Projects</h2>
    <div className="sections-grid">
      {orderedProjects.map((project, index) => (
        <GlassCard key={project.id || project.name || index}>
          <div className="glass-card-content">
            <div className={`project-card-header ${project.id === 'playcount' ? 'has-icon' : ''}`}>
              {project.id === 'playcount' && (
                <img src={playcountIcon} alt="PlayCount Icon" className="project-icon" />
              )}
              <h3>{project.name}</h3>
              <span className="duration">{project.duration}</span>
            </div>
            <p>{project.description}</p>
            <div className="project-card-footer">
              {project.github &&
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="clean-button">
                  GitHub
                </a>
              }
              {project.liveDemo &&
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="clean-button">
                  Live Demo
                </a>
              }
              {project.appLink &&
                <a href={project.appLink} target="_blank" rel="noopener noreferrer">
                  <img src={appStoreBadge} alt="Download on the App Store" className="app-store-badge" />
                </a>
              }
            </div>
          </div>
          {/* Conditionally render the PlayCount link */}
          {project.link && (
            <Link to={project.link} className="clean-button" style={{ textDecoration: 'none' }}>
              {project.linkText}
            </Link>
          )}
        </GlassCard>
      ))}
    </div>
  </section>
);

export default ProjectsSection;