import MainButton from "@/components/buttons/MainButton";
import { LISTADO_MAIN_GENEROS } from "@/hooks/useGeneros";
import { LocalMainGenero } from "@/types/localTypes";
import React from "react";

interface Props {
  handleGenero: (id: number) => void;
  currentGenero: LocalMainGenero | null;
}

export default function ListadoGeneros({ handleGenero, currentGenero }: Props) {
  return (
    <ul className="flex gap-2 md:gap-3 items-center overflow-x-scroll xl:gap-8 pb-4">
      {LISTADO_MAIN_GENEROS.map((genero) => (
        <li key={genero.id}>
          <MainButton
            handleClick={() => {
              handleGenero(genero.id);
            }}
            id={genero.id}
            customStyles={`md:py-4 md:px-6 lg:px-8 ${
              currentGenero === genero
                ? "border-main-black bg-main-color text-main-black"
                : "border-main-white/20 bg-secondary-black/50 text-main-white"
            }`}
          >
            <span
              className={`${genero.icono} lg:h-5 lg:w-5 text-inherit`}
            ></span>
            <span className="capitalize text-xs md:text-sm lg:text-base font-montserrat font-semibold text-inherit">
              {genero.nombre}
            </span>
          </MainButton>
        </li>
      ))}
    </ul>
  );
}
