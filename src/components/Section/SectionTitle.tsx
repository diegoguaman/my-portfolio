import React from "react";

interface SectionTtitleProps {
  title: string;
}
const SectionTitle: React.FC<SectionTtitleProps> = ({title}) => {
  return <h2 className="text-3xl font-bold uppercase">{title}</h2>
};

export default SectionTitle;
