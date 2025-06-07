import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import useActiveSection from "../hooks/useActiveSection";

const Header: React.FC = () => {
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const sectionIds = ["acerca de", "tecnologías", "proyectos", "contacto"];
  const activeSection = useActiveSection(sectionIds, isScrolledPastHero);
  const hoverClass = "hover:text-hover cursor-pointer";

  useEffect(() => {
    const heroSection = document.getElementById("hero");

    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Cambia el estado según si el HeroSection ha salido completamente del viewport
        setIsScrolledPastHero(!entry.isIntersecting);
      },
      //{ threshold: 0.5 }  Cambia cuando el 50% de la sección es visible
      { rootMargin: `-${document.querySelector("header")?.clientHeight ?? 0}px 0px 0px 0px` }
    );

    observer.observe(heroSection);

    return () => observer.disconnect();
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 w-full shadow-md z-50 transition-colors duration-300 ${
        isScrolledPastHero
          ? "bg-back shadow-lg text-white"
          : "bg-white shadow-md text-black"
      }`}
      //style={isScrolledPastHero ? { backgroundColor: "#7B9EA4" } : undefined}
    >
      <div className="max-w-5xl mx-auto">
        <nav className="mx-auto flex justify-between items-center px-10 py-6 text-xs md:px-8 md:py-5">
          {/* Logo o nombre del portfolio */}
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className={`${hoverClass} font-bold text-lg md:text-xl`}
          >
            DGMDEV
          </Link>

          {/* Botón de hamburguesa: solo visible en pantallas < md */}
          <button
            className="md:hidden text-2xl border-none focus:outline-none"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              <span className="text-hover">✕</span>
            ) : (
              <span className="text-hover">☰</span>
            )}
          </button>

          {/* Menú de navegación */}
          <ul className={`
              absolute top-full left-0 w-full bg-back 
              transform transition:transform duration-400 ease-in-out 
              md:static md:flex md:items-center md:transform-none md:bg-transparent
              ${menuOpen 
                ? "translate-y-0 pointer-events-auto" 
                : "-translate-y-[200%] pointer-events-none"}
            `}>
            {sectionIds.map((id) => (
              <li key={id} className="border-b border-white md:border-none">
                <Link
                  to={id}
                  smooth={true}
                  duration={500}
                  className={`block px-5 py-3 text-center md:inline-block md:px-4 ${hoverClass} 
                  ${ activeSection === id ? `text-hover font-medium` : "" }
                  `}
                >
                  {id.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
