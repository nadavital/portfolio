import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import resumeData from '../../Nadav_Avital_Resume.json';
import GlassCard from '../components/GlassCard';

// Define the desired order based on recency
const orderedProjects = [
  // Manually add PlayCount first
  {
    id: 'playcount', // Add a unique id if needed for keys
    name: 'PlayCount',
    duration: 'April 2025 - Present',
    description: 'Discover your most played songs, albums, and artists with PlayCount! Dive deep into your Apple Music library and see which tracks have been on repeat, which albums you love most, and which artists define your taste.',
    link: '/playcount',
    linkText: 'Learn More & Privacy Policy'
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
            <h3>{project.name}</h3>
            <p className="duration">{project.duration}</p>
            <p>{project.description}</p>
            {/* Conditionally render GitHub/Live Demo links if they exist in JSON */}
            {project.github && 
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="clean-button" style={{ marginRight: '0.5rem' }}>GitHub</a>
            }
            {project.liveDemo && 
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="clean-button">Live Demo</a>
            }
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