import React from "react";
import Header from "./components/Navbar";
import Section from "./components/Section/Section";
import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/Section/AboutMeSection";
import BackToUpButton from "./components/BackToUpButton";
import ContactForm from "./components/ContactForm";
import SkillsSection from "./components/Section/SkillsSection";

const App: React.FC = () => {
  return (
    <div className="scroll-smooth">
      <div className="w-screen overflow-hidden">

        {/* Header */}
        <Header />

        {/* Secciones */}
        <HeroSection />
        <Section id="about" bgColor="bg-white">
          <AboutMeSection />
        </Section>
        <BackToUpButton />
        <Section id="skills" bgColor="bg-gray-100">
          <SkillsSection />
        </Section>
        <Section id="contact" bgColor="bg-gray-100">
          <ContactForm />
        </Section>
      </div>
      
    </div>
  );
};

export default App;
