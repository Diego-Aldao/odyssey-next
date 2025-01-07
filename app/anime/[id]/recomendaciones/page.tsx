import BackButton from "@/components/buttons/BackButton";
import MainSection from "@/components/containers/page-inicio/main-section";
import ListadoRecomendaciones from "@/components/pageDetalle/DetalleAnime/ListadoRecomendaciones";
import MainCardSkeleton from "@/components/skeletons/cards/MainCardSkeleton";
import { Metadata } from "next";
import React, { Suspense } from "react";

interface Props {
  params: Promise<{ [key: string]: string }>;
}

export const metadata: Metadata = {
  title: "Recomendaciones",
};

export default async function PageRecomendaciones({ params }: Props) {
  const id = (await params).id;
  return (
    <div className="contenedor max-w-[1440px] w-full mx-auto">
      <MainSection tituloSeccion="recomendaciones">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          <Suspense fallback={<MainCardSkeleton cantidad={12} />}>
            <ListadoRecomendaciones id={id} />
          </Suspense>
        </div>
      </MainSection>
      <BackButton
        destino={`/anime/${id}`}
        nombre="ver la información completa"
      />
    </div>
  );
}
