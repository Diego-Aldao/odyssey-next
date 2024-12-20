import BackButton from "@/components/buttons/BackButton";
import SectionReviews from "@/components/pageDetalle/DetalleAnime/SectionReviews/SectionReviews";
import React from "react";

interface Props {
  params: { [key: string]: string };
}

export default function PageReviews({ params }: Props) {
  const { id } = params;
  return (
    <div className="contenedor max-w-[1440px] w-full mx-auto lg:mt-40">
      <SectionReviews id={id} full={true} />
      <BackButton
        destino={`/anime/${id}`}
        nombre="ver la información completa"
      />
    </div>
  );
}
