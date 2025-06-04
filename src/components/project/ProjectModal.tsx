// src/components/ProjectModal.tsx
import React, { MouseEvent, useEffect, useRef } from "react";
import ButtonLink from "./../../components/ButtonLink"; // Asegúrate de que la ruta sea correcta
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectModalProps {
  title: string;
  remoteUrl: string; // URL de la aplicación desplegada
  repoFront: string; // URL del repositorio Front-end
  repoBack: string; // URL del repositorio Back-end
  description: string; // texto tipo blog para la descripción
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  title,
  remoteUrl,
  repoFront,
  repoBack,
  description,
  isOpen,
  onClose,
}) => {
  // Referencia para mover el foco cuando se abre el modal
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus(); // Trap focus al abrir
    }
  }, [isOpen]);

  // Evita que los clics dentro del modal se propaguen al backdrop
  const stopPropagation = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  if (!isOpen) return null;

  return (
    <div
      id="modal-backdrop"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center overflow-y-auto z-50"
      onClick={onClose} // Clic fuera cierra el modal
      aria-hidden="true"
    >
      <div
        role="dialog"
        aria-labelledby="project-modal-title"
        tabIndex={-1}
        ref={modalRef}
        aria-modal="true"
        className="bg-white rounded-lg overflow-hidden relative mt-12 mx-4 max-w-3xl w-3/4 p-6 focus:outline-none shadow-xl"
        onClick={stopPropagation}
      >
        {/* Botón de cerrar */}
        <button
          type="button"
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 focus:outline-none"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          ✕
        </button>

        {/* ---------------------- */}
        {/* 1. Barra de enlaces  */}
        {/* ---------------------- */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {/* Botón: Ver app en Vercel */}
          <ButtonLink
            buttonText="Ver App"
            bgColor="bg-green-600"
            href={remoteUrl}
            Icon={FaExternalLinkAlt}
          />
          {/* Botón: Repositorio Front-end */}
          <ButtonLink
            buttonText="Front-end"
            bgColor="bg-gray-800"
            href={repoFront}
            Icon={FaGithub}
          />
          {/* Botón: Repositorio Back-end */}
          <ButtonLink
            buttonText="Back-end"
            bgColor="bg-gray-800"
            href={repoBack}
            Icon={FaGithub}
          />
        </div>

        {/* ---------------------- */}
        {/* 2. Título del proyecto */}
        {/* ---------------------- */}
        <h2
          id="project-modal-title"
          className="text-3xl font-bold text-center text-gray-900 mb-6"
        >
          {title}
        </h2>

        {/* --------------------------------- */}
        {/* 3. Vista previa dinámica (iframe) */}
        {/* --------------------------------- */}
        <div className="w-full h-[400px] mb-6 border border-gray-200 rounded-lg overflow-hidden">
          <iframe
            src={remoteUrl}
            title={`Vista previa de ${title}`}
            className="w-full h-full"
            sandbox="allow-scripts allow-same-origin allow-popups"
          />
        </div>

        {/* --------------------------- */}
        {/* 4. Contenido tipo blog     */}
        {/* --------------------------- */}
        <div className="prose prose-lg max-w-none mb-6 text-left">
          {/* 
            Dividimos el texto en párrafos. 
            La clase `prose` (con el plugin @tailwindcss/typography) aplica estilos de blog legibles.
          */}
          {description.split("\n\n").map((parrafo, idx) => (
            <p key={idx} className="mb-4">
              {parrafo}
            </p>
          ))}
        </div>

        {/* --------------------------- */}
        {/* 5. (Opcional) Enlaces extra */}
        {/* --------------------------- */}
        {/* 
        <div className="mt-4">
          <h3 className="font-semibold text-lg mb-2">Recursos adicionales</h3>
          <ul className="list-disc list-inside text-blue-600">
            <li>
              <a href="https://docs.ejemplo.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Documentación oficial
              </a>
            </li>
            <li>
              <a href="https://video.ejemplo.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Video demo
              </a>
            </li>
          </ul>
        </div>
        */}
      </div>
    </div>
  );
};

export default ProjectModal;
