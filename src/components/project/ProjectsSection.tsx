import React, { useState } from 'react';
import SectionTitle from '../Section/SectionTitle';
import { projects, Project } from '../../data/projectsData';
import ProjectModal from './ProjectModal';
import ProjectCard from './ProjectCard';


const ProyectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCloseModal = (): void => {
    setSelectedProject(null);
  };
  const handleOpenModal = (project: Project): void => {
    setSelectedProject(project);
  };
  return (
    <div className='relative flex flex-col min-h-[24rem] py-8 px-4 text-center'>
      <SectionTitle title='Proyectos' uppercase='uppercase' />

      <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onViewDetails={handleOpenModal}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          title={selectedProject.title}
          remoteUrl={selectedProject.remoteUrl}
          repoFront={selectedProject.repoFront}
          repoBack={selectedProject.repoBack}
          description={selectedProject.longDescription} 
          isOpen={true}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default ProyectsSection;
