import React from "react";

interface Props {
  id: number;
  nombre: string;
  tipo: string;
}

interface PropsButton {
  icono: string;
}

function ButtonUserInteraction({ icono }: PropsButton) {
  return (
    <button className="add p-1 sm:p-[6px] md:p-1 xl:p-[6px] rounded-full bg-main-black/20 backdrop-blur-xl flex items-center justify-center group/button border border-transparent hover:border-main-color hover:bg-main-black transition-colors">
      <span
        className={`${icono} h-5 w-5 xl:h-6 xl:w-6 group-hover/button:text-main-color transition-colors`}
      ></span>
    </button>
  );
}

export default function UserInteraction({ nombre, id, tipo }: Props) {
  return (
    <header className="absolute z-[2] w-full top-0 left-0 flex gap-2 items-center justify-end p-2">
      <ButtonUserInteraction icono="icon-[solar--add-circle-broken]" />
      <ButtonUserInteraction icono="icon-[solar--heart-angle-broken]" />
    </header>
  );
}
