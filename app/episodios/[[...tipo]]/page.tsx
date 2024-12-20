import CardsBaseGrid from "@/components/cards/CardsBaseGrid";
import PagesNavigationMainContainer from "@/components/containers/pages-navigation/pages-navigation-main-container";
import MainTitulo from "@/components/MainTitulo";
import ListadoEpisodios from "@/components/pageEpisodios/ListadoEpisodios";
import PagesNavigationFiltros from "@/components/PagesNavigationFiltros";
import MainCardSkeleton from "@/components/skeletons/cards/MainCardSkeleton";
import React, { Suspense } from "react";

interface Props {
  params: { [key: string]: string[] };
}

export default function PageEpisodios({ params }: Props) {
  const { tipo } = params;

  return (
    <PagesNavigationMainContainer>
      <MainTitulo titulo="episodios" />
      <section className="flex flex-col gap-8">
        <PagesNavigationFiltros tipo={tipo} baseDestino="episodios" />
        <CardsBaseGrid customStyles="lg:grid-cols-5 2xl:grid-cols-6">
          <Suspense fallback={<MainCardSkeleton cantidad={12} />}>
            <ListadoEpisodios tipo={tipo} />
          </Suspense>
        </CardsBaseGrid>
      </section>
    </PagesNavigationMainContainer>
  );
}
