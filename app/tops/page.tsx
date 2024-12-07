import MainTitulo from "@/components/MainTitulo";
import MainContentTops from "@/components/pageTops/MainContentTops";
import { BASE_URL_TOPS } from "@/constants";
import fetchData from "@/services/fetchData";
import { FetchTops } from "@/types/fetchTypes";
import { searchParamsToString } from "@/utils/searchParamsToString";

import React from "react";

interface Props {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function PagineTops({ searchParams }: Props) {
  const stringParams = searchParamsToString(searchParams);
  const { pagination, data } = await fetchData<FetchTops>(
    `${BASE_URL_TOPS}/anime${stringParams || ""}${
      stringParams ? "&limit=24" : "?limit=24"
    }`
  );
  return (
    <main className="px-4 md:px-6 lg:px-10 pt-40 lg:pt-48 max-w-[1440px] mx-auto z-[2] relative flex flex-col gap-12 overflow-hidden">
      <MainTitulo titulo="top anime" />
      <MainContentTops
        hasNextPage={pagination.has_next_page}
        page={pagination.current_page}
        data={data}
        searchParams={searchParams}
      />
    </main>
  );
}
