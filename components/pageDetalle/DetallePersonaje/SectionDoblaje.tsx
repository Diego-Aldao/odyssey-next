import SkewCard from "@/components/cards/SkewCard";
import NoData from "@/components/errors/NoData";
import { VoiceActor } from "@/types/fetchTypes";
import React from "react";

interface Props {
  voces: VoiceActor[];
}

export default function SectionDoblaje({ voces }: Props) {
  return (
    <div className="voces flex flex-col gap-2  lg:gap-4 ">
      <h2 className="uppercase text-xl md:text-2xl lg:text-3xl xl:text-4xl font-montserrat font-black italic col-span-full w-full">
        actores de doblaje
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-8 px-1 xl:px-2">
        {voces && voces.length >= 1 && (
          <>
            {voces.slice(0, 12).map((voz) => (
              <SkewCard
                key={voz.person.mal_id}
                imagen={voz.person.images.jpg.image_url}
                titulo={voz.person.name}
                subtitulo={voz.language}
                destino={`/persona/${voz.person.mal_id}`}
              />
            ))}
          </>
        )}
        {voces && voces.length === 0 && <NoData />}
      </div>
    </div>
  );
}
