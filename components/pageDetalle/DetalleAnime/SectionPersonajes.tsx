import SkewCard from "@/components/cards/SkewCard";
import MainSection from "@/components/containers/page-inicio/main-section";
import { BASE_URL_ANIME } from "@/constants";
import fetchData from "@/services/fetchData";
import { FetchAnimeCharacters } from "@/types/fetchTypes";
import React from "react";

interface Props {
  id: string;
  full?: boolean;
  customGridStyles?: string;
}

export default async function SectionPersonajes({
  id,
  full,
  customGridStyles,
}: Props) {
  const { data } = await fetchData<FetchAnimeCharacters>(
    `${BASE_URL_ANIME}/${id}/characters`
  );
  const mainPersonajes = full ? data : data.slice(0, 12);
  return (
    <MainSection
      tituloSeccion="personajes"
      customStyles={full ? "" : "row-start-3 md:row-start-4 xl:row-start-3"}
      destino={full ? undefined : `/anime/${id}/personajes`}
      nombreDestino={full ? undefined : "ver todos"}
    >
      <div
        className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8 ${customGridStyles}`}
      >
        {mainPersonajes.map((personaje) => (
          <SkewCard
            key={personaje.character.mal_id}
            imagen={personaje.character.images.webp.image_url}
            titulo={personaje.character.name}
            subtitulo={personaje.role}
            destino={`/personaje/${personaje.character.mal_id}`}
          />
        ))}
      </div>
    </MainSection>
  );
}
