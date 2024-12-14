import MainCard from "@/components/cards/MainCard/MainCard";
import { BASE_URL_ANIME } from "@/constants";
import fetchData from "@/services/fetchData";
import { FetchAnimeRecomendations } from "@/types/fetchTypes";
import React from "react";

interface Props {
  id: string;
}

export default async function ListadoRecomendaciones({ id }: Props) {
  const { data } = await fetchData<FetchAnimeRecomendations>(
    `${BASE_URL_ANIME}/${id}/recommendations`
  );
  const mainRecommendations = data.slice(0, 12);
  return (
    <>
      {" "}
      {mainRecommendations.map((recomendacion) => (
        <MainCard
          key={recomendacion.entry.mal_id}
          nombre={recomendacion.entry.title}
          tipo="anime"
          imagen={recomendacion.entry.images.webp.image_url}
          id={recomendacion.entry.mal_id}
          customStyles="flex-1"
          destino={`/anime/${recomendacion.entry.mal_id}`}
        >
          <span className="text-xs font-medium line-clamp-1">
            {recomendacion.votes >= 2
              ? `${recomendacion.votes} votos`
              : `${recomendacion.votes} voto`}
          </span>
          <span className="line-clamp-1 text-xs sm:text-sm md:text-xs lg:text-sm font-montserrat font-semibold">
            {recomendacion.entry.title}
          </span>
        </MainCard>
      ))}
    </>
  );
}
