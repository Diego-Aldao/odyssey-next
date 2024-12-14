import MainSection from "@/components/containers/page-inicio/main-section";
import React, { Suspense } from "react";
import ListadoRecomendaciones from "./ListadoRecomendaciones";
import MainCardSkeleton from "@/components/skeletons/cards/MainCardSkeleton";

interface Props {
  id: string;
}

export default function SectionRecomendaciones({ id }: Props) {
  return (
    <MainSection
      tituloSeccion="recomendaciones"
      customStyles="row-start-4 md:row-start-5 xl:col-span-1 xl:row-start-4"
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
        <Suspense fallback={<MainCardSkeleton cantidad={12} />}>
          <ListadoRecomendaciones id={id} />
        </Suspense>
      </div>
    </MainSection>
  );
}
