import React from "react";
import Header from "./components/Navbar";
import Section from "./components/Section/Section";
import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/Section/AboutMeSection";
import BackToUpButton from "./components/BackToUpButton";
import ContactForm from "./components/ContactForm";
import SkillsSection from "./components/Section/SkillsSection";
import ProjectsSection from "./components/project/ProjectsSection";
import Footer from "./components/Footer";
import CookieConsentBanner from "./components/CookieConsentBanner";
import { Toaster } from "react-hot-toast";
import AISectionWrapper from "./components/Section/AISectionWrapper";
import { SECTION_IDS, TOAST_CONFIG } from "./config/constants";

const App: React.FC = () => {
  return (
    <div className="scroll-smooth">
      <Toaster
        position={TOAST_CONFIG.position}
        toastOptions={{
          success: { duration: TOAST_CONFIG.duration.success },
          error: { duration: TOAST_CONFIG.duration.error },
        }}
      />
      <div className="w-screen overflow-hidden">

        {/* Header */}
        <Header />

        {/* Secciones */}
        <HeroSection />
        <Section id={SECTION_IDS.about} bgColor="bg-white">
          <AboutMeSection />
        </Section>
        <BackToUpButton />
        <Section id={SECTION_IDS.skills} bgColor="bg-gray-100">
          <SkillsSection />
        </Section>
        <Section id={SECTION_IDS.projects} bgColor="bg-white">
          <ProjectsSection />
        </Section>
        <AISectionWrapper />
        <Section id={SECTION_IDS.contact} bgColor="bg-gray-100">
          <ContactForm />
        </Section>
        <Footer />
        <CookieConsentBanner />
      </div>
      
    </div>
  );
};

export default App;
