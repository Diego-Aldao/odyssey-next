"use client";
import React from "react";
import CardsBaseGrid from "../../cards/CardsBaseGrid";
import MainCard from "../../cards/MainCard/MainCard";
import { FetchPopulares } from "@/types/fetchTypes";
import { BASE_URL_POPULARES } from "@/constants";
import useGeneros from "@/hooks/useGeneros";
import InfoScore from "../../cards/MainCard/InfoScore";
import ListadoGeneros from "./ListadoGeneros";
import MainSection from "@/components/containers/page-inicio/main-section";
import useSWR from "swr";
import fetchData from "@/services/fetchData";
import MainCardSkeleton from "@/components/skeletons/cards/MainCardSkeleton";

export default function SectionPopulares() {
  const { currentGenero, handleGenero } = useGeneros();

  const url = `${BASE_URL_POPULARES}${
    currentGenero ? `&genres=${currentGenero.id}` : ""
  }`;

  const { data, isLoading } = useSWR(url, fetchData<FetchPopulares>);

  return (
    <MainSection tituloSeccion="lo mas popular" customStyles="xl:col-start-1">
      <div className="flex flex-col gap-12">
        <ListadoGeneros
          handleGenero={handleGenero}
          currentGenero={currentGenero}
        />
        <CardsBaseGrid customStyles="xl:grid-cols-4 2xl:grid-cols-6">
          {isLoading && <MainCardSkeleton cantidad={12} />}
          {data && (
            <>
              {data.data.map((anime, i) => (
                <MainCard
                  nombre={anime.title}
                  tipo="anime"
                  id={anime.mal_id}
                  key={`${anime.mal_id}${i}`}
                  imagen={anime.images.webp.image_url}
                  destino={`/anime/${anime.mal_id}`}
                >
                  <InfoScore titulo={anime.title} score={anime.score} />
                </MainCard>
              ))}
            </>
          )}
        </CardsBaseGrid>
      </div>
    </MainSection>
  );
}
