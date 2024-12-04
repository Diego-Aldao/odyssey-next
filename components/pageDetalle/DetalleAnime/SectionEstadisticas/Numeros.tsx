import { Estadistica } from "@/types/fetchTypes";
import React from "react";

interface Props {
  data: Estadistica;
}

export default function Numeros({ data }: Props) {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 lg:col-start-2  gap-2 lg:gap-0">
      <li className="flex flex-col gap-1 lg:items-center">
        <span className="text-xs capitalize xl:text-sm text-secondary-white">
          lo completaron
        </span>
        <span className="text-3xl md:text-4xl font-montserrat font-semibold xl:text-5xl">
          {data.completed.toLocaleString("es-AR")}
        </span>
      </li>
      <li className="flex flex-col gap-1 lg:items-center">
        <span className="text-xs capitalize xl:text-sm text-secondary-white">
          lo estan viendo
        </span>
        <span className="text-3xl md:text-4xl font-montserrat font-semibold xl:text-5xl">
          {data.watching.toLocaleString("es-AR")}
        </span>
      </li>
      <li className="flex flex-col gap-1 lg:items-center">
        <span className="text-xs capitalize xl:text-sm text-secondary-white">
          lo dejaron
        </span>
        <span className="text-3xl md:text-4xl font-montserrat font-semibold xl:text-5xl">
          {data.dropped.toLocaleString("es-AR")}
        </span>
      </li>
      <li className="flex flex-col gap-1 lg:items-center">
        <span className="text-xs capitalize xl:text-sm text-secondary-white">
          lo tienen en pausa
        </span>
        <span className="text-3xl md:text-4xl font-montserrat font-semibold xl:text-5xl">
          {data.on_hold.toLocaleString("es-AR")}
        </span>
      </li>
      <li className="flex flex-col gap-1 lg:items-center">
        <span className="text-xs capitalize xl:text-sm text-secondary-white">
          tienen planeado verlo
        </span>
        <span className="text-3xl md:text-4xl font-montserrat font-semibold xl:text-5xl">
          {data.plan_to_watch.toLocaleString("es-AR")}
        </span>
      </li>
      <li className="flex flex-col gap-1 lg:items-center">
        <span className="text-xs capitalize xl:text-sm text-secondary-white">
          total
        </span>
        <span className="text-3xl md:text-4xl font-montserrat font-semibold xl:text-5xl">
          {data.total.toLocaleString("es-AR")}
        </span>
      </li>
    </ul>
  );
}
