import { BASE_URL_EPISODES } from "@/constants";
import fetchData from "@/services/fetchData";
import { FetchEpisodiosRecientes } from "@/types/fetchTypes";
import { filtroEpisodiosByRegion } from "@/utils/filtroEpisodiosByRegion";
import React from "react";
import MainCard from "../cards/MainCard/MainCard";
import InfoEpisodios from "../cards/MainCard/InfoEpisodios";

interface Props {
  tipo: string;
}

export default async function ListadoEpisodios({ tipo }: Props) {
  const urlTipo = tipo.includes("popular") ? `/${tipo}` : "";
  const { data } = await fetchData<FetchEpisodiosRecientes>(
    `${BASE_URL_EPISODES}${urlTipo}`
  );
  const listadoEpisodios = filtroEpisodiosByRegion(data);
  return (
    <>
      {listadoEpisodios.map((anime) => (
        <MainCard
          nombre={anime.entry.title}
          tipo="anime"
          id={anime.entry.mal_id}
          key={anime.entry.mal_id}
          imagen={anime.entry.images?.webp.image_url || ""}
          destino={`/anime/${anime.entry.mal_id}/episodios`}
        >
          <InfoEpisodios anime={anime} />
        </MainCard>
      ))}
    </>
  );
}
