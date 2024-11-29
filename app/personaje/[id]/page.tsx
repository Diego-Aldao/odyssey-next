import PersonajesGridContainer from "@/components/containers/page-detalle/personajes-grid-container";
import AsideSubInfo from "@/components/pageDetalle/DetallePersonaje/AsideSubInfo";
import SectionDoblaje from "@/components/pageDetalle/DetallePersonaje/SectionDoblaje";
import SectionHero from "@/components/pageDetalle/DetallePersonaje/SectionHero";
import SectionImagenes from "@/components/pageDetalle/DetallePersonaje/SectionImagenes";
import SectionMainInfo from "@/components/pageDetalle/DetallePersonaje/SectionMainInfo";
import { BASE_URL_PERSONAJES } from "@/constants";
import fetchData from "@/services/fetchData";
import { FetchCharacter } from "@/types/fetchTypes";
import React from "react";

interface Props {
  params: { [key: string]: string };
}

export default async function PaginaPersonaje({ params }: Props) {
  const { id } = params;
  const { data } = await fetchData<FetchCharacter>(
    `${BASE_URL_PERSONAJES}/${id}/full`
  );

  return (
    <main className="relative z-[2] w-full flex flex-col md:pt-56">
      <SectionImagenes id={id} />
      <SectionHero imagen={data.images.webp.image_url} />
      <PersonajesGridContainer>
        <AsideSubInfo
          imagen={data.images.webp.image_url}
          participaciones={data.anime}
        />

        <section className="flex flex-col gap-12">
          <SectionMainInfo nombre={data.name} about={data.about} />
          <SectionDoblaje voces={data.voices} />
        </section>
      </PersonajesGridContainer>
    </main>
  );
}
