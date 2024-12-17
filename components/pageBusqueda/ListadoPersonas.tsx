"use client";
import useInfiniteData from "@/hooks/useInfiniteData";
import fetchData from "@/services/fetchData";
import { FetchSearchPeople, SearchPeople } from "@/types/fetchTypes";
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

export default function ListadoPersonas({
  url,
  query,
  categoria,
  page,
}: Props) {
  const { data, isLoading } = useSWR(url, fetchData<FetchSearchPeople>);
  const { currentData } = useInfiniteData<SearchPeople>(
    data?.data,
    Number(page) ? Number(page) : 1
  );

  return (
    <SearchGridContainer>
      {isLoading && !currentData && <SearchCardSkeleton cantidad={12} />}
      {currentData && currentData.length >= 1 && (
        <>
          {currentData.map((persona, i) => (
            <SearchCard
              key={`${persona.mal_id}${i}`}
              destino={`/persona/${persona.mal_id}`}
              imagen={persona.images.jpg.image_url}
              titulo={persona.name}
            >
              <>
                <div className="nombre flex gap-1 items-center">
                  <span className="text-xs text-secondary-white line-clamp-1">
                    {persona.family_name}
                  </span>
                  <span className="text-xs text-secondary-white line-clamp-1">
                    {persona.given_name}
                  </span>
                </div>
                <ul className="flex items-center gap-1 flex-wrap">
                  {persona.alternate_names.map((nombre, i) => (
                    <li key={i}>
                      <span className="text-xs text-secondary-white line-clamp-1">
                        {nombre}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="footer mt-auto w-full flex justify-end items-center">
                  <div className="flex items-center gap-1">
                    <span className="font-montserrat text-xs font-bold lg:text-sm">
                      {persona.favorites}
                    </span>
                    <span className="icon-[solar--heart-angle-broken] h-3 w-3 xl:h-4 xl:w-4 text-main-color"></span>
                  </div>
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
