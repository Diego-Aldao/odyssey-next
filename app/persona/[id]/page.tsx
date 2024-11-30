import SectionActuacionesVoz from "@/components/pageDetalle/DetallePersona/SectionActuacionesVoz";
import SectionHero from "@/components/pageDetalle/SectionHero";
import SectionImagenes from "@/components/pageDetalle/SectionImagenes";
import SectionMainInfo from "@/components/pageDetalle/SectionMainInfo";
import { BASE_URL_PERSONA } from "@/constants";
import fetchData from "@/services/fetchData";
import { FetchPerson } from "@/types/fetchTypes";
import React from "react";
import DetalleGridContainer from "@/components/containers/page-detalle/detalle-grid-container";
import AsideSubInfo from "@/components/pageDetalle/DetallePersona/AsideSubInfo";

interface Props {
  params: { [key: string]: string };
}

export default async function PagePersona({ params }: Props) {
  const { id } = params;
  const { data } = await fetchData<FetchPerson>(
    `${BASE_URL_PERSONA}/${id}/full`
  );

  return (
    <main className="relative z-[2] w-full flex flex-col md:pt-56">
      <SectionImagenes url={`${BASE_URL_PERSONA}/${id}/pictures`} />
      <SectionHero imagen={data.images.jpg.image_url} />
      <DetalleGridContainer>
        <AsideSubInfo
          imagen={data.images.jpg.image_url}
          nombreDePila={data.name}
          apellido={data.family_name}
          nacimiento={data.birthday}
          sitioWeb={data.website_url || ""}
          favoritos={data.favorites}
        />
        <section className="flex flex-col gap-12">
          <SectionMainInfo nombre={data.name} about={data.about} />
          <SectionActuacionesVoz id={id} />
        </section>
      </DetalleGridContainer>
    </main>
  );
}
