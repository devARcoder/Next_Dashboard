"use client";
import React, { ReactNode } from "react";

interface ButtonsProps {
  name: string;
  icon?: ReactNode;
  colors: string;
  onClick?: () => void;
}

const Buttons = ({ name, icon, colors, onClick }: ButtonsProps) => {
  return (
    <button
      onClick={onClick}
      className={`${colors} flex items-center justify-center gap-2 px-4 py-2 rounded-full transition hover:opacity-90`}
    >
      {icon}
      <span className="text-sm font-medium">{name}</span>
    </button>
  );
};

export default Buttons;