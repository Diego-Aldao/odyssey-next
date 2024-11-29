import SkewCard from "@/components/cards/SkewCard";
import MainSection from "@/components/containers/page-inicio/main-section";
import { BASE_URL_ANIME } from "@/constants";
import fetchData from "@/services/fetchData";
import { FetchAnimeCharacters } from "@/types/fetchTypes";
import React from "react";

interface Props {
  id: string;
}

export default async function SectionPersonajes({ id }: Props) {
  const { data } = await fetchData<FetchAnimeCharacters>(
    `${BASE_URL_ANIME}/${id}/characters`
  );
  const mainPersonajes = data.slice(0, 12);
  return (
    <MainSection
      tituloSeccion="personajes"
      customStyles="row-start-3 md:row-start-4 xl:row-start-3"
      destino={`/anime/${id}/personajes`}
      nombreDestino="ver todos"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
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
