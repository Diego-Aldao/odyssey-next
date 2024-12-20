"use client";
import { LISTADO_CATEGORIAS_BUSQUEDA } from "@/constants";
import fetchData from "@/services/fetchData";
import {
  FetchSearchAnime,
  FetchSearchCharacters,
  FetchSearchPeople,
} from "@/types/fetchTypes";
import React from "react";
import useSWR from "swr";
import SearchBarResultCard from "../cards/SearchBarResultCard";

interface Props {
  url: string;
  value: string;
  isTyping: boolean;
  currentTipo: string;
}

export default function ListadoResultados({
  url,
  value,
  isTyping,
  currentTipo,
}: Props) {
  const { data, isLoading } = useSWR(
    url,
    fetchData<FetchSearchAnime | FetchSearchCharacters | FetchSearchPeople>
  );

  return (
    <div
      onMouseDown={(e) => e.preventDefault()}
      className={`contenedor-invisible rounded-xl mt-1 flex flex-col gap-1 border-main-white/20 w-full absolute top-[100%] py-4 px-2 left-0 bg-secondary-black/90 h-fit border  peer-focus:opacity-100 peer-focus:visible opacity-0 invisible transition-opacity delay-1000 ${
        value.length === 0 && "peer-focus:invisible peer-focus:opacity-0"
      }`}
    >
      {value.length >= 1 && isTyping && (
        <div className="spinner col-span-full flex items-center justify-center">
          <span className="loader !h-8 !w-8"></span>
        </div>
      )}
      {!isTyping && !isLoading && data && value.length >= 1 && (
        <>
          {data.data.map((item, i) => (
            <SearchBarResultCard
              destino={`/${LISTADO_CATEGORIAS_BUSQUEDA[currentTipo].nombreLocal}/${item.mal_id}`}
              key={`${item.mal_id}${i}`}
              nombre={"title" in item ? item.title : item.name}
            />
          ))}
          {data.pagination.has_next_page && (
            <button className="button w-full py-2 text-xs uppercase border border-main-color/20 mt-4 rounded-xl bg-main-black flex gap-2 items-center justify-center">
              <span>ver todos los resultados</span>
              <span className="icon-[solar--arrow-right-broken] h-4 w-4"></span>
            </button>
          )}
        </>
      )}
    </div>
  );
}
