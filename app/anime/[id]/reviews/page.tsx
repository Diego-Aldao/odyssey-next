import AnimeMainContainer from "@/components/containers/page-detalle/anime-main-container";
import SectionHero from "@/components/pageDetalle/DetalleAnime/SectionHero";
import SectionReviews from "@/components/pageDetalle/DetalleAnime/SectionReviews";
import { BASE_URL_ANIME } from "@/constants";
import fetchData from "@/services/fetchData";
import { FetchAnime } from "@/types/fetchTypes";
import React from "react";

interface Props {
  params: { [key: string]: string };
}

export default async function PageReviews({ params }: Props) {
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
      />
      <div className="contenedor max-w-[1440px] w-full mx-auto lg:mt-40">
        <SectionReviews id={id} full={true} />
      </div>
    </AnimeMainContainer>
  );
}
