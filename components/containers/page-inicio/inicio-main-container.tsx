import React from "react";

interface Props {
  customStyles?: string;
  children: React.ReactNode;
}

export default function InicioMainContainer({ customStyles, children }: Props) {
  return (
    <main
      className={`flex flex-col gap-12 overflow-hidden relative px-2 pt-16 md:pt-20 lg:pt-[96px] md:px-8 lg:px-10 max-w-[1903px] mx-auto ${customStyles}`}
    >
      {children}
    </main>
  );
}
