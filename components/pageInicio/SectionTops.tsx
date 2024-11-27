import React from "react";
import fetchData from "@/services/fetchData";
import { FetchTops } from "@/types/fetchTypes";
import RankCard from "../cards/RankCard/RankCard";
import InfoTop from "../cards/RankCard/InfoTop";
import { BASE_URL_TOPS } from "@/constants";
import MainSection from "../containers/page-inicio/main-section";

export default async function SectionTops() {
  const data = await fetchData<FetchTops>(`${BASE_URL_TOPS}/anime`);
  const topAnimes = data.data.slice(0, 12);
  return (
    <MainSection
      tituloSeccion="top historico"
      customStyles=" xl:col-start-2 xl:row-start-3 xl:row-span-2"
      nombreDestino="ver mas tops"
      destino="/tops"
      asideSection={true}
    >
      <div className="contenedor w-full px-1 grid gap-4 sm:grid-cols-2 lg:gap-8 xl:grid-cols-1">
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
      </div>
    </MainSection>
  );
}
