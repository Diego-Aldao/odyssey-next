"use client";
import React from "react";
import { generos } from "@/data/generos";
import MainButton from "../buttons/MainButton";
import { useRouter } from "next/navigation";

export default function MainContentGeneros() {
  const router = useRouter();
  const handleClick = (id: number) => {
    router.push(`/busqueda?genres=${id}`);
  };

  return (
    <ul className="flex flex-wrap gap-2 lg:gap-4 2xl:justify-evenly">
      {generos.map((genero) => (
        <li key={genero.id} className="">
          <MainButton
            id={genero.id}
            handleClick={() => {
              handleClick(genero.id);
            }}
          >
            <span className="uppercase text-xs lg:text-sm font-semibold">
              {genero.nombre}
            </span>
          </MainButton>
        </li>
      ))}
    </ul>
  );
}
