import React from "react";
import CardsBaseGrid from "../cards/CardsBaseGrid";
import MainCard from "../cards/MainCard/MainCard";
import fetchData from "@/services/fetchData";
import { FetchTemporadas } from "@/types/fetchTypes";
import InfoScore from "../cards/MainCard/InfoScore";
import { BASE_URL_TEMPORADAS } from "@/constants";
import MainSection from "../containers/page-inicio/main-section";

export default async function SectionTemporadas() {
  const data = await fetchData<FetchTemporadas>(`${BASE_URL_TEMPORADAS}/now`);
  const ultimaTemporada = data.data.slice(0, 12);
  return (
    <MainSection
      tituloSeccion="anime de temporada"
      customStyles=" xl:col-start-1"
      nombreDestino="ver temporadas"
      destino="/temporadas"
    >
      <CardsBaseGrid customStyles="xl:grid-cols-4 2xl:grid-cols-6">
        {ultimaTemporada.map((anime) => (
          <MainCard
            nombre={anime.title}
            tipo="anime"
            id={anime.mal_id}
            key={anime.mal_id}
            imagen={anime.images.webp.image_url}
          >
            <InfoScore titulo={anime.title} score={anime.score || 0} />
          </MainCard>
        ))}
      </CardsBaseGrid>
    </MainSection>
  );
}
