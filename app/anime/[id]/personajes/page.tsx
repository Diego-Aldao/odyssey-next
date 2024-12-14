import BackButton from "@/components/buttons/BackButton";
import SectionPersonajes from "@/components/pageDetalle/DetalleAnime/SectionPersonajes/SectionPersonajes";
import React from "react";

interface Props {
  params: { [key: string]: string };
}

export default function PagePersonajes({ params }: Props) {
  const { id } = params;
  return (
    <div className="contenedor max-w-[1440px] w-full mx-auto lg:mt-40">
      <SectionPersonajes
        id={id}
        full={true}
        customGridStyles="xl:grid-cols-4 xl:gap-4 2xl:gap-8"
      />
      <BackButton
        destino={`/anime/${id}`}
        nombre="ver la información completa"
      />
    </div>
  );
}
