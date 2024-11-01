import React from "react";
import { generos } from "@/data/generos";

export default function MainContentGeneros() {
  return (
    <ul className="flex flex-wrap gap-2 lg:gap-4 2xl:justify-evenly">
      {generos.map((genero) => (
        <li
          key={genero.id}
          className="px-4 py-1 border border-main-white/10 rounded-md hover:border-main-color transition-colors cursor-pointer"
        >
          <span className="uppercase text-xs lg:text-sm font-semibold">
            {genero.nombre}
          </span>
        </li>
      ))}
    </ul>
  );
}
