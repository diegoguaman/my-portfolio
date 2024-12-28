import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Header: React.FC = () => {
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  useEffect(() => {
    const heroSection = document.getElementById("hero");

    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Cambia el estado según si el HeroSection ha salido completamente del viewport
        setIsScrolledPastHero(!entry.isIntersecting);
      },
      //{ threshold: 0.5 }  Cambia cuando el 50% de la sección es visible
      { rootMargin: `-${document.querySelector("header")?.clientHeight || 0}px 0px 0px 0px` }
    );

    observer.observe(heroSection);

    return () => observer.disconnect();
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 ${
        isScrolledPastHero
          ? "bg-primary shadow-lg text-white"
          : "bg-white shadow-md text-black"
      }`}
      style={isScrolledPastHero ? { backgroundColor: "#7B9EA4" } : undefined}
    >
      <div className="max-w-5xl mx-auto px-4">
        <nav className="container mx-auto flex justify-between items-center p-4 text-xs">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="hover:text-blue-500 cursor-pointer"
          >
            MY PORTFOLIO
          </Link>
          <ul className="flex gap-4">
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="hover:text-blue-500 cursor-pointer"
              >
                ABOUT ME
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="hover:text-blue-500 cursor-pointer"
              >
                SKILLS
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="hover:text-blue-500 cursor-pointer"
              >
                PROYECTS
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="hover:text-blue-500 cursor-pointer"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
