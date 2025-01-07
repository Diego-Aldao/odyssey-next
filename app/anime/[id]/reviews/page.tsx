import BackButton from "@/components/buttons/BackButton";
import MainSection from "@/components/containers/page-inicio/main-section";
import ListadoReviews from "@/components/pageDetalle/DetalleAnime/ListadoReviews";
import ReviewCardSkeleton from "@/components/skeletons/cards/ReviewCardSkeleton";
import { Metadata } from "next";
import React, { Suspense } from "react";

interface Props {
  params: Promise<{ [key: string]: string }>;
}

export const metadata: Metadata = {
  title: "Reviews",
};

export default async function PageReviews({ params }: Props) {
  const id = (await params).id;
  return (
    <div className="contenedor max-w-[1440px] w-full mx-auto">
      <MainSection tituloSeccion="reviews">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <Suspense fallback={<ReviewCardSkeleton cantidad={3} />}>
            <ListadoReviews id={id} />
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
