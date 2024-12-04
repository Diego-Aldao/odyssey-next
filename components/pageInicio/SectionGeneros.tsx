"use client";
import React from "react";
import MainButton from "../buttons/MainButton";
import { useRouter } from "next/navigation";
import MainSection from "../containers/page-inicio/main-section";
import { LISTADO_ALL_GENEROS } from "@/constants";

export default function SectionGeneros() {
  const router = useRouter();
  const handleClick = (id: number) => {
    router.push(`/busqueda?genres=${id}`);
  };

  return (
    <MainSection
      tituloSeccion="generos"
      customStyles="xl:col-start-2 xl:row-start-1 xl:row-span-1"
      asideSection={true}
    >
      <ul className="flex flex-wrap gap-2 lg:gap-4 2xl:justify-evenly">
        {LISTADO_ALL_GENEROS.map((genero) => (
          <li key={genero.id} className="">
            <MainButton
              id={genero.id}
              handleClick={() => {
                handleClick(genero.id);
              }}
            >
              <span className="uppercase text-xs 2xl:text-sm font-semibold">
                {genero.nombre}
              </span>
            </MainButton>
          </li>
        ))}
      </ul>
    </MainSection>
  );
}
