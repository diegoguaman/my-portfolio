import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = ["React", "Node", "Tailwind"];
const textClass = "text-3xl font-ligth font-body tracking-widest";

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="w-screen h-screen bg-fixed bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('https://res.cloudinary.com/dgtbm9skf/image/upload/v1735321170/fondo-creating_pn285w.jpg')" }}
    >
      <div className="text-center text-white flex flex-col items-start justify-start">
        <h1 className="text-6xl font-bold font-title tracking-tight mb-4">Hi! I'm Diego.</h1>
        <p className={textClass}>Creative FullStack Developer</p>
            
        <div className="flex">
          <span className={textClass}>Specialized in</span>
          <motion.div
            className="text-3xl flex items-center"
            initial={{ y: "20%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.8,
              yoyo: Infinity,
              ease: "easeInOut",
            }}
          >
            
            <RoleSlider  roles={roles} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface RoleSliderProps {
  roles: string[];
}
const RoleSlider: React.FC<RoleSliderProps> = ({ roles }) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Cambiar cada 3 segundos

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
          key={roles[index]} // Key para reiniciar animación en cada cambio
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute"
        >
          <p className="font-bold font-body ms-2">{roles[index]}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;
