import SkewCard from "@/components/cards/SkewCard";
import NoData from "@/components/errors/NoData";
import { BASE_URL_ANIME } from "@/constants";
import fetchData from "@/services/fetchData";
import { FetchAnimeCharacters } from "@/types/fetchTypes";
import React from "react";

interface Props {
  id: string;
  full?: boolean;
}

export default async function ListadoPersonajes({ id, full }: Props) {
  const { data } = await fetchData<FetchAnimeCharacters>(
    `${BASE_URL_ANIME}/${id}/characters`
  );
  const personajesOrdenados = data.sort((a, b) => b.favorites - a.favorites);
  const mainPersonajes = full
    ? personajesOrdenados
    : personajesOrdenados.slice(0, 12);

  return (
    <>
      {mainPersonajes && mainPersonajes.length >= 1 && (
        <>
          {mainPersonajes.map((personaje) => (
            <SkewCard
              key={personaje.character.mal_id}
              imagen={personaje.character.images.webp.image_url}
              titulo={personaje.character.name}
              subtitulo={personaje.role}
              destino={`/personaje/${personaje.character.mal_id}`}
            />
          ))}
        </>
      )}
      {mainPersonajes && mainPersonajes.length === 0 && <NoData />}
    </>
  );
}
