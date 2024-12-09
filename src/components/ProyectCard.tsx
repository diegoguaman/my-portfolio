import React from 'react';

type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;

