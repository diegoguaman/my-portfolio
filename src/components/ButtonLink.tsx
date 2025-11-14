import React from "react";
import { IconType } from "react-icons";
import { Link } from "react-scroll";

interface ButtonProps {
  buttonText: string;
  bgColor: string;
  href?: string;
  Icon?: IconType;
  disabled?: boolean;
}
const ButtonLink: React.FC<ButtonProps> = ({
  buttonText,
  bgColor,
  href,
  Icon,
  disabled = false,
}) => {
  const baseClasses = `px-6 py-3 bg-${bgColor} rounded-lg text-center text-white uppercase cursor-pointer bg-back border-2 border-back hover:text-back hover:bg-white transition duration-300 ease-in-out`;
  const disabledClasses = disabled ? "opacity-50 pointer-events-none" : "";
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${disabledClasses}`}
        aria-disabled={disabled}
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
      className={`${baseClasses} ${disabledClasses}`}
    >
      {Icon && <Icon size={18} />}
      {buttonText}
    </Link>
  );
};

export default ButtonLink;
