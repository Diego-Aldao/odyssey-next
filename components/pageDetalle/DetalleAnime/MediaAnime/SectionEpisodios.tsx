import ListCard from "@/components/cards/ListCard";
import MainSection from "@/components/containers/page-inicio/main-section";
import { Episode } from "@/types/fetchTypes";
import React from "react";

interface Props {
  episodios: Episode[];
  id: string;
  full?: boolean;
  customGridStyles?: string;
}

export default function SectionEpisodios({
  episodios,
  id,
  full,
  customGridStyles,
}: Props) {
  const mainEpisodios = full ? episodios : episodios.reverse().slice(0, 12);
  return (
    <MainSection
      tituloSeccion="episodios"
      destino={
        episodios.length < 12 || full ? undefined : `/anime/${id}/episodios`
      }
      nombreDestino={full ? undefined : "ver todos"}
      customStyles="row-start-2 md:row-start-3 xl:col-start-2 xl:row-start-3 xl:!text-lg"
      asideSection={!full}
    >
      <div
        className={`grid gap-4 px-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 ${customGridStyles}`}
      >
        {mainEpisodios.map((episodio) => (
          <ListCard
            index={episodio.mal_id}
            nombre={episodio.title}
            key={episodio.mal_id}
          />
        ))}
      </div>
    </MainSection>
  );
}
