import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaArrowUp } from "react-icons/fa"; // Icono de flecha hacia arriba
import { motion, AnimatePresence } from "framer-motion";

const BackToUpButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar el botón si se ha hecho scroll más de 300px o se está en la sección 'skills'
      const scrollPosition = window.scrollY;
      const skillsSection = document.getElementById("tecnologías");

      if (skillsSection) {
        const skillsRect = skillsSection.getBoundingClientRect();
        const isInSkills =
          skillsRect.top < window.innerHeight &&
          skillsRect.bottom > 0; // Verifica si la sección está en pantalla

        setIsVisible(scrollPosition > 900 || isInSkills);
      }
    };

    // Escuchar el evento scroll
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-4 right-4 z-100"
        >
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="flex justify-center items-center w-12 h-12 rounded-full bg-back text-white shadow-lg cursor-pointer hover:bg-white hover:text-back transition-all duration-300"
            aria-label="Back to Up"
          >
            <FaArrowUp className="text-xl" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToUpButton;
