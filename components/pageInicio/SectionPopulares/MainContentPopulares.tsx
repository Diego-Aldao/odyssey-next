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

export default function MainContentPopulares() {
  const { currentGenero, handleGenero } = useGeneros();
  const { dataFetch, loading } = FetchDataClient<FetchPopulares>(
    `${BASE_URL_POPULARES}${currentGenero ? `&genres=${currentGenero.id}` : ""}`
  );

  return (
    <div className="flex flex-col gap-12">
      <ListadoGeneros
        handleGenero={handleGenero}
        currentGenero={currentGenero}
      />
      {loading && <SectionSkeleton />}
      {dataFetch && !loading && (
        <CardsBaseGrid>
          {dataFetch.data.map((anime) => (
            <MainCard
              id={anime.mal_id}
              key={anime.mal_id}
              imagen={anime.images.webp.image_url}
            >
              <InfoScore titulo={anime.title} score={anime.score} />
            </MainCard>
          ))}
        </CardsBaseGrid>
      )}
    </div>
  );
}
