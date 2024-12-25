import React from "react";
import { Link } from "react-scroll";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-5xl mx-auto px-4">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">Mi Portafolio</h1>
          <ul className="flex gap-4">
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="hover:text-blue-500 cursor-pointer"
              >
                Sobre mí
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="hover:text-blue-500 cursor-pointer"
              >
                Habilidades
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="hover:text-blue-500 cursor-pointer"
              >
                Proyectos
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="hover:text-blue-500 cursor-pointer"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
