"use client";
import React, { useState } from "react";
import CardsBaseGrid from "../cards/CardsBaseGrid";
import { populares } from "@/data/populares";
import MainCard from "../cards/MainCard";
import { LocalMainGenero } from "@/types/localTypes";
import { LISTADO_MAIN_GENEROS } from "@/constants";
import MainButton from "../buttons/MainButton";

export default function MainContentPopulares() {
  const [currentGenero, setCurrentGenero] = useState<LocalMainGenero | null>(
    null
  );

  const handleGenero = (id: number) => {
    const generoClickeado = LISTADO_MAIN_GENEROS.filter(
      (genero) => genero.id === id
    )[0];
    setCurrentGenero(generoClickeado);
  };

  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-8">
        <ul className="flex gap-2 md:gap-3 items-center overflow-x-scroll xl:gap-8 pb-2">
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
        <div className="self-end rounded-full bg-tertiary-black flex items-center justify-center overflow-hidden">
          <span className="flex items-center justify-center px-4 md:px-6 py-1">
            <span className="icon-[lets-icons--sort-list-alt-light] md:h-5 md:w-5"></span>
          </span>
          <span className="h-4 w-[1px] bg-main-black"></span>
          <span className="flex items-center justify-center px-4 md:px-6 py-1">
            <span className="icon-[lets-icons--filter-alt] md:h-5 md:w-5"></span>
          </span>
        </div>
      </header>
      <CardsBaseGrid>
        {populares.data.map((anime) => (
          <MainCard
            id={anime.mal_id}
            key={anime.mal_id}
            imagen={anime.images.webp.image_url}
          >
            <span className="line-clamp-1 text-xs sm:text-sm md:text-xs lg:text-sm font-montserrat font-medium">
              {anime.title}
            </span>
            <div className="score flex items-center gap-1">
              <span className="font-montserrat font-bold text-xs ">
                {anime.score}
              </span>
              <span className="icon-[solar--star-bold] h-3 w-3 xl:h-4 xl:w-4 text-main-color"></span>
            </div>
          </MainCard>
        ))}
      </CardsBaseGrid>
    </div>
  );
}
