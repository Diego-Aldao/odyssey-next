import BackButton from "@/components/buttons/BackButton";
import MainSection from "@/components/containers/page-inicio/main-section";
import ListadoPersonajes from "@/components/pageDetalle/DetalleAnime/ListadoPersonajes";
import SkewCardSkeleton from "@/components/skeletons/cards/SkewCardSkeleton";
import { Metadata } from "next";
import React, { Suspense } from "react";

interface Props {
  params: Promise<{ [key: string]: string }>;
}

export const metadata: Metadata = {
  title: "Personajes",
};

export default async function PagePersonajes({ params }: Props) {
  const id = (await params).id;
  return (
    <div className="contenedor max-w-[1440px] w-full mx-auto">
      <MainSection tituloSeccion="personajes">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 xl:gap-8">
          <Suspense fallback={<SkewCardSkeleton cantidad={12} />}>
            <ListadoPersonajes id={id} />
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
