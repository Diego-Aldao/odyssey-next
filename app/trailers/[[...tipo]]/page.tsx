import PagesNavigationMainContainer from "@/components/containers/pages-navigation/pages-navigation-main-container";
import PagesNavigationFiltros from "@/components/PagesNavigationFiltros";
import MainContentTrailers from "@/components/pageTrailers/MainContentTrailers";
import VideoCardSkeleton from "@/components/skeletons/cards/VideoCardSkeleton";
import { Metadata } from "next";
import React, { Suspense } from "react";
import imagenHero from "@/assets/pageTrailers/imagenHeroTrailers.webp";
import imagenHeroMobile from "@/assets/pageTrailers/imagenHeroTrailersMobile.webp";
import PagesNavigationHero from "@/components/PagesNavigationHero";

interface Props {
  params: Promise<{ [key: string]: string[] }>;
}
export const metadata: Metadata = {
  title: "Trailers — Odyssey",
};

export default async function PageTrailers({ params }: Props) {
  const tipo = (await params).tipo;
  return (
    <>
      <PagesNavigationHero
        imageDesktop={imagenHero}
        imageMobile={imagenHeroMobile}
        titulo="trailers"
        customImagePosition="lg:object-[50%,10px] lg:scale-105 2xl:scale-100 2xl:object-[50%,0px]"
        subtitulo={tipo ? "populares" : "recientes"}
      />
      <PagesNavigationMainContainer>
        <PagesNavigationFiltros tipo={tipo} baseDestino="trailers" />
        <div className="grid gap-8 xl:gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          <Suspense fallback={<VideoCardSkeleton cantidad={12} />}>
            <MainContentTrailers tipo={tipo} />
          </Suspense>
        </div>
      </PagesNavigationMainContainer>
    </>
  );
}
