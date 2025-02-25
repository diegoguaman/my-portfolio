import React, { useState, MouseEvent } from 'react';
import SectionTitle from './SectionTitle';

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Proyecto 1',
    image: 'https://via.placeholder.com/300?text=Proyecto+1',
    description: 'Descripción del Proyecto 1.',
  },
  {
    id: 2,
    title: 'Proyecto 2',
    image: 'https://via.placeholder.com/300?text=Proyecto+2',
    description: 'Descripción del Proyecto 2.',
  },
  {
    id: 3,
    title: 'Proyecto 3',
    image: 'https://via.placeholder.com/300?text=Proyecto+3',
    description: 'Descripción del Proyecto 3.',
  },
  // Agrega más proyectos según necesites
];

const ProyectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCloseModal = (): void => {
    setSelectedProject(null);
  };

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>): void => {
    if ((e.target as HTMLDivElement).id === 'modal-backdrop') {
      handleCloseModal();
    }
  };

  return (
    <div className='relative flex flex-col min-h-[24rem] py-8 px-4'>
      <SectionTitle title='Projects' />

      <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {projects.map((project) => (
          <div
            key={project.id}
            className='relative cursor-pointer overflow-hidden rounded-lg shadow-lg group'
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className='w-full h-64 object-cover'
            />
            <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out'>
              {project.title}
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          id="modal-backdrop"
          className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
          onClick={handleBackdropClick}
        >
          <div
            className='bg-white rounded-lg overflow-hidden relative max-w-lg w-full p-6'
            onClick={(e) => e.stopPropagation()} // Evita cerrar el modal al hacer click en el contenido
          >
            <button
              className='absolute top-2 right-2 text-gray-500 hover:text-gray-800'
              onClick={handleCloseModal}
            >
              Cerrar
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className='w-full h-64 object-cover rounded-md'
            />
            <h2 className='mt-4 text-2xl font-bold'>{selectedProject.title}</h2>
            <p className='mt-2 text-gray-600'>{selectedProject.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProyectsSection;
