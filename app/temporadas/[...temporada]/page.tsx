import React from "react";
import MainContentPageTemporadas from "@/components/pageTemporadas/MainContentPageTemporadas";
import fetchData from "@/services/fetchData";
import { FetchTemporadas } from "@/types/fetchTypes";
import { BASE_URL_TEMPORADAS } from "@/constants";
import { searchParamsToString } from "@/utils/searchParamsToString";
import MainTitulo from "@/components/MainTitulo";

interface Props {
  params: { [key: string]: string[] };
  searchParams: { [key: string]: string | undefined };
}

export default async function Temporadas({ params, searchParams }: Props) {
  const { temporada } = params;
  const stringParams = searchParamsToString(searchParams);
  const { data, pagination } = await fetchData<FetchTemporadas>(
    `${BASE_URL_TEMPORADAS}/${temporada.join("/")}${stringParams || ""}${
      stringParams ? "&limit=24" : "?limit=24"
    }`
  );

  return (
    <main className="pt-40 lg:pt-48 px-4 md:px-6 lg:px-10 2xl:px-0 flex flex-col gap-12 relative z-[2] max-w-[1440px] mx-auto pb-20">
      <MainTitulo titulo="anime de temporada" />
      <MainContentPageTemporadas
        data={data}
        currentTemporada={temporada}
        tipoAnime={searchParams?.filter}
        page={pagination.current_page}
        hasNextPage={pagination.has_next_page}
        searchParams={searchParams}
      />
    </main>
  );
}
