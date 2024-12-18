import PagesNavigationMainContainer from "@/components/containers/pages-navigation/pages-navigation-main-container";
import MainTitulo from "@/components/MainTitulo";
import ListadoResultados from "@/components/pageBusqueda/ListadoResultados";
import SearchBar from "@/components/SearchBar/SearchBar";
import { LISTADO_ALL_GENEROS } from "@/constants";
import React from "react";

interface Props {
  searchParams: { [key: string]: string };
  params: { [key: string]: string[] };
}

export default function Busqueda({ searchParams, params }: Props) {
  const { q, page, genres } = searchParams;
  const { categoria } = params;
  const genero = LISTADO_ALL_GENEROS.find(
    (genero) => genero.id === Number(genres)
  );
  const titulo = genres
    ? `resultados del genero ${genero?.nombre}`
    : `resultados ${q ? `de '${q}'` : ""} en ${categoria[0]}`;
  return (
    <PagesNavigationMainContainer>
      <>
        <MainTitulo
          titulo={titulo}
          customStyles="md:max-w-[700px] lg:max-w-[800px] xl:!max-w-[1100px] lg:line-clamp-2  sm:!text-4xl  md:!text-5xl lg:!text-6xl xl:!text-7xl"
        />
        <SearchBar
          initialType={categoria[0]}
          customStyles="max-w-[450px] mx-auto md:max-w-[650px] xl:max-w-[800px]"
        />
        <ListadoResultados
          query={q}
          categoria={categoria[0]}
          page={page}
          genero={genres}
        />
      </>
    </PagesNavigationMainContainer>
  );
}
