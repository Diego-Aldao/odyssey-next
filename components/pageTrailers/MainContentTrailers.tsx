import React from "react";
import { FetchTrailers } from "@/types/fetchTypes";
import VideoCard from "../cards/VideoCard";
import fetchData from "@/services/fetchData";
import { BASE_URL_TRAILERS } from "@/constants";

interface Props {
  tipo: string | string[];
}

export default async function MainContentTrailers({ tipo }: Props) {
  const urlTipo = tipo?.includes("popular") ? `/${tipo}` : "";
  const { data } = await fetchData<FetchTrailers>(
    `${BASE_URL_TRAILERS}${urlTipo}`
  );
  return (
    <>
      {data.map((trailer, i) => (
        <VideoCard
          id={trailer.entry.mal_id}
          key={`${trailer.entry.mal_id}${i}${trailer.trailer.url}`}
          nombreAnime={trailer.entry.title}
          tipoDeVideo={trailer.title}
          imagen={trailer.trailer.images.medium_image_url}
          videoUrl={trailer.trailer.embed_url}
        />
      ))}
    </>
  );
}
