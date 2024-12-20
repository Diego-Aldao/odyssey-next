import MainSection from "@/components/containers/page-inicio/main-section";
import React, { Suspense } from "react";
import ListadoPersonajes from "./ListadoPersonajes";
import SkewCardSkeleton from "@/components/skeletons/cards/SkewCardSkeleton";

interface Props {
  id: string;
  full?: boolean;
  customGridStyles?: string;
}

export default function SectionPersonajes({
  id,
  full,
  customGridStyles,
}: Props) {
  return (
    <MainSection
      tituloSeccion="personajes"
      customStyles={full ? "" : "row-start-3 md:row-start-4 xl:row-start-3"}
      destino={full ? undefined : `/anime/${id}/personajes`}
      nombreDestino={full ? undefined : "ver todos"}
    >
      <div
        className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8 ${customGridStyles}`}
      >
        <Suspense fallback={<SkewCardSkeleton cantidad={12} />}>
          <ListadoPersonajes id={id} full={full} />
        </Suspense>
      </div>
    </MainSection>
  );
}
