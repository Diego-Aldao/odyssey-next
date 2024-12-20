import React from "react";
import MainCard from "../cards/MainCard/MainCard";
import fetchData from "@/services/fetchData";
import { FetchTemporadas } from "@/types/fetchTypes";
import InfoScore from "../cards/MainCard/InfoScore";
import { BASE_URL_TEMPORADAS } from "@/constants";

export default async function SectionTemporadas() {
  const data = await fetchData<FetchTemporadas>(`${BASE_URL_TEMPORADAS}/now`);
  const ultimaTemporada = data.data.slice(0, 12);
  return (
    <>
      {ultimaTemporada.map((anime) => (
        <MainCard
          nombre={anime.title}
          tipo="anime"
          id={anime.mal_id}
          key={anime.mal_id}
          imagen={anime.images.webp.image_url}
          destino={`/anime/${anime.mal_id}`}
        >
          <InfoScore titulo={anime.title} score={anime.score || 0} />
        </MainCard>
      ))}
    </>
  );
}
