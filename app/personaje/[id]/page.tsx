import AsideSubInfo from "@/components/pageDetalle/DetallePersonaje/AsideSubInfo";
import SectionDoblaje from "@/components/pageDetalle/DetallePersonaje/SectionDoblaje";
import SectionHero from "@/components/pageDetalle/SectionHero";
import SectionImagenes from "@/components/pageDetalle/SectionImagenes";
import SectionMainInfo from "@/components/pageDetalle/SectionMainInfo";
import { BASE_URL_PERSONAJES } from "@/constants";
import fetchData from "@/services/fetchData";
import { FetchCharacter } from "@/types/fetchTypes";
import React from "react";
import DetalleGridContainer from "@/components/containers/page-detalle/detalle-grid-container";
import { Metadata } from "next";

interface Props {
  params: Promise<{ [key: string]: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id;
  const { data } = await fetchData<FetchCharacter>(
    `${BASE_URL_PERSONAJES}/${id}/full`
  );
  return {
    title: `${data.name} — Odyssey`,
  };
}

export default async function PaginaPersonaje({ params }: Props) {
  const id = (await params).id;
  const { data } = await fetchData<FetchCharacter>(
    `${BASE_URL_PERSONAJES}/${id}/full`
  );

  return (
    <main className="relative z-[2] w-full flex flex-col md:pt-56">
      <SectionImagenes url={`${BASE_URL_PERSONAJES}/${id}/pictures`} />
      <SectionHero imagen={data.images.webp.image_url} />
      <DetalleGridContainer>
        <AsideSubInfo
          imagen={data.images.webp.image_url}
          participaciones={data.anime}
        />

        <section className="flex flex-col gap-12">
          <SectionMainInfo nombre={data.name} about={data.about} />
          <SectionDoblaje voces={data.voices} />
        </section>
      </DetalleGridContainer>
    </main>
  );
}
