import CardsBaseGrid from "@/components/cards/CardsBaseGrid";
import InfoEpisodios from "@/components/cards/MainCard/InfoEpisodios";
import MainCard from "@/components/cards/MainCard/MainCard";
import PagesNavigationMainContainer from "@/components/containers/pages-navigation/pages-navigation-main-container";
import MainTitulo from "@/components/MainTitulo";
import PagesNavigationFiltros from "@/components/PagesNavigationFiltros";
import { BASE_URL_EPISODES } from "@/constants";
import fetchData from "@/services/fetchData";
import { FetchEpisodiosRecientes } from "@/types/fetchTypes";
import { filtroEpisodiosByRegion } from "@/utils/filtroEpisodiosByRegion";
import React from "react";

interface Props {
  params: { [key: string]: string[] };
}

export default async function PageEpisodios({ params }: Props) {
  const { tipo } = params;
  const urlTipo = tipo?.includes("popular") ? `/${tipo}` : "";
  const { data } = await fetchData<FetchEpisodiosRecientes>(
    `${BASE_URL_EPISODES}${urlTipo}`
  );
  const listadoEpisodios = filtroEpisodiosByRegion(data);
  return (
    <PagesNavigationMainContainer>
      <MainTitulo titulo="episodios" />
      <section className="flex flex-col gap-8">
        <PagesNavigationFiltros tipo={tipo} baseDestino="episodios" />
        <CardsBaseGrid customStyles="lg:grid-cols-5 2xl:grid-cols-6">
          {listadoEpisodios.map((anime) => (
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
      </section>
    </PagesNavigationMainContainer>
  );
}
