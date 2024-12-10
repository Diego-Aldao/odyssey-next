import BackButton from "@/components/buttons/BackButton";
import AnimeMainContainer from "@/components/containers/page-detalle/anime-main-container";
import SectionHero from "@/components/pageDetalle/DetalleAnime/SectionHero";
import SectionPersonajes from "@/components/pageDetalle/DetalleAnime/SectionPersonajes";
import { BASE_URL_ANIME } from "@/constants";
import fetchData from "@/services/fetchData";
import { FetchAnime } from "@/types/fetchTypes";
import React from "react";

interface Props {
  params: { [key: string]: string };
}

export default async function PagePersonajes({ params }: Props) {
  const { id } = params;
  const { data } = await fetchData<FetchAnime>(`${BASE_URL_ANIME}/${id}/full`);
  return (
    <AnimeMainContainer>
      <SectionHero
        imagen={data.images.webp.large_image_url}
        titulo={data.title}
        sinopsis={data.synopsis}
        score={data.score}
        generos={data.genres}
        año={data.year}
        estado={data.status}
        rankPopularidad={data.popularity}
        id={id}
      />
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
    </AnimeMainContainer>
  );
}
