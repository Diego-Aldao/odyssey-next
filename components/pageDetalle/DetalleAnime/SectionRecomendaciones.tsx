import MainCard from "@/components/cards/MainCard/MainCard";
import MainSection from "@/components/containers/page-inicio/main-section";
import { BASE_URL_ANIME } from "@/constants";
import fetchData from "@/services/fetchData";
import { FetchAnimeRecomendations } from "@/types/fetchTypes";
import React from "react";

interface Props {
  id: string;
}

export default async function SectionRecomendaciones({ id }: Props) {
  const { data } = await fetchData<FetchAnimeRecomendations>(
    `${BASE_URL_ANIME}/${id}/recommendations`
  );
  const mainRecommendations = data.slice(0, 12);
  return (
    <MainSection
      tituloSeccion="recomendaciones"
      customStyles="row-start-4 md:row-start-5 xl:col-span-1 xl:row-start-4"
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 ">
        {mainRecommendations.map((recomendacion) => (
          <MainCard
            key={recomendacion.entry.mal_id}
            nombre={recomendacion.entry.title}
            tipo="anime"
            imagen={recomendacion.entry.images.webp.image_url}
            id={recomendacion.entry.mal_id}
            customStyles="flex-1"
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
      </div>
    </MainSection>
  );
}
