"use client";
import React from "react";
import CardsBaseGrid from "../cards/CardsBaseGrid";
import MainCard from "../cards/MainCard/MainCard";
import { SearchParams } from "@/types/localTypes";
import { Temporada } from "@/types/fetchTypes";
import useNewUrl from "@/hooks/useNewUrl";
import useInfiniteData from "@/hooks/useInfiniteData";
import InfiniteScroll from "../InfiniteScroll";
import FiltrosMobile from "./FiltrosMobile";
import FiltrosDesktop from "./FiltrosDesktop";

interface Props {
  data: Temporada[];
  currentTemporada: string[];
  tipoAnime: string | undefined;
  page: number;
  hasNextPage: boolean;
  searchParams: SearchParams;
}

export default function MainContentPageTemporadas({
  data,
  currentTemporada,
  tipoAnime,
  page,
  hasNextPage,
  searchParams,
}: Props) {
  const { currentData } = useInfiniteData<Temporada>(data, page);
  const { newUrl } = useNewUrl({ page, searchParams });

  return (
    <>
      <header className="flex flex-col gap-8 md:pt-4 lg:pt-8 col-span-full ml-auto mb-2 md:ml-0 w-full">
        <FiltrosDesktop
          currentTemporada={currentTemporada}
          tipoAnime={tipoAnime}
        />
        <FiltrosMobile />
      </header>
      {currentData && (
        <CardsBaseGrid customStyles="min-h-screen">
          <>
            {currentData.map((anime, i) => (
              <MainCard
                nombre={anime.title}
                tipo="anime"
                id={anime.mal_id}
                key={`${anime.mal_id}${i}`}
                imagen={anime.images.webp.image_url}
              >
                <span className="line-clamp-1 text-xs sm:text-sm md:text-xs lg:text-sm font-montserrat font-semibold">
                  {anime.title}
                </span>
                <div className="score flex items-center gap-1">
                  <span className="font-montserrat font-bold text-xs ">
                    {anime.score || "sin puntuar"}
                  </span>
                  <span className="icon-[solar--star-bold] h-3 w-3 xl:h-4 xl:w-4 text-main-color"></span>
                </div>
              </MainCard>
            ))}
            {hasNextPage && <InfiniteScroll newUrl={newUrl} />}
          </>
        </CardsBaseGrid>
      )}
    </>
  );
}
