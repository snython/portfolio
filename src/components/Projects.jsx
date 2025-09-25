import React from 'react';
import './Project.css';
import pharmacyIcon from '../assets/pharmacy_system.svg';

const Projects = () => {
  const projectData = [
    {
      title: 'Pharmacy Management System',
      image: pharmacyIcon,
      description: 'Manage pharmacy system. Permit users to manage medicines, customers, and sales.',
    },
    {
      title: 'School Management System',
      image: pharmacyIcon,
      description: 'Manage school system. Permit users to manage students, teachers, courses, and schedules.',
    },
    {
      title: 'Ecommerce Platform',
      image: pharmacyIcon,
      description: 'Manage ecommerce platform. Permit users to buy and sell products online.',
    },
  ];

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="project-list">
        {projectData.map((project, index) => (
          <div key={index} className="project-item">
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;