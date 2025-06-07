import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollButton from "./ScrollButton";

const roles = [ "React", "JavaScript", "Node", "Docker", "AWS", "TypeScript", "Tailwind", "Next", "MongoDB", "PostgreSQL"];
const textClass = "text-3xl font-light font-body tracking-widest";

const HeroSection: React.FC = () => {
  const backgroundRef = useRef<HTMLDivElement | null>(null);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrollPosition = window.scrollY;
        backgroundRef.current.style.transform = `translateY(${
          scrollPosition * 0.5
        }px)`;
      }
    };

    const handleScrollOptimized = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", handleScrollOptimized);
    return () => window.removeEventListener("scroll", handleScrollOptimized);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Background with parallax */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dgtbm9skf/image/upload/v1735321170/fondo-creating_pn285w.jpg')",
        }}
      ></div>

      {/* Foreground content */}
      <div className="relative text-white flex flex-col items-start px-8">
        <h1 className="text-6xl font-bold font-title tracking-tight mb-4">
          Hola! Soy Diego.
        </h1>
        <p className={textClass}>Creative FullStack Developer</p>

        <div className="flex items-center mt-4">
          <span className={textClass}>Especializado en</span>
          <motion.div
            className="ml-2 overflow-hidden h-8 flex items-center"
            initial={{ y: "20%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <RoleSlider roles={roles} />
          </motion.div>
        </div>
        {/* Botón debajo del texto */}
        <div className="mt-14 h-16">
          <ScrollButton targetSection="about" />
        </div>
      </div>
    </section>
  );
};

interface RoleSliderProps {
  roles: string[];
}

const RoleSlider: React.FC<RoleSliderProps> = ({ roles }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Changes every 3 seconds

    return () => clearInterval(interval);
  }, [roles.length]);

  const variants = {
    enter: {
      y: "50%",
      opacity: 0,
    },
    center: {
      y: "0%",
      opacity: 1,
    },
    exit: {
      y: "-50%",
      opacity: 0,
    },
  };

  return (
    <div className="overflow-hidden h-8 flex items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={roles[index]}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute"
        >
          <p className="text-3xl font-bold font-body">{roles[index]}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;
