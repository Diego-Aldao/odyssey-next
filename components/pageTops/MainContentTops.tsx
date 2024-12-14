"use client";
import React from "react";
import { FetchTops, Tops } from "@/types/fetchTypes";
import InfiniteScroll from "../InfiniteScroll";
import useInfiniteData from "@/hooks/useInfiniteData";
import useNewUrl from "@/hooks/useNewUrl";
import RankCard from "../cards/RankCard/RankCard";
import { InfoTopDetailed } from "../cards/RankCard/InfoTop";
import { searchParamsToString } from "@/utils/searchParamsToString";
import { BASE_URL_TOPS } from "@/constants";
import useSWR from "swr";
import fetchData from "@/services/fetchData";
import RankCardSkeleton from "../skeletons/cards/RankCardSkeleton";

interface Props {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function MainContentTops({ searchParams }: Props) {
  const stringParams = searchParamsToString(searchParams);

  const url = `${BASE_URL_TOPS}/anime${stringParams || ""}${
    stringParams ? "&limit=24" : "?limit=24"
  }`;

  const { data, isLoading } = useSWR(url, fetchData<FetchTops>);

  const page = data?.pagination.current_page;
  const nextPage = data?.pagination.has_next_page;

  const { currentData } = useInfiniteData<Tops>(data?.data, page);
  const { newUrl } = useNewUrl({ page, searchParams });

  return (
    <>
      {isLoading && !currentData && (
        <RankCardSkeleton cantidad={12} customCardStyles="h-20 lg:h-28" />
      )}
      {currentData && (
        <>
          {currentData.map((animeTop, i) => (
            <RankCard
              key={`${animeTop}${i}${animeTop.title}`}
              imagen={animeTop.images.webp.image_url}
              destino={`/anime/${animeTop.mal_id}`}
              numeroLista={i + 1}
              customStyles="h-20 lg:h-28"
              customStylesImage="object-[50%,-20px]"
            >
              <InfoTopDetailed
                titulo={animeTop.title}
                score={animeTop.score}
                scored_by={animeTop.scored_by}
                episodes={animeTop.episodes}
                type={animeTop.type}
              />
            </RankCard>
          ))}
          {nextPage && <InfiniteScroll newUrl={newUrl} />}
        </>
      )}
    </>
  );
}
