import RandomAnime from "@/components/pageInicio/RandomAnime";
import SectionPopulares from "@/components/pageInicio/SectionPopulares/SectionPopulares";
import HeroSection from "@/components/pageInicio/HeroSection";
import SectionTrailers from "@/components/pageInicio/SectionTrailers";
import SectionEpisodios from "@/components/pageInicio/SectionEpisodios";
import SectionTemporadas from "@/components/pageInicio/SectionTemporadas";
import SectionTops from "@/components/pageInicio/SectionTops";
import SectionGeneros from "@/components/pageInicio/SectionGeneros";
import InicioMainContainer from "@/components/containers/page-inicio/inicio-main-container";
import GridMainContainer from "@/components/containers/grid-main-container";

export default function Inicio() {
  return (
    <InicioMainContainer>
      <RandomAnime />
      <HeroSection />
      <GridMainContainer>
        <SectionPopulares />
        <SectionTrailers />
        <SectionEpisodios />
        <SectionTemporadas />
        <SectionTops />
        <SectionGeneros />
      </GridMainContainer>
    </InicioMainContainer>
  );
}
