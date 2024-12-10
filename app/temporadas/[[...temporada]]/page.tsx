import React from "react";
import MainContentPageTemporadas from "@/components/pageTemporadas/MainContentPageTemporadas";
import fetchData from "@/services/fetchData";
import { FetchTemporadas } from "@/types/fetchTypes";
import { BASE_URL_TEMPORADAS } from "@/constants";
import { searchParamsToString } from "@/utils/searchParamsToString";
import MainTitulo from "@/components/MainTitulo";
import HeroTemporadas from "@/components/pageTemporadas/HeroTemporadas";
import PagesNavigationMainContainer from "@/components/containers/pages-navigation/pages-navigation-main-container";

interface Props {
  params: { [key: string]: string[] };
  searchParams: { [key: string]: string | undefined };
}

export default async function Temporadas({ params, searchParams }: Props) {
  const { temporada } = params;
  const stringParams = searchParamsToString(searchParams);
  const { data, pagination } = await fetchData<FetchTemporadas>(
    `${BASE_URL_TEMPORADAS}/${temporada.join("/")}${stringParams || ""}${
      stringParams ? "&limit=24&sfw" : "?limit=24&sfw"
    }`
  );

  return (
    <>
      <HeroTemporadas temporada={temporada} />
      <PagesNavigationMainContainer>
        <MainTitulo titulo="anime de temporada" />

        <MainContentPageTemporadas
          data={data}
          currentTemporada={temporada}
          tipoAnime={searchParams?.filter}
          page={pagination.current_page}
          hasNextPage={pagination.has_next_page}
          searchParams={searchParams}
        />
      </PagesNavigationMainContainer>
    </>
  );
}
