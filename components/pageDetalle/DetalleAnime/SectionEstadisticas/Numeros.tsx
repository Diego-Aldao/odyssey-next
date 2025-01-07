import { Estadistica } from "@/types/fetchTypes";
import React from "react";

interface Props {
  data: Estadistica;
  customStyles?: string;
}

export default function Numeros({ data, customStyles }: Props) {
  const dataEstadisticas = [
    { titulo: "lo completaron", valor: data.completed },
    { titulo: "lo estan viendo", valor: data.watching },
    { titulo: "lo dejaron", valor: data.dropped },
    { titulo: "lo tienen en pausa", valor: data.on_hold },
    { titulo: "tienen planeado verlo", valor: data.plan_to_watch },
    { titulo: "miembros", valor: data.total },
  ];
  return (
    <ul
      className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-2 xl:col-start-2 gap-2 xl:gap-0 xl:content-between  ${customStyles}`}
    >
      {dataEstadisticas.map((item, index) => (
        <li
          key={`${item.valor}${index}`}
          className="flex flex-col gap-1 lg:items-center"
        >
          <span className="text-xs capitalize xl:text-sm text-secondary-white">
            {item.titulo}
          </span>
          <span className="text-lg md:text-xl lg:text-2xl font-montserrat font-semibold xl:text-5xl">
            {item.valor.toLocaleString("es-AR")}
          </span>
        </li>
      ))}
    </ul>
  );
}
