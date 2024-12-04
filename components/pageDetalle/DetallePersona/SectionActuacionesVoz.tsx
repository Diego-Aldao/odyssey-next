import { SkewCardDouble } from "@/components/cards/SkewCard";
import { BASE_URL_PERSONA } from "@/constants";
import fetchData from "@/services/fetchData";
import { FetchPersonVoiceActing } from "@/types/fetchTypes";
import React from "react";

interface Props {
  id: string;
}

export default async function SectionActuacionesVoz({ id }: Props) {
  const { data } = await fetchData<FetchPersonVoiceActing>(
    `${BASE_URL_PERSONA}/${id}/voices`
  );
  return (
    <div className="flex flex-col gap-2 lg:gap-4">
      <h2 className="uppercase text-xl md:text-2xl lg:text-3xl xl:text-4xl font-montserrat font-black italic col-span-full w-full">
        participaciones
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 px-1 xl:px-2">
        {data.slice(0, 32).map((participacion, i) => (
          <SkewCardDouble
            imagenLeft={participacion.anime.images.webp.image_url}
            nombreTop={participacion.anime.title}
            destinoTop={`/anime/${participacion.anime.mal_id}`}
            imagenRight={participacion.character.images.jpg.image_url}
            nombreBottom={participacion.character.name}
            destinoBottom={`/personaje/${participacion.character.mal_id}`}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
