import React from "react";
import { IconType } from "react-icons";
import { Link } from "react-scroll";

interface ButtonProps {
  buttonText: string;
  bgColor: string;
  href?: string;
  Icon?: IconType;
}
const ButtonLink: React.FC<ButtonProps> = ({ buttonText, bgColor, href, Icon}) => {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`px-6 py-3 ${bgColor || "bg-back"} rounded-lg text-center text-white uppercase cursor-pointer border-2 border-back hover:text-back hover:bg-white transition duration-300 ease-in-out`}
      >
        {buttonText}
      </a>
    );
  }
  return (
    <Link
      to="hero"
      smooth={true}
      duration={500}
      className={`px-6 py-3 ${
        bgColor || "bg-back"
      } rounded-lg text-center text-white uppercase cursor-pointer border-2 border-back hover:text-back hover:bg-white transition duration-300 ease-in-out`}
    >
      {Icon && <Icon size={18} />}
        {buttonText}
      
    </Link>
  );
};

export default ButtonLink;
