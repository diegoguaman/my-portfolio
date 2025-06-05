import React from "react";
import Header from "./components/Navbar";
import Section from "./components/Section/Section";
import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/Section/AboutMeSection";
import BackToUpButton from "./components/BackToUpButton";
import ContactForm from "./components/ContactForm";
import SkillsSection from "./components/Section/SkillsSection";
import ProjectsSection from "./components/project/ProjectsSection";

const App: React.FC = () => {
  return (
    <div className="scroll-smooth">
      <div className="w-screen overflow-hidden">

        {/* Header */}
        <Header />

        {/* Secciones */}
        <HeroSection />
        <Section id="acerca de" bgColor="bg-white">
          <AboutMeSection />
        </Section>
        <BackToUpButton />
        <Section id="tecnologías" bgColor="bg-gray-100">
          <SkillsSection />
        </Section>
        <Section id="proyectos" bgColor="bg-white">
          <ProjectsSection />
        </Section>
        <Section id="contacto" bgColor="bg-gray-100">
          <ContactForm />
        </Section>
      </div>
      
    </div>
  );
};

export default App;
