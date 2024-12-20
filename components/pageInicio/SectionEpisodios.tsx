import React from "react";
import MainCard from "../cards/MainCard/MainCard";
import fetchData from "@/services/fetchData";
import { FetchEpisodiosRecientes } from "@/types/fetchTypes";
import { filtroEpisodiosByRegion } from "@/utils/filtroEpisodiosByRegion";
import { BASE_URL_EPISODES } from "@/constants";
import InfoEpisodios from "../cards/MainCard/InfoEpisodios";

export default async function SectionEpisodios() {
  const { data } = await fetchData<FetchEpisodiosRecientes>(BASE_URL_EPISODES);
  const listadoAnimes = filtroEpisodiosByRegion(data).slice(0, 12);

  return (
    <>
      {listadoAnimes.map((anime) => (
        <MainCard
          nombre={anime.entry.title}
          tipo="anime"
          id={anime.entry.mal_id}
          key={anime.entry.mal_id}
          imagen={anime.entry.images?.webp.image_url || ""}
          destino={`/anime/${anime.entry.mal_id}`}
        >
          <InfoEpisodios anime={anime} />
        </MainCard>
      ))}
    </>
  );
}
