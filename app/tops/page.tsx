import PagesNavigationMainContainer from "@/components/containers/pages-navigation/pages-navigation-main-container";
import Filtros from "@/components/pageTops/Filtros";
import MainContentTops from "@/components/pageTops/MainContentTops";
import imageHero from "@/assets/pageTops/imageHeroTops.webp";
import imageHeroMobile from "@/assets/pageTops/imageHeroTopsMobile.webp";

import React from "react";
import PagesNavigationHero from "@/components/PagesNavigationHero";
import { Metadata } from "next";
import { LISTADO_FILTROS_PAGE_TOPS } from "@/constants";

interface Props {
  searchParams?: { [key: string]: string | string[] | undefined };
}
export const metadata: Metadata = {
  title: "Temporadas — Odyssey",
};

export default function PagineTops({ searchParams }: Props) {
  const filterValue = searchParams?.type || searchParams?.filter || "todos";
  const filtroTraducido = LISTADO_FILTROS_PAGE_TOPS.find(
    (itemFiltro) => itemFiltro.value === filterValue
  );
  return (
    <>
      <PagesNavigationHero
        imageDesktop={imageHero}
        imageMobile={imageHeroMobile}
        titulo="top anime"
        customImagePosition="object-[50%,10px] scale-105"
        subtitulo={filtroTraducido?.nombre || "todos"}
      />
      <PagesNavigationMainContainer>
        <Filtros searchParamsFilter={filtroTraducido?.nombre || "todos"} />
        <section className="grid gap-4 px-1 sm:grid-cols-2 lg:gap-8 xl:grid-cols-3 ">
          <MainContentTops searchParams={searchParams} />
        </section>
      </PagesNavigationMainContainer>
    </>
  );
}
