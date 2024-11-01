import React from "react";
import { ultimaTemporada } from "@/data/ultimaTemporada";
import CardsBaseGrid from "../cards/CardsBaseGrid";
import MainCard from "../cards/MainCard";

export default function MainContentTemporadas() {
  return (
    <CardsBaseGrid>
      {ultimaTemporada.data.slice(0, 12).map((anime) => (
        <MainCard
          id={anime.mal_id}
          key={anime.mal_id}
          imagen={anime.images.webp.image_url}
        >
          <span className="line-clamp-1 text-xs sm:text-sm md:text-xs lg:text-sm font-montserrat font-semibold">
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
  );
}
