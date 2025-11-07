import React from "react";
import Section from "./Section";
import AISection from "./AISection";

const AISectionWrapper: React.FC = () => {
  return (
    <Section id="ia" bgColor="bg-white">
      <AISection id="ia" />
    </Section>
  );
};

export default AISectionWrapper;
