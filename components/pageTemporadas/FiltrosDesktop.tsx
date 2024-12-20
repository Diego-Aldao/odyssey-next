"use client";
import { LISTADO_TEMPORADAS, LISTADO_TIPOS_ANIMES } from "@/constants";
import React from "react";
import MainButton from "../buttons/MainButton";
import { LocalTemporada, LocalTipoDeAnime } from "@/types/localTypes";
import { usePathname, useRouter } from "next/navigation";
import SelectCustomTemporada from "./SelectCustomTemporada";

interface Props {
  currentTemporada: string[];
  tipoAnime: string | undefined;
}

export default function FiltrosDesktop({ currentTemporada, tipoAnime }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const handleTemporada = (temporada: LocalTemporada) => {
    if (temporada.nombreApi === null) {
      router.push(`/temporadas/${temporada.añoApi}`);
    } else {
      router.push(`/temporadas/${temporada.añoApi}/${temporada.nombreApi}`);
    }
  };

  const handleTipo = (tipo: LocalTipoDeAnime) => {
    if (tipo.nombreApi === null) {
      router.push(`${pathname}`, { scroll: false });
    } else {
      router.push(`${pathname}?filter=${tipo.nombreApi}`, { scroll: false });
    }
  };
  return (
    <div className="hidden md:flex flex-col gap-4">
      <ul className="flex gap-2 items-center">
        <li className="flex gap-2 items-center flex-wrap">
          {LISTADO_TEMPORADAS.map((temporada, i) => (
            <MainButton
              key={temporada.nombre}
              id={i}
              handleClick={() => {
                handleTemporada(temporada);
              }}
              customStyles={
                (currentTemporada[1] === temporada.nombreApi &&
                  currentTemporada[0] == temporada.añoApi) ||
                (currentTemporada[0] == temporada.añoApi &&
                  temporada.nombreApi === null)
                  ? "bg-main-color text-main-black"
                  : "bg-secondary-black text-main-white"
              }
            >
              <span className="uppercase text-xs xl:text-sm font-semibold font-montserrat text-inherit">
                {temporada.nombre}
              </span>
            </MainButton>
          ))}
        </li>

        <SelectCustomTemporada />
      </ul>
      <ul className="flex gap-2 items-center">
        {LISTADO_TIPOS_ANIMES.map((tipo) => (
          <li key={tipo.id}>
            <MainButton
              handleClick={() => {
                handleTipo(tipo);
              }}
              id={tipo.id}
              customStyles={
                tipoAnime === tipo.nombreApi
                  ? "bg-main-color text-main-black"
                  : "bg-secondary-black text-main-white"
              }
            >
              <span className="uppercase text-xs xl:text-sm font-semibold font-montserrat text-inherit">
                {tipo.nombre}
              </span>
            </MainButton>
          </li>
        ))}
      </ul>
    </div>
  );
}
