"use client";
import useInfiniteData from "@/hooks/useInfiniteData";
import fetchData from "@/services/fetchData";
import { FetchSearchCharacters, SearchPersonaje } from "@/types/fetchTypes";
import React from "react";
import useSWR from "swr";
import SearchCard from "../cards/SearchCard";
import SearchGridContainer from "../containers/page-busqueda/search-grid-container";
import SearchCardSkeleton from "../skeletons/cards/SearchCardSkeleton";
import InfiniteScroll from "../InfiniteScroll";
import NoData from "../errors/NoData";

interface Props {
  query: string;
  categoria: string;
  page: string;
  url: string;
}

export default function ListadoPersonajes({
  url,
  query,
  categoria,
  page,
}: Props) {
  const { data, isLoading } = useSWR(url, fetchData<FetchSearchCharacters>);
  const { currentData } = useInfiniteData<SearchPersonaje>(
    data?.data,
    Number(page) ? Number(page) : 1
  );
  return (
    <SearchGridContainer>
      {isLoading && !currentData && <SearchCardSkeleton cantidad={12} />}
      {currentData && currentData.length >= 1 && (
        <>
          {currentData.map((personaje, i) => (
            <SearchCard
              key={`${personaje.mal_id}${i}`}
              destino={`/personaje/${personaje.mal_id}`}
              imagen={personaje.images.webp.image_url}
              titulo={personaje.name}
            >
              <>
                <span className="text-xs text-secondary-white line-clamp-1">
                  {personaje.name_kanji}
                </span>
                <span className="text-xs text-secondary-white line-clamp-1">
                  {personaje.nicknames}
                </span>
                <div className="footer mt-auto w-full flex justify-end items-center">
                  {personaje.favorites ? (
                    <div className="flex items-center gap-1">
                      <span className="font-montserrat text-xs font-bold lg:text-sm">
                        {personaje.favorites}
                      </span>
                      <span className="icon-[solar--heart-angle-broken] h-3 w-3 xl:h-4 xl:w-4 text-main-color"></span>
                    </div>
                  ) : (
                    <span className="font-montserrat text-xs font-bold">
                      sin favoritos
                    </span>
                  )}
                </div>
              </>
            </SearchCard>
          ))}
          {data?.pagination.has_next_page && (
            <InfiniteScroll
              newUrl={`/busqueda/${categoria}?q=${query}&page=${
                data.pagination.current_page + 1
              }`}
            />
          )}
        </>
      )}
      {currentData && currentData.length === 0 && <NoData />}
    </SearchGridContainer>
  );
}
