import React, { Suspense } from "react";
import { FetchAnime } from "@/types/fetchTypes";
import fetchData from "@/services/fetchData";
import { BASE_URL_ANIME } from "@/constants";
import MediaAnime from "@/components/pageDetalle/DetalleAnime/MediaAnime/MediaAnime";
import SectionEstadisticas from "@/components/pageDetalle/DetalleAnime/SectionEstadisticas/SectionEstadisticas";
import SectionPersonajes from "@/components/pageDetalle/DetalleAnime/SectionPersonajes";
import SectionRecomendaciones from "@/components/pageDetalle/DetalleAnime/SectionRecomendaciones";
import SectionReviews from "@/components/pageDetalle/DetalleAnime/SectionReviews";
import SectionHero from "@/components/pageDetalle/DetalleAnime/SectionHero";
import MediaSkeleton from "@/components/skeletons/pageDetalle/MediaSkeleton";
import EstadisticasSkeleton from "@/components/skeletons/pageDetalle/EstadisticasSkeleton";
import PersonajesSkeleton from "@/components/skeletons/pageDetalle/PersonajesSkeleton";
import SectionSkeleton from "@/components/skeletons/SectionSkeleton";
import ReviewsSkeleton from "@/components/skeletons/pageDetalle/ReviewsSkeleton";
import AnimeGridContainer from "@/components/containers/page-detalle/anime-grid-container";
import AnimeMainContainer from "@/components/containers/page-detalle/anime-main-container";

interface Props {
  params: { [key: string]: string };
}

export default async function PageDetalle({ params }: Props) {
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
      />
      <AnimeGridContainer>
        <Suspense fallback={<MediaSkeleton />}>
          <MediaAnime id={id} />
        </Suspense>
        <Suspense fallback={<EstadisticasSkeleton />}>
          <SectionEstadisticas id={id} />
        </Suspense>
        <Suspense fallback={<PersonajesSkeleton />}>
          <SectionPersonajes id={id} />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <SectionRecomendaciones id={id} />
        </Suspense>
        <Suspense fallback={<ReviewsSkeleton />}>
          <SectionReviews id={id} />
        </Suspense>
      </AnimeGridContainer>
    </AnimeMainContainer>
  );
}
