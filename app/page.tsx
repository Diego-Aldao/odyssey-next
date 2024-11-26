import HeroSection from "@/components/containers/page-inicio/hero-section";
import MainSection from "@/components/containers/page-inicio/main-section";
import MainContentUltimosEpisodios from "@/components/pageInicio/MainContentUltimosEpisodios";
import MainContentTemporadas from "@/components/pageInicio/MainContentTemporadas";
import MainContentTops from "@/components/pageInicio/MainContentTops";
import MainContentPopulares from "@/components/pageInicio/SectionPopulares/MainContentPopulares";
import MainContentGeneros from "@/components/pageInicio/MainContentGeneros";
import MainContentHero from "@/components/pageInicio/MainContentHero";
import RandomAnime from "@/components/pageInicio/RandomAnime";
import MainContentTrailers from "@/components/pageInicio/MainContentTrailers";

export default function Inicio() {
  return (
    <main className="flex flex-col gap-12 overflow-hidden relative px-2 pt-16 md:pt-20 lg:pt-[96px] md:px-8 lg:px-10">
      <RandomAnime />
      <HeroSection>
        <MainContentHero />
      </HeroSection>
      <div className="w-full grid grid-cols-1 gap-12 gap-x-8 2xl:grid-cols-[70%,1fr]">
        <MainSection
          tituloSeccion="lo mas popular"
          customStyles=" 2xl:col-start-1 2xl:row-start-1"
        >
          <MainContentPopulares />
        </MainSection>
        <MainSection
          tituloSeccion="ultimos trailers"
          customStyles=" 2xl:col-start-1 2xl:col-span-2"
          nombreDestino="ver mas trailers"
          destino="/trailers"
        >
          <MainContentTrailers />
        </MainSection>
        <MainSection
          tituloSeccion="capitulos recientes"
          customStyles=" 2xl:col-start-1"
          nombreDestino="ver mas episodios"
          destino="/temporadas"
        >
          <MainContentUltimosEpisodios />
        </MainSection>
        <MainSection
          tituloSeccion="anime de temporada"
          customStyles=" 2xl:col-start-1"
          nombreDestino="ver temporadas"
          destino="/temporadas"
        >
          <MainContentTemporadas />
        </MainSection>
        <MainSection
          tituloSeccion="top historico"
          customStyles=" 2xl:col-start-2 2xl:row-start-3 2xl:row-span-2"
          nombreDestino="ver mas tops"
          destino="/tops"
          asideSection={true}
        >
          <MainContentTops />
        </MainSection>
        <MainSection
          tituloSeccion="generos"
          customStyles="2xl:col-start-2 2xl:row-start-1 2xl:row-span-1"
          asideSection={true}
        >
          <MainContentGeneros />
        </MainSection>
      </div>
    </main>
  );
}
