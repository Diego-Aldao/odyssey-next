import PagesNavigationMainContainer from "@/components/containers/pages-navigation/pages-navigation-main-container";
import MainTitulo from "@/components/MainTitulo";
import Filtros from "@/components/pageTops/Filtros";
import MainContentTops from "@/components/pageTops/MainContentTops";

import React from "react";

interface Props {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function PagineTops({ searchParams }: Props) {
  return (
    <PagesNavigationMainContainer>
      <MainTitulo titulo="top anime" />
      <section className="grid gap-4 px-1 sm:grid-cols-2 lg:gap-8 xl:grid-cols-3">
        <Filtros
          searchParamsFilter={searchParams?.type || searchParams?.filter}
        />
        <MainContentTops searchParams={searchParams} />
      </section>
    </PagesNavigationMainContainer>
  );
}
