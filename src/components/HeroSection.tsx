import React from "react";
import { motion } from "framer-motion";

const roles = ["Full Stack Developer", "Frontend Specialist", "Backend Enthusiast"];

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="w-screen h-screen bg-fixed bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('https://res.cloudinary.com/dgtbm9skf/image/upload/v1735128334/fondo_tffm9a.jpg')" }}
    >
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4">Soy Diego Guaman</h1>
        <motion.div
          className="text-2xl font-medium"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{
            duration: 0.8,
            yoyo: Infinity,
            ease: "easeInOut",
          }}
        >
          <RoleSlider roles={roles} />
        </motion.div>
      </div>
    </section>
  );
};

const RoleSlider: React.FC<{ roles: string[] }> = ({ roles }) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Cambiar cada 3 segundos

    return () => clearInterval(interval);
  }, [roles]);

  return (
    <motion.div
      className="overflow-hidden h-10"
      initial={{ y: "-100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      key={index} // Key para reiniciar animación en cada cambio
    >
      <p>{roles[index]}</p>
    </motion.div>
  );
};

export default HeroSection;
