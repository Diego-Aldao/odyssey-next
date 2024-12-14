import React from "react";
import fetchData from "@/services/fetchData";
import { FetchTops } from "@/types/fetchTypes";
import RankCard from "../cards/RankCard/RankCard";
import InfoTop from "../cards/RankCard/InfoTop";
import { BASE_URL_TOPS } from "@/constants";

export default async function SectionTops() {
  const data = await fetchData<FetchTops>(`${BASE_URL_TOPS}/anime`);
  const topAnimes = data.data.slice(0, 12);
  return (
    <>
      {topAnimes.map((anime) => (
        <RankCard
          key={anime.mal_id}
          destino={`/anime/${anime.mal_id}`}
          imagen={anime.images.webp.image_url}
          numeroLista={anime.rank}
        >
          <InfoTop titulo={anime.title} score={anime.score} />
        </RankCard>
      ))}
    </>
  );
}
