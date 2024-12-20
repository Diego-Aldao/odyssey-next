"use client";
import React from "react";
import MainCard from "../cards/MainCard/MainCard";
import { SearchParams } from "@/types/localTypes";
import { FetchTemporadas, Temporada } from "@/types/fetchTypes";
import useNewUrl from "@/hooks/useNewUrl";
import useInfiniteData from "@/hooks/useInfiniteData";
import InfiniteScroll from "../InfiniteScroll";
import { BASE_URL_TEMPORADAS } from "@/constants";
import { searchParamsToString } from "@/utils/searchParamsToString";
import useSWR from "swr";
import fetchData from "@/services/fetchData";
import MainCardSkeleton from "../skeletons/cards/MainCardSkeleton";
import NoData from "../errors/NoData";
import InfoScore from "../cards/MainCard/InfoScore";

interface Props {
  currentTemporada: string[];
  searchParams: SearchParams;
}

export default function MainContentPageTemporadas({
  currentTemporada,
  searchParams,
}: Props) {
  const stringParams = searchParamsToString(searchParams);

  const url = `${BASE_URL_TEMPORADAS}/${currentTemporada.join("/")}${
    stringParams || ""
  }${stringParams ? "&limit=24&sfw" : "?limit=24&sfw"}`;

  const { data, isLoading } = useSWR(url, fetchData<FetchTemporadas>);

  const page = data?.pagination.current_page;

  const { currentData } = useInfiniteData<Temporada>(data?.data, page);
  const { newUrl } = useNewUrl({ page, searchParams });

  return (
    <>
      {isLoading && !currentData && <MainCardSkeleton cantidad={12} />}
      {currentData && currentData.length >= 1 && (
        <>
          {currentData.map((anime, i) => (
            <MainCard
              nombre={anime.title}
              tipo="anime"
              id={anime.mal_id}
              key={`${anime.mal_id}${i}`}
              imagen={anime.images.webp.image_url}
              destino={`/anime/${anime.mal_id}`}
              customStyles="2xl:!h-[310px]"
            >
              <InfoScore titulo={anime.title} score={anime.score} />
            </MainCard>
          ))}
          {data?.pagination.has_next_page && <InfiniteScroll newUrl={newUrl} />}
        </>
      )}
      {currentData && currentData.length === 0 && <NoData />}
    </>
  );
}
