import HeroSection from "@/components/containers/page-inicio/hero-section";
import InicioSection from "@/components/containers/page-inicio/inicio-section";
import MainContentUltimosEpisodios from "@/components/pageInicio/MainContentUltimosEpisodios";
import MainContentTemporadas from "@/components/pageInicio/MainContentTemporadas";
import MainContentTops from "@/components/pageInicio/MainContentTops";
import MainContentPopulares from "@/components/pageInicio/MainContentPopulares";
import MainContentGeneros from "@/components/pageInicio/MainContentGeneros";
import MainContentHero from "@/components/pageInicio/MainContentHero";

export default function Inicio() {
  return (
    <main className="flex flex-col gap-12 overflow-hidden relative z-[2]">
      <HeroSection>
        <MainContentHero />
      </HeroSection>
      <div className="w-full grid grid-cols-1 gap-12 gap-x-8 2xl:grid-cols-[70%,1fr]">
        <InicioSection
          tituloSeccion="lo mas popular"
          customStyles=" 2xl:col-start-1 2xl:row-start-1"
        >
          <MainContentPopulares />
        </InicioSection>
        <InicioSection
          tituloSeccion="capitulos recientes"
          customStyles=" 2xl:col-start-1"
          nombreDestino="ver mas episodios"
          destino="/temporadas"
        >
          <MainContentUltimosEpisodios />
        </InicioSection>
        <InicioSection
          tituloSeccion="anime de temporada"
          customStyles=" 2xl:col-start-1"
          nombreDestino="ver temporadas"
          destino="/temporadas"
        >
          <MainContentTemporadas />
        </InicioSection>

        <InicioSection
          tituloSeccion="top historico"
          customStyles=" 2xl:col-start-2 2xl:row-start-2 2xl:row-span-2"
          nombreDestino="ver mas tops"
          destino="/tops"
          asideSection={true}
        >
          <MainContentTops />
        </InicioSection>
        <InicioSection
          tituloSeccion="generos"
          customStyles="2xl:col-start-2 2xl:row-start-1 2xl:row-span-1"
          asideSection={true}
        >
          <MainContentGeneros />
        </InicioSection>
      </div>
    </main>
  );
}
