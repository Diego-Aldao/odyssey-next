import PagesNavigationMainContainer from "@/components/containers/pages-navigation/pages-navigation-main-container";
import MainTitulo from "@/components/MainTitulo";
import ListadoResultados from "@/components/pageBusqueda/ListadoResultados";
import SearchBar from "@/components/SearchBar/SearchBar";
import { LISTADO_ALL_GENEROS } from "@/constants";
import { Metadata } from "next";
import React from "react";

interface Props {
  searchParams: Promise<{ [key: string]: string }>;
  params: Promise<{ [key: string]: string[] }>;
}
export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const q = (await searchParams).q;
  const categoria = (await params).categoria;
  return {
    title: `Búsqueda ${q ? `de '${q}'` : ""} en ${
      categoria[0].charAt(0).toUpperCase() + categoria[0].slice(1)
    } — Odyssey`,
  };
}

export default async function Busqueda({ searchParams, params }: Props) {
  const { q, page, genres } = await searchParams;
  const categoria = (await params).categoria;
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
