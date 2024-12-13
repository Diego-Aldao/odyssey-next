import React, { Suspense } from "react";
import MediaAnime from "@/components/pageDetalle/DetalleAnime/MediaAnime/MediaAnime";
import SectionEstadisticas from "@/components/pageDetalle/DetalleAnime/SectionEstadisticas/SectionEstadisticas";
import SectionPersonajes from "@/components/pageDetalle/DetalleAnime/SectionPersonajes/SectionPersonajes";
import SectionReviews from "@/components/pageDetalle/DetalleAnime/SectionReviews/SectionReviews";
import MediaSkeleton from "@/components/skeletons/pageDetalle/MediaSkeleton";
import EstadisticasSkeleton from "@/components/skeletons/pageDetalle/EstadisticasSkeleton";
import AnimeGridContainer from "@/components/containers/page-detalle/anime-grid-container";
import SectionRecomendaciones from "@/components/pageDetalle/DetalleAnime/SectionRecomendaciones/SectionRecomendaciones";

interface Props {
  params: { [key: string]: string };
}

export default async function PageDetalle({ params }: Props) {
  const { id } = params;
  return (
    <AnimeGridContainer>
      <Suspense fallback={<MediaSkeleton />}>
        <MediaAnime id={id} />
      </Suspense>
      <Suspense fallback={<EstadisticasSkeleton />}>
        <SectionEstadisticas id={id} />
      </Suspense>
      <SectionPersonajes id={id} />
      <SectionRecomendaciones id={id} />
      <SectionReviews id={id} />
    </AnimeGridContainer>
  );
}
