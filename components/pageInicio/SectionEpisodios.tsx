import React from "react";
import CardsBaseGrid from "../cards/CardsBaseGrid";
import MainCard from "../cards/MainCard/MainCard";
import fetchData from "@/services/fetchData";
import { FetchEpisodiosRecientes } from "@/types/fetchTypes";
import { filtroEpisodiosByRegion } from "@/utils/filtroEpisodiosByRegion";
import { BASE_URL_EPISODES } from "@/constants";
import InfoEpisodios from "../cards/MainCard/InfoEpisodios";
import MainSection from "../containers/page-inicio/main-section";

export default async function SectionEpisodios() {
  const data = await fetchData<FetchEpisodiosRecientes>(BASE_URL_EPISODES);
  const listadoAnimes = filtroEpisodiosByRegion(data.data).slice(0, 12);

  return (
    <MainSection
      tituloSeccion="capitulos recientes"
      customStyles=" xl:col-start-1"
      nombreDestino="ver mas episodios"
      destino="/temporadas"
    >
      <CardsBaseGrid customStyles="xl:grid-cols-4 2xl:grid-cols-6">
        {listadoAnimes.map((anime) => (
          <MainCard
            nombre={anime.entry.title}
            tipo="anime"
            id={anime.entry.mal_id}
            key={anime.entry.mal_id}
            imagen={anime.entry.images?.webp.image_url || ""}
          >
            <InfoEpisodios anime={anime} />
          </MainCard>
        ))}
      </CardsBaseGrid>
    </MainSection>
  );
}
