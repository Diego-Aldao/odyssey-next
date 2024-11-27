import React from "react";
import { FetchTrailers } from "@/types/fetchTypes";
import { filtroTrailers } from "@/utils/filtroTrailers";
import VideoCard from "../cards/VideoCard";
import SectionSkeleton from "../skeletons/SectionSkeleton";
import { BASE_URL_TRAILERS } from "@/constants";
import fetchData from "@/services/fetchData";
import MainSection from "../containers/page-inicio/main-section";

export default async function SectionTrailers() {
  const data = await fetchData<FetchTrailers>(BASE_URL_TRAILERS);
  const trailersFiltrados = filtroTrailers(data).slice(0, 12);

  return (
    <MainSection
      tituloSeccion="ultimos trailers"
      customStyles=" xl:col-start-1 xl:col-span-2"
      nombreDestino="ver mas trailers"
      destino="/trailers"
    >
      {!trailersFiltrados && <SectionSkeleton />}
      {trailersFiltrados && (
        <div className="grid gap-8 lg:gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {trailersFiltrados.map((trailer) => (
            <VideoCard
              id={trailer.entry.mal_id}
              key={trailer.entry.mal_id}
              nombreAnime={trailer.entry.title}
              tipoDeVideo={trailer.title}
              imagen={trailer.trailer.images.medium_image_url}
              videoUrl={trailer.trailer.embed_url}
            />
          ))}
        </div>
      )}
    </MainSection>
  );
}
