import BackButton from "@/components/buttons/BackButton";
import SectionPersonajes from "@/components/pageDetalle/DetalleAnime/SectionPersonajes/SectionPersonajes";
import { Metadata } from "next";
import React from "react";

interface Props {
  params: Promise<{ [key: string]: string }>;
}

export const metadata: Metadata = {
  title: "Personajes",
};

export default async function PagePersonajes({ params }: Props) {
  const id = (await params).id;
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
