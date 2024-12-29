import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaArrowDown } from "react-icons/fa"; // Icono de flecha
import { motion, AnimatePresence } from "framer-motion";

const ScrollButton: React.FC<{ targetSection: string }> = ({
  targetSection,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Mostrar el botón después de 10 segundos
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    const heroSection = document.getElementById("hero");
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0.8 }
    );
    observer.observe(heroSection);

    return () => {
      clearTimeout(timer); // Limpiar el temporizador al desmontar el componente
      observer.disconnect();
      setIsVisible(false);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to={targetSection}
            smooth={true}
            duration={500}
            className="flex justify-center items-center w-12 h-12 rounded-full bg-primary text-white shadow-lg cursor-pointer hover:bg-back hover:text-white animate-bounce"
            aria-label="Scroll down"
          >
            <FaArrowDown className="text-xl" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollButton;
