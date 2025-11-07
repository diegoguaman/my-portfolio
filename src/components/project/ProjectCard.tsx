import React from "react";
import type { ProjectCardProps } from "../../models";

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onViewDetails,
}) => {
  const thumb =
    project.thumbnailUrl ??
     'https://res.cloudinary.com/dgtbm9skf/image/upload/' +
      'pg_!unsigned_fetch!/q_auto:best/fetch/' +
      'w_400,h_200,c_fill/https://parkify-front.vercel.app/';
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg group bg-white flex flex-col">
      {/* Imagen */}
      <div className="w-full h-[200px] overflow-hidden rounded-t-lg">
        <img
          loading="lazy"
          src={thumb}
          alt={`Miniatura de ${project.title}`}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src =
              project.image;
          }
          }
        />
      </div>

      {/* Contenido textual: título y descripción breve */}
      <div className="p-4 flex-grow text-left">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm">
          {project.longDescription.length > 80
            ? project.longDescription.slice(0, 80) + "…"
            : project.longDescription}
        </p>
      </div>

      {/* Botón “Ver detalles” */}
      <div className="p-4 border-t flex justify-end">
        <button
          type="button"
          onClick={() => onViewDetails(project)}
          className="bg-back text-white px-6 py-3 rounded-lg focus:outline-none focus:ring-0 focus:ring-transparent hover:border-back border-2 border-back hover:text-back hover:bg-white transition duration-300 ease-in-out"
        >
          Ver detalles
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
