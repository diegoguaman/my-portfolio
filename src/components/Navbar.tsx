import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import useActiveSection from "../hooks/useActiveSection";

const Header: React.FC = () => {
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const sectionIds = ["about", "skills", "projects", "contact"];
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
      { rootMargin: `-${document.querySelector("header")?.clientHeight || 0}px 0px 0px 0px` }
    );

    observer.observe(heroSection);

    return () => observer.disconnect();
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 ${
        isScrolledPastHero
          ? "bg-back shadow-lg text-white"
          : "bg-white shadow-md text-black"
      }`}
      //style={isScrolledPastHero ? { backgroundColor: "#7B9EA4" } : undefined}
    >
      <div className="max-w-5xl mx-auto px-4">
        <nav className="container mx-auto flex justify-between items-center p-4 text-xs">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className={hoverClass}
          >
            MY PORTFOLIO
          </Link>
          <ul className="flex gap-4">
          {sectionIds.map((id) => (
              <li key={id}>
                <Link
                  to={id}
                  smooth={true}
                  duration={500}
                  className={`${hoverClass} ${
                    activeSection === id ? "text-hover" : ""
                  }`}
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
