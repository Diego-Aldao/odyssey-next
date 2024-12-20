import MainSection from "@/components/containers/page-inicio/main-section";
import React, { Suspense } from "react";
import ListadoReviews from "./ListadoReviews";
import ReviewCardSkeleton from "@/components/skeletons/cards/ReviewCardSkeleton";

interface Props {
  id: string;
  full?: boolean;
  customGridStyles?: string;
}

export default function SectionReviews({ id, full, customGridStyles }: Props) {
  return (
    <MainSection
      asideSection={!full}
      tituloSeccion="reviews"
      customStyles={
        full ? "" : "row-start-5 md:row-start-6 xl:row-start-4 xl:col-start-2"
      }
      destino={full ? undefined : `/anime/${id}/reviews`}
      nombreDestino={full ? undefined : "ver todas"}
    >
      <div
        className={`grid grid-cols-1 xl:grid-cols-1 gap-8 ${customGridStyles}`}
      >
        <Suspense fallback={<ReviewCardSkeleton cantidad={3} />}>
          <ListadoReviews id={id} full={full} />
        </Suspense>
      </div>
    </MainSection>
  );
}
