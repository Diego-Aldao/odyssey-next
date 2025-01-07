import React, { Suspense } from "react";
import SectionEstadisticas from "@/components/pageDetalle/DetalleAnime/SectionEstadisticas/SectionEstadisticas";
import EstadisticasSkeleton from "@/components/skeletons/pageDetalle/EstadisticasSkeleton";
import MainInfo from "@/components/pageDetalle/DetalleAnime/MainInfo";
import ScrollTop from "@/components/pageDetalle/DetalleAnime/ScrollTop";
import MainInfoSkeleton from "@/components/skeletons/pageDetalle/MainInfoSkeleton";

interface Props {
  params: Promise<{ [key: string]: string }>;
}

export default async function PageDetalle({ params }: Props) {
  const id = (await params).id;
  return (
    <div className="main-section w-full flex flex-col gap-8">
      <ScrollTop />
      <Suspense fallback={<MainInfoSkeleton />}>
        <MainInfo id={id} />
      </Suspense>
      <Suspense fallback={<EstadisticasSkeleton />}>
        <SectionEstadisticas id={id} />
      </Suspense>
    </div>
  );
}
