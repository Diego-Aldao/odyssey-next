import { BASE_URL_ANIME } from "@/constants";
import fetchData from "@/services/fetchData";
import { FetchAnimeEpisodesWithMedia } from "@/types/fetchTypes";
import React from "react";
import SkewCard from "@/components/cards/SkewCard";

interface Props {
  id: string;
}

export default async function ListadoEpisodiosAnimeID({ id }: Props) {
  const { data } = await fetchData<FetchAnimeEpisodesWithMedia>(
    `${BASE_URL_ANIME}/${id}/videos/episodes`
  );
  const episodios = data.reverse();
  return (
    <>
      {episodios.map((episodio) => (
        <SkewCard
          imagen={episodio.images.jpg.image_url}
          customImageStyles="object-[50%,0px] xl:object-[50%,0px]"
          titulo={episodio.title}
          subtitulo={`Episodio ${episodio.mal_id}`}
          destino={""}
          key={episodio.mal_id}
        />
      ))}
    </>
  );
}
