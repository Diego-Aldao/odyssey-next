"use client";
import fetchData from "@/services/fetchData";
import { FetchSearchAnime, SearchAnime } from "@/types/fetchTypes";
import React from "react";

import useSWR from "swr";
import useInfiniteData from "@/hooks/useInfiniteData";
import InfiniteScroll from "../InfiniteScroll";
import { LISTADO_ESTADOS_ANIME } from "@/constants";
import SearchCardSkeleton from "../skeletons/cards/SearchCardSkeleton";
import SearchCard from "../cards/SearchCard";
import SearchGridContainer from "../containers/page-busqueda/search-grid-container";
import NoData from "../errors/NoData";

interface Props {
  query: string;
  categoria: string;
  page: string;
  url: string;
  genero: string;
}

export default function ListadoAnime({
  url,
  query,
  categoria,
  page,
  genero,
}: Props) {
  const { data, isLoading } = useSWR(url, fetchData<FetchSearchAnime>);
  const { currentData } = useInfiniteData<SearchAnime>(
    data?.data,
    Number(page) ? Number(page) : 1
  );
  const nuevaUrlBusqueda = `/busqueda/${categoria}?q=${query}`;
  const nuevaUrlGeneros = `/busqueda/anime?genres=${genero}`;

  const nuevaUrl = genero ? nuevaUrlGeneros : nuevaUrlBusqueda;

  return (
    <SearchGridContainer>
      {isLoading && !currentData && <SearchCardSkeleton cantidad={12} />}
      {currentData && currentData.length >= 1 && (
        <>
          {currentData.map((anime, i) => {
            const color =
              LISTADO_ESTADOS_ANIME[anime.status.toLowerCase()].color;
            return (
              <SearchCard
                key={`${anime.mal_id}${i}`}
                destino={`/anime/${anime.mal_id}`}
                imagen={anime.images.webp.image_url}
                titulo={anime.title}
              >
                <ul className="flex gap-1 flex-wrap">
                  {anime.genres.slice(0, 2).map((genero) => (
                    <li
                      key={genero.mal_id}
                      className="text-[10px] px-2 py-1 rounded-xl bg-secondary-black font-semibold"
                    >
                      {genero.name}
                    </li>
                  ))}
                </ul>
                <div className="footer mt-auto w-full flex justify-between items-center">
                  {LISTADO_ESTADOS_ANIME[anime.status.toLowerCase()] && (
                    <div className="py-1 px-3 rounded-full bg-secondary-black flex items-center gap-2">
                      <span
                        style={{ background: color }}
                        className="w-1 h-1  rounded-full block"
                      ></span>
                      <span className="capitalize text-xs font-bold font-montserrat">
                        {
                          LISTADO_ESTADOS_ANIME[anime.status.toLowerCase()]
                            .nombre
                        }
                      </span>
                    </div>
                  )}

                  {anime.score ? (
                    <div className="score flex items-center gap-1">
                      <span className="font-montserrat text-xs font-bold lg:text-sm">
                        {anime.score}
                      </span>
                      <span className="icon-[solar--star-bold] h-3 w-3 xl:h-4 xl:w-4 text-main-color"></span>
                    </div>
                  ) : (
                    <span className="font-montserrat text-xs font-bold">
                      sin puntuar
                    </span>
                  )}
                </div>
              </SearchCard>
            );
          })}
          {data?.pagination.has_next_page && (
            <InfiniteScroll
              newUrl={`${nuevaUrl}&page=${data.pagination.current_page + 1}`}
            />
          )}
        </>
      )}
      {currentData && currentData.length === 0 && <NoData />}
    </SearchGridContainer>
  );
}
