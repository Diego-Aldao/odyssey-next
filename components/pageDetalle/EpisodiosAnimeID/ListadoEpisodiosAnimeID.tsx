"use client";
import { BASE_URL_ANIME } from "@/constants";
import fetchData from "@/services/fetchData";
import { FetchAnimeEpisodesWithMedia } from "@/types/fetchTypes";
import React from "react";
import SkewCard from "@/components/cards/SkewCard";
import useSWR from "swr";
import useInfiniteData from "@/hooks/useInfiniteData";
import SkewCardSkeleton from "@/components/skeletons/cards/SkewCardSkeleton";
import InfiniteScroll from "@/components/InfiniteScroll";
import NoData from "@/components/errors/NoData";

interface Props {
  id: string;
  page: string | undefined;
}

export default function ListadoEpisodiosAnimeID({ id, page }: Props) {
  const pagina = page ? `?page=${page}` : "";
  const url = `${BASE_URL_ANIME}/${id}/videos/episodes${pagina}`;
  const { data, isLoading } = useSWR(
    url,
    fetchData<FetchAnimeEpisodesWithMedia>
  );

  const { currentData } = useInfiniteData(data?.data, Number(page) || 1);
  return (
    <>
      {isLoading && !currentData && <SkewCardSkeleton cantidad={12} />}
      {currentData && currentData.length >= 1 && (
        <>
          {currentData.map((episodio) => (
            <SkewCard
              imagen={episodio.images.jpg.image_url}
              customImageStyles="object-[50%,0px] xl:object-[50%,0px]"
              titulo={episodio.title}
              subtitulo={`Episodio ${episodio.mal_id}`}
              destino={""}
              key={episodio.mal_id}
            />
          ))}
          {data?.pagination.has_next_page && (
            <InfiniteScroll
              newUrl={`/anime/${id}/episodios/?page=${
                Number(page) ? Number(page) + 1 : 2
              }`}
            />
          )}
        </>
      )}
      {currentData && currentData.length === 0 && <NoData />}
    </>
  );
}
