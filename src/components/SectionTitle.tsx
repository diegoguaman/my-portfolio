import React from "react";

interface SectionTtitleProps {
  title: string;
}
const SectionTitle: React.FC<SectionTtitleProps> = ({title}) => {
  return <h2 className="text-4x1 font-bold">{title}</h2>
};

export default SectionTitle;
