import React from "react";

interface Props {
  customStyles?: string;
  children: React.ReactNode;
}

export default function GridMainContainer({ customStyles, children }: Props) {
  return (
    <div
      className={`w-full grid grid-cols-1 gap-12 gap-x-8 xl:grid-cols-[70%,1fr] ${customStyles}`}
    >
      {children}
    </div>
  );
}
