import React from 'react';
import ProjectCard from '../components/ProyectCard';


const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'This is the description for Project 1.',
      link: 'https://github.com/your-username/project-1',
    },
    {
      title: 'Project 2',
      description: 'This is the description for Project 2.',
      link: 'https://github.com/your-username/project-2',
    },
    {
      title: 'Project 3',
      description: 'This is the description for Project 3.',
      link: 'https://github.com/your-username/project-3',
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
