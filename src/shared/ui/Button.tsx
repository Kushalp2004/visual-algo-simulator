import React from "react";
import type { ReactNode } from "react"; // Added 'type' here

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 rounded-md font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;