import PagesNavigationMainContainer from "@/components/containers/pages-navigation/pages-navigation-main-container";
import MainTitulo from "@/components/MainTitulo";
import ListadoResultados from "@/components/pageBusqueda/ListadoResultados";
import SearchBar from "@/components/SearchBar";
import React from "react";

interface Props {
  searchParams: { [key: string]: string };
  params: { [key: string]: string[] };
}

export default function Busqueda({ searchParams, params }: Props) {
  const { q, page } = searchParams;
  const { categoria } = params;
  return (
    <PagesNavigationMainContainer>
      {q && categoria && (
        <>
          <MainTitulo
            titulo={`resultados de '${q}' en ${categoria[0]}`}
            customStyles="md:max-w-[700px] lg:max-w-[800px] xl:!max-w-[1100px] lg:line-clamp-2  sm:!text-4xl  md:!text-5xl lg:!text-6xl xl:!text-7xl"
          />
          <SearchBar initialType={categoria[0]} />
          <ListadoResultados query={q} categoria={categoria[0]} page={page} />
        </>
      )}
    </PagesNavigationMainContainer>
  );
}
