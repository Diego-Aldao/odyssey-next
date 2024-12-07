"use client";
import React from "react";
import { Tops } from "@/types/fetchTypes";
import Filtros from "./Filtros";
import InfiniteScroll from "../InfiniteScroll";
import useInfiniteData from "@/hooks/useInfiniteData";
import useNewUrl from "@/hooks/useNewUrl";
import RankCard from "../cards/RankCard/RankCard";
import { InfoTopDetailed } from "../cards/RankCard/InfoTop";

interface Props {
  data: Tops[];
  page: number;
  hasNextPage: boolean;
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function MainContentTops({
  data,
  page,
  hasNextPage,
  searchParams,
}: Props) {
  const { currentData } = useInfiniteData<Tops>(data, page);
  const { newUrl } = useNewUrl({ page, searchParams });

  return (
    <section className="grid gap-4 px-1 sm:grid-cols-2 lg:gap-8 xl:grid-cols-3">
      <Filtros
        searchParamsFilter={searchParams?.type || searchParams?.filter}
      />
      {currentData && (
        <>
          {currentData.map((animeTop, i) => (
            <RankCard
              key={`${animeTop}${i}`}
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
          {hasNextPage && <InfiniteScroll newUrl={newUrl} />}
        </>
      )}
    </section>
  );
}
