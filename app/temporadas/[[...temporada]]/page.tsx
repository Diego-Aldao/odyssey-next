import React from "react";
import MainContentPageTemporadas from "@/components/pageTemporadas/MainContentPageTemporadas";
import HeroTemporadas from "@/components/pageTemporadas/HeroTemporadas";
import PagesNavigationMainContainer from "@/components/containers/pages-navigation/pages-navigation-main-container";
import FiltrosDesktop from "@/components/pageTemporadas/FiltrosDesktop";
import FiltrosMobile from "@/components/pageTemporadas/FiltrosMobile";
import CardsBaseGrid from "@/components/cards/CardsBaseGrid";
import { Metadata } from "next";

interface Props {
  params: { [key: string]: string[] };
  searchParams: { [key: string]: string | undefined };
}

export const metadata: Metadata = {
  title: "Temporadas — Odyssey",
};

export default function Temporadas({ params, searchParams }: Props) {
  const { temporada } = params;

  return (
    <>
      <HeroTemporadas temporada={temporada} />
      <PagesNavigationMainContainer>
        <FiltrosDesktop
          currentTemporada={temporada}
          tipoAnime={searchParams?.filter}
        />
        <FiltrosMobile />
        <CardsBaseGrid>
          <MainContentPageTemporadas
            currentTemporada={temporada}
            searchParams={searchParams}
          />
        </CardsBaseGrid>
      </PagesNavigationMainContainer>
    </>
  );
}
