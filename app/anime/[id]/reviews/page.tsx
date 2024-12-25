import BackButton from "@/components/buttons/BackButton";
import SectionReviews from "@/components/pageDetalle/DetalleAnime/SectionReviews/SectionReviews";
import { Metadata } from "next";
import React from "react";

interface Props {
  params: Promise<{ [key: string]: string }>;
}

export const metadata: Metadata = {
  title: "Reviews",
};

export default async function PageReviews({ params }: Props) {
  const id = (await params).id;
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
