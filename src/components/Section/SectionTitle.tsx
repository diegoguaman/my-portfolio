import React from "react";

interface SectionTtitleProps {
  title: string;
  uppercase?: string;
}
const SectionTitle: React.FC<SectionTtitleProps> = ({ title, uppercase}) => {
  return <h2 className={`text-3xl font-bold ${uppercase ?? ""}`}>{title}</h2>
};

export default SectionTitle;
