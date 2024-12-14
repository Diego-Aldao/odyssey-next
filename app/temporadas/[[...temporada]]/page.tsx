import React from "react";
import MainContentPageTemporadas from "@/components/pageTemporadas/MainContentPageTemporadas";
import MainTitulo from "@/components/MainTitulo";
import HeroTemporadas from "@/components/pageTemporadas/HeroTemporadas";
import PagesNavigationMainContainer from "@/components/containers/pages-navigation/pages-navigation-main-container";
import FiltrosDesktop from "@/components/pageTemporadas/FiltrosDesktop";
import FiltrosMobile from "@/components/pageTemporadas/FiltrosMobile";
import CardsBaseGrid from "@/components/cards/CardsBaseGrid";

interface Props {
  params: { [key: string]: string[] };
  searchParams: { [key: string]: string | undefined };
}

export default function Temporadas({ params, searchParams }: Props) {
  const { temporada } = params;

  return (
    <>
      <HeroTemporadas temporada={temporada} />
      <PagesNavigationMainContainer>
        <MainTitulo titulo="anime de temporada" />
        <header className="flex flex-col gap-8 md:pt-4 lg:pt-8 w-full">
          <FiltrosDesktop
            currentTemporada={temporada}
            tipoAnime={searchParams?.filter}
          />
          <FiltrosMobile />
        </header>
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
