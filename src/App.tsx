import React from "react";
import Header from "./components/Navbar";
import Section from "./components/Section";
import HeroSection from "./components/HeroSection";
import BackToUpButton from "./components/BackToUpButton";

const App: React.FC = () => {
  return (
    <div className="scroll-smooth">
      <div className="max-w-4xl mx-auto px-4"></div>
      {/* Header */}
      <Header />

      {/* Secciones */}
      <HeroSection />
      <Section
        id="about"
        title="Sobre mí"
        content="Contenido de la sección 'Sobre mí'"
        bgColor="bg-gray-100"
      />
      <Section
        id="skills"
        title="Habilidades"
        content="Contenido de la sección 'Habilidades'"
      />
      <BackToUpButton />
      <Section
        id="projects"
        title="Proyectos"
        content="Contenido de la sección 'Proyectos'"
        bgColor="bg-gray-100"
      />
      <Section
        id="contact"
        title="Contacto"
        content="Contenido de la sección 'Contacto'"
      />
    </div>
  );
};

export default App;
