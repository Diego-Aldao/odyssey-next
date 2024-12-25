import CardsBaseGrid from "@/components/cards/CardsBaseGrid";
import PagesNavigationMainContainer from "@/components/containers/pages-navigation/pages-navigation-main-container";
import ListadoEpisodios from "@/components/pageEpisodios/ListadoEpisodios";
import PagesNavigationFiltros from "@/components/PagesNavigationFiltros";
import PagesNavigationHero from "@/components/PagesNavigationHero";
import MainCardSkeleton from "@/components/skeletons/cards/MainCardSkeleton";
import React, { Suspense } from "react";
import imageHero from "@/assets/pageEpisodios/imageHeroEpisodios.webp";
import imageHeroMobile from "@/assets/pageEpisodios/imageHeroEpisodiosMobile.webp";
import { Metadata } from "next";

interface Props {
  params: Promise<{ [key: string]: string[] }>;
}

export const metadata: Metadata = {
  title: "Episodios — Odyssey",
};

export default async function PageEpisodios({ params }: Props) {
  const tipo = (await params).tipo;

  return (
    <>
      <PagesNavigationHero
        imageDesktop={imageHero}
        imageMobile={imageHeroMobile}
        titulo="episodios"
        subtitulo={tipo ? "populares" : "recientes"}
      />
      <PagesNavigationMainContainer>
        <PagesNavigationFiltros tipo={tipo} baseDestino="episodios" />
        <section className="flex flex-col gap-8">
          <CardsBaseGrid customStyles="lg:grid-cols-5 2xl:grid-cols-6">
            <Suspense fallback={<MainCardSkeleton cantidad={12} />}>
              <ListadoEpisodios tipo={tipo} />
            </Suspense>
          </CardsBaseGrid>
        </section>
      </PagesNavigationMainContainer>
    </>
  );
}
