import RandomAnime from "@/components/pageInicio/RandomAnime";
import SectionPopulares from "@/components/pageInicio/SectionPopulares/SectionPopulares";
import HeroSection from "@/components/pageInicio/SectionHero/HeroSection";
import SectionTrailers from "@/components/pageInicio/SectionTrailers";
import SectionEpisodios from "@/components/pageInicio/SectionEpisodios";
import SectionTemporadas from "@/components/pageInicio/SectionTemporadas";
import SectionTops from "@/components/pageInicio/SectionTops";
import SectionGeneros from "@/components/pageInicio/SectionGeneros";
import InicioMainContainer from "@/components/containers/page-inicio/inicio-main-container";
import GridMainContainer from "@/components/containers/grid-main-container";
import { Suspense } from "react";
import MainCardSkeleton from "@/components/skeletons/cards/MainCardSkeleton";
import CardsBaseGrid from "@/components/cards/CardsBaseGrid";
import MainSection from "@/components/containers/page-inicio/main-section";
import VideoCardSkeleton from "@/components/skeletons/cards/VideoCardSkeleton";
import ImageHero from "@/components/pageInicio/SectionHero/ImageHero";

export default function Inicio() {
  return (
    <>
      <ImageHero />
      <InicioMainContainer>
        <RandomAnime />
        <HeroSection />
        <GridMainContainer>
          <SectionPopulares />
          <MainSection
            tituloSeccion="ultimos trailers"
            customStyles=" xl:col-start-1 xl:col-span-2"
            nombreDestino="ver mas trailers"
            destino="/trailers"
          >
            <div className="grid gap-8 lg:gap-4 sm:grid-cols-3 lg:grid-cols-4">
              <Suspense fallback={<VideoCardSkeleton cantidad={12} />}>
                <SectionTrailers />
              </Suspense>
            </div>
          </MainSection>
          <MainSection
            tituloSeccion="episodios recientes"
            customStyles=" xl:col-start-1"
            nombreDestino="ver mas episodios"
            destino="/temporadas"
          >
            <CardsBaseGrid customStyles="xl:grid-cols-4 2xl:grid-cols-6">
              <Suspense fallback={<MainCardSkeleton cantidad={12} />}>
                <SectionEpisodios />
              </Suspense>
            </CardsBaseGrid>
          </MainSection>
          <MainSection
            tituloSeccion="episodios recientes"
            customStyles=" xl:col-start-1"
            nombreDestino="ver mas episodios"
            destino="/temporadas"
          >
            <CardsBaseGrid customStyles="xl:grid-cols-4 2xl:grid-cols-6">
              <Suspense fallback={<MainCardSkeleton cantidad={12} />}>
                <SectionTemporadas />
              </Suspense>
            </CardsBaseGrid>
          </MainSection>
          <MainSection
            tituloSeccion="top historico"
            customStyles="xl:col-start-2 xl:row-start-3 xl:row-span-2"
            nombreDestino="ver mas tops"
            destino="/tops"
            asideSection={true}
          >
            <div className="w-full px-1 grid gap-4 sm:grid-cols-2 lg:gap-8 xl:grid-cols-1">
              <SectionTops />
            </div>
          </MainSection>

          <SectionGeneros />
        </GridMainContainer>
      </InicioMainContainer>
    </>
  );
}
