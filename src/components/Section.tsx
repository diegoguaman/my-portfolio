import React from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  title: string;
  content: string;
  bgColor?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, content, bgColor }) => {
  return (
    <motion.section
      id={id}
      className={`h-screen flex items-center justify-center ${bgColor || "bg-gray-300"}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="mt-4 text-lg text-gray-600">{content}</p>
      </div>
    </motion.section>
  );
};

export default Section;
