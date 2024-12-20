import { EpisodiosRecientes } from "@/types/fetchTypes";
import React from "react";

interface Props {
  anime: EpisodiosRecientes;
}

export default function InfoEpisodios({ anime }: Props) {
  return (
    <>
      {anime.episodes.map((episodio) => (
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
      <span className="line-clamp-1 text-xs sm:text-sm md:text-xs lg:text-sm font-montserrat font-semibold">
        {anime.entry.title}
      </span>
    </>
  );
}
