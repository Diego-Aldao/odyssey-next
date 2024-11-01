import React from "react";

interface Props {
  children: React.ReactNode;
  customStyles?: string;
  handleClick?: () => void;
}

export default function MainButton({
  children,
  customStyles,
  handleClick,
}: Props) {
  return (
    <span
      onClick={handleClick}
      className={`flex gap-1 items-center cursor-pointer px-4 py-2 border border-main-white/20 rounded-xl hover:border-main-color transition-colors ${customStyles}`}
    >
      {children}
    </span>
  );
}
