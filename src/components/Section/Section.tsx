import React from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  bgColor?: string;
  children: React.ReactNode; // Usamos children para contenido dinámico
}

const Section: React.FC<SectionProps> = ({ id, bgColor, children }) => {
  return (
    <motion.section
      id={id}
      className={`min-h-screen flex items-center justify-center ${bgColor || "bg-gray-300"}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container w-full h-full max-w-5xl px-5">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;
