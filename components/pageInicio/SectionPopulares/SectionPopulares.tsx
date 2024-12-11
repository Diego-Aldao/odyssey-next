"use client";
import React from "react";
import CardsBaseGrid from "../../cards/CardsBaseGrid";
import MainCard from "../../cards/MainCard/MainCard";
import { FetchPopulares } from "@/types/fetchTypes";
import { BASE_URL_POPULARES } from "@/constants";
import useGeneros from "@/hooks/useGeneros";
import SectionSkeleton from "../../skeletons/SectionSkeleton";
import InfoScore from "../../cards/MainCard/InfoScore";
import FetchDataClient from "@/services/FetchDataClient";
import ListadoGeneros from "./ListadoGeneros";
import MainSection from "@/components/containers/page-inicio/main-section";

export default function SectionPopulares() {
  const { currentGenero, handleGenero } = useGeneros();
  const { dataFetch, loading } = FetchDataClient<FetchPopulares>(
    `${BASE_URL_POPULARES}${currentGenero ? `&genres=${currentGenero.id}` : ""}`
  );

  return (
    <MainSection
      tituloSeccion="lo mas popular"
      customStyles="xl:col-start-1 xl:row-start-1"
    >
      <div className="flex flex-col gap-12">
        <ListadoGeneros
          handleGenero={handleGenero}
          currentGenero={currentGenero}
        />
        {loading && <SectionSkeleton />}
        {dataFetch && !loading && (
          <CardsBaseGrid customStyles="xl:grid-cols-4 2xl:grid-cols-6">
            {dataFetch.data.map((anime) => (
              <MainCard
                nombre={anime.title}
                tipo="anime"
                id={anime.mal_id}
                key={anime.mal_id}
                imagen={anime.images.webp.image_url}
                destino={`/anime/${anime.mal_id}`}
              >
                <InfoScore titulo={anime.title} score={anime.score} />
              </MainCard>
            ))}
          </CardsBaseGrid>
        )}
      </div>
    </MainSection>
  );
}
