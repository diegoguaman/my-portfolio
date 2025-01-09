import React from "react";
import Header from "./components/Navbar";
import Section from "./components/Section/Section";
import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/Section/AboutMeSection";

const App: React.FC = () => {
  return (
    <div className="scroll-smooth">
      <div className="w-screen overflow-hidden">

        {/* Header */}
        <Header />

        {/* Secciones */}
        <HeroSection />
        <Section id="about" bgColor="bg-gray-100">
          <AboutMeSection />
        </Section>
      </div>
      
    </div>
  );
};

export default App;
