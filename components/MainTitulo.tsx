import React from "react";

interface Props {
  titulo: string;
  customStyles?: string;
}

export default function MainTitulo({ titulo, customStyles }: Props) {
  return (
    <h1
      className={`uppercase max-w-[300px] mx-auto sm:max-w-[500px] lg:max-w-[600px] xl:max-w-[800px] font-black text-3xl italic tracking-tighter [text-shadow:4px_4px_#000,0px_0px_20px_#000] lg:[text-shadow:4px_4px_#000,0px_0px_40px_#000] xl:[text-shadow:4px_4px_#000,0px_0px_20px_#000] sm:text-5xl  md:text-6xl lg:text-7xl xl:text-8xl text-center ${customStyles}`}
    >
      {titulo}
    </h1>
  );
}
