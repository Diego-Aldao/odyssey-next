import React from "react";
import { ultimosEpisodios } from "@/episodiosRecientes";
import CardsBaseGrid from "../cards/CardsBaseGrid";
import MainCard from "../cards/MainCard";

export default function MainContentUltimosEpisodios() {
  const capitulos = ultimosEpisodios.data.filter(
    (episodios) => !episodios.region_locked
  );
  return (
    <CardsBaseGrid>
      {capitulos.slice(0, 12).map((capitulo) => (
        <MainCard
          id={capitulo.entry.mal_id}
          key={capitulo.entry.mal_id}
          imagen={capitulo.entry.images?.webp.image_url || ""}
        >
          <>
            {capitulo.episodes.map((episodio) => (
              <span
                key={episodio.mal_id}
                className="text-[11px] sm:text-xs md:text-[11px] lg:text-xs font-medium font-montserrat flex items-center gap-2"
              >
                {episodio.title}{" "}
                {episodio.premium && (
                  <span className="icon-[solar--crown-minimalistic-bold] text-main-color drop-shadow-sm shadow-white"></span>
                )}
              </span>
            ))}
            <span className="line-clamp-1 text-xs sm:text-sm md:text-xs lg:text-sm  font-semibold font-montserrat">
              {capitulo.entry.title}
            </span>
          </>
        </MainCard>
      ))}
    </CardsBaseGrid>
  );
}
