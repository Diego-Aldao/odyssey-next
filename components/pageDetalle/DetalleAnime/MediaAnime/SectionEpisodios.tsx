import RankCard from "@/components/cards/RankCard/RankCard";
import MainSection from "@/components/containers/page-inicio/main-section";
import { Episode } from "@/types/fetchTypes";
import React from "react";

interface Props {
  episodios: Episode[];
  id: string;
}

export default function SectionEpisodios({ episodios, id }: Props) {
  const mainEpisodios = episodios.slice(0, 12);
  return (
    <MainSection
      tituloSeccion="episodios"
      destino={episodios.length > 12 ? `/anime/${id}/episodios` : undefined}
      nombreDestino="ver todos"
      customStyles="row-start-2 md:row-start-3 xl:col-start-2 xl:row-start-3 xl:!text-lg"
      asideSection={true}
    >
      <div className="grid gap-4 px-2 sm:grid-cols-2 xl:grid-cols-1">
        {mainEpisodios.map((episodio) => (
          <RankCard
            destino={episodios.length > 12 ? `/anime/${id}/episodios` : ""}
            key={episodio.mal_id}
            numeroLista={episodio.mal_id}
            imagen={episodio.images.jpg.image_url}
          >
            <span className="uppercase text-xs xl:text-base font-medium text-right line-clamp-1 pr-4 ml-auto max-w-[70%] absolute right-0 z-[2]">
              {episodio.title}
            </span>
          </RankCard>
        ))}
      </div>
    </MainSection>
  );
}
