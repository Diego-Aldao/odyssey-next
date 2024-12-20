import MainButton from "@/components/buttons/MainButton";
import { LocalMainGenero } from "@/types/localTypes";
import React from "react";

interface Props {
  handleGenero: (id: number) => void;
  currentGenero: LocalMainGenero | null;
}

export const LISTADO_MAIN_GENEROS: LocalMainGenero[] = [
  {
    id: 1,
    nombre: "acción",
    icono: "icon-[game-icons--broadsword]",
  },
  {
    id: 2,
    nombre: "aventura",
    icono: "icon-[game-icons--open-treasure-chest]",
  },
  {
    id: 4,
    nombre: "comedia",
    icono: "icon-[fa6-solid--face-laugh-beam]",
  },
  {
    id: 8,
    nombre: "drama",
    icono: "icon-[game-icons--drama-masks]",
  },
  {
    id: 10,
    nombre: "fantasia",
    icono: "icon-[game-icons--spell-book]",
  },
  {
    id: 22,
    nombre: "romance",
    icono: "icon-[game-icons--opposite-hearts]",
  },
  {
    id: 30,
    nombre: "deportes",
    icono: "icon-[game-icons--soccer-ball]",
  },
  {
    id: 62,
    nombre: "isekai",
    icono: "icon-[game-icons--world]",
  },
  {
    id: 18,
    nombre: "mecha",
    icono: "icon-[game-icons--robot-golem]",
  },
  {
    id: 42,
    nombre: "seinen",
    icono: "icon-[game-icons--fragmented-sword]",
  },
  {
    id: 27,
    nombre: "shounen",
    icono: "icon-[game-icons--mine-explosion]",
  },
];

export default function ListadoGeneros({ handleGenero, currentGenero }: Props) {
  return (
    <ul className="flex gap-2 md:gap-3 items-center overflow-x-scroll xl:gap-8 pb-4 custom-scroll">
      {LISTADO_MAIN_GENEROS.map((genero) => (
        <li key={genero.id}>
          <MainButton
            handleClick={() => {
              handleGenero(genero.id);
            }}
            id={genero.id}
            customStyles={`md:py-4 md:px-6 lg:px-8 ${
              currentGenero?.id === genero.id
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
