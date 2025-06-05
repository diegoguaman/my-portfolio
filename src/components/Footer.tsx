// src/components/Footer.tsx
import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";



const Footer: React.FC = () => {
  // Año actual
  const year = new Date().getFullYear();

  // Información de contacto
  const name = "Diego Guaman Medina";
  const address = "Madrid, España";
  const email = "diegoguamanmedina@gmail.com"; // Sustituye por tu correo real

  // Enlaces de redes sociales (cambia Instagram a tu perfil real)
  const linkedinUrl = "https://www.linkedin.com/in/diego-guaman-medina/";
  const githubUrl = "https://github.com/diegoguaman";
  const instagramUrl = "https://www.instagram.com/drgadventure1994/?utm_source=qr&igsh=MWYwNHBhZmttcWVhag%3D%3D#"; // <-- Actualiza aquí

  // Rutas internas (asegúrate de tener estas páginas/anchuras en tu App)
  const privacyPolicyPath = "/privacy-policy";   // Crea /privacy-policy
  const cookiePolicyPath = "/cookie-policy";     // Crea /cookie-policy
  const legalNoticePath = "/legal-notice";       // O un “Aviso Legal”

  return (
    <footer className="bg-back text-white py-8">
      <div className="container mx-auto px-4 md:flex md:justify-between">
        {/* Sección de enlaces de políticas */}
        <div className="mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">Políticas</h4>
          <ul className="space-y-1">
            <li>
              <a
                href={privacyPolicyPath}
                className="hover:underline"
                aria-label="Política de Privacidad"
              >
                Política de Privacidad
              </a>
            </li>
            <li>
              <a
                href={cookiePolicyPath}
                className="hover:underline"
                aria-label="Política de Cookies"
              >
                Política de Cookies
              </a>
            </li>
            <li>
              <a
                href={legalNoticePath}
                className="hover:underline"
                aria-label="Aviso Legal"
              >
                Aviso Legal
              </a>
            </li>
          </ul>
        </div>

        {/* Sección de contacto e identificación del responsable */}
        <div className="mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">Contacto</h4>
          <p>{name}</p>
          <p>{address}</p>
          <p>
            <a
              href={`mailto:${email}`}
              className="hover:underline"
              aria-label="Enviar correo"
            >
              {email}
            </a>
          </p>
        </div>

        {/* Sección de redes sociales */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Redes Sociales</h4>
          <div className="flex items-center space-x-4">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Diego Guaman Medina"
              className="hover:text-white transition-colors duration-200"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Diego Guaman"
              className="hover:text-white transition-colors duration-200"
            >
              <FaGithub size={24} />
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Diego Guaman"
              className="hover:text-white transition-colors duration-200"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Línea separadora */}
      <div className="border-t border-gray-700 mt-6"></div>

      {/* Texto de pie de página con copyright */}
      <div className="container mx-auto px-4 mt-4 text-center text-sm">
        <p>
          &copy; {year} {name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
