import React from "react";
import { FetchTrailers } from "@/types/fetchTypes";
import { filtroTrailers } from "@/utils/filtroTrailers";
import VideoCard from "../cards/VideoCard";
import { BASE_URL_TRAILERS } from "@/constants";
import fetchData from "@/services/fetchData";

export default async function SectionTrailers() {
  const data = await fetchData<FetchTrailers>(BASE_URL_TRAILERS);
  const trailersFiltrados = filtroTrailers(data).slice(0, 12);

  return (
    <>
      {trailersFiltrados.map((trailer, i) => (
        <VideoCard
          id={trailer.entry.mal_id}
          key={`${trailer.entry.mal_id}${i}`}
          nombreAnime={trailer.entry.title}
          tipoDeVideo={trailer.title}
          imagen={trailer.trailer.images.medium_image_url}
          videoUrl={trailer.trailer.embed_url}
          customStylesImage="h-[50vw] sm:h-[16vw] lg:h-[12vw] lg:max-h-[197px]"
        />
      ))}
    </>
  );
}
