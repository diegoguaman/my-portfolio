import React from "react";
import { Link } from "react-scroll";

interface ButtonProps {
  buttonText: string;
  bgColor: string;
}
const ButtonLink: React.FC<ButtonProps> = ({ buttonText, bgColor }) => {
  return (
    <Link
      to="hero"
      smooth={true}
      duration={500}
      className={`px-6 py-3 ${
        bgColor || "bg-back"
      } rounded-lg text-center text-white uppercase cursor-pointer border-2 border-back hover:text-back hover:bg-white transition duration-300 ease-in-out`}
    >
        {buttonText}
      
    </Link>
  );
};

export default ButtonLink;
