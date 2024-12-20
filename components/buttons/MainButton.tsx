import React from "react";

interface Props {
  children: React.ReactNode;
  customStyles?: string;
  handleClick: (id: number) => void;
  id: number;
}

export default function MainButton({
  children,
  customStyles,
  handleClick,
  id,
}: Props) {
  return (
    <span
      onClick={() => {
        handleClick(id);
      }}
      className={`flex gap-1 items-center cursor-pointer px-4 py-2 border border-main-white/20 rounded-xl hover:border-main-color transition-colors ${customStyles}`}
    >
      {children}
    </span>
  );
}
