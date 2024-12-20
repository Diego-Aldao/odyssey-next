"use client";
import React from "react";
import { Select, SelectItem } from "@nextui-org/select";
import { usePathname, useRouter } from "next/navigation";

const listadoFiltros: Filtro[] = [
  {
    nombre: "Todos",
    type: null,
    value: null,
  },
  {
    nombre: "Especiales",
    type: "type",
    value: "special",
  },
  {
    nombre: "Ovas",
    type: "type",
    value: "ova",
  },
  {
    nombre: "Películas",
    type: "type",
    value: "movie",
  },
  {
    nombre: "En emisión",
    type: "filter",
    value: "airing",
  },
  {
    nombre: "Proximamente",
    type: "filter",
    value: "upcoming",
  },
  {
    nombre: "Mas populares",
    type: "filter",
    value: "bypopularity",
  },
  {
    nombre: "Mas favoritos",
    type: "filter",
    value: "favorite",
  },
];

interface Filtro {
  nombre: string;
  type: string | null;
  value: string | null;
}

interface Props {
  searchParamsFilter: string | string[] | undefined;
}

export default function Filtros({ searchParamsFilter }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (filtro: Filtro) => {
    if (filtro.value === null) {
      router.push(`${pathname}`);
    } else {
      router.push(`${pathname}?${filtro.type}=${filtro.value}`);
    }
  };

  return (
    <>
      <ul className="w-full col-span-full hidden lg:flex gap-4 justify-center">
        {listadoFiltros.map((filtro) => (
          <li
            key={filtro.nombre}
            className={`py-2 px-3 xl:px-4 cursor-pointer hover:border-main-color border rounded-xl capitalize text-sm font-medium transition-colors ${
              searchParamsFilter === filtro.value
                ? "border-main-color bg-main-color text-main-black"
                : "border-main-white/20 bg-transparent text-main-white"
            }`}
            onClick={() => {
              handleClick(filtro);
            }}
          >
            {filtro.nombre}
          </li>
        ))}
      </ul>
      <Select
        label="Filtros"
        className="max-w-[200px] col-span-full lg:hidden"
        size="sm"
        classNames={{
          base: "justify-self-end",
          trigger: "min-h-10 h-10 max-h-10",
        }}
      >
        {listadoFiltros.map((filtro) => (
          <SelectItem
            key={filtro.nombre}
            value={filtro.nombre}
            onClick={() => {
              handleClick(filtro);
            }}
          >
            {filtro.nombre}
          </SelectItem>
        ))}
      </Select>
    </>
  );
}
