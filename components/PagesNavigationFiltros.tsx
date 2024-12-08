"use client";
import React from "react";
import { LISTADO_FILTROS_PAGES_NAVIGATION as filtros } from "@/constants";
import MainButton from "./buttons/MainButton";
import { useRouter } from "next/navigation";

interface Props {
  tipo: string[] | string;
  baseDestino: string;
}

export default function PagesNavigationFiltros({ tipo, baseDestino }: Props) {
  const router = useRouter();
  const handleClick = (nombreApi: string | null) => {
    if (nombreApi === null) {
      router.push(`/${baseDestino}`);
    } else {
      router.push(`/${baseDestino}/${nombreApi}`);
    }
  };
  return (
    <div className="filtros flex gap-4 items-center">
      {filtros.map((filtro) => (
        <MainButton
          handleClick={() => {
            handleClick(filtro.nombreApi);
          }}
          id={filtro.id}
          key={filtro.id}
          customStyles={
            (tipo === undefined && filtro.nombreApi === null) ||
            (tipo && tipo[0] === filtro.nombreApi)
              ? "bg-main-color text-main-black"
              : "bg-secondary-black text-main-white"
          }
        >
          <span className="text-xs lg:text-sm uppercase font-semibold text-inherit">
            {filtro.nombre}
          </span>
        </MainButton>
      ))}
    </div>
  );
}
