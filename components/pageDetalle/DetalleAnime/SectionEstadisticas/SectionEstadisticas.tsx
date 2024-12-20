import { BASE_URL_ANIME } from "@/constants";
import fetchData from "@/services/fetchData";
import { FetchAnimeStatistics } from "@/types/fetchTypes";
import React from "react";
import Puntuaciones from "./Puntuaciones";
import Numeros from "./Numeros";

interface Props {
  id: string;
}

export default async function SectionEstadisticas({ id }: Props) {
  const { data } = await fetchData<FetchAnimeStatistics>(
    `${BASE_URL_ANIME}/${id}/statistics`
  );
  return (
    <section className="md:row-start-2 xl:col-span-2 max-w-[1440px] mx-auto w-full flex flex-col gap-8 lg:grid lg:grid-cols-[55%,45%] lg:gap-0">
      <Numeros
        data={data}
        customStyles={
          data.scores.length === 0 ? "!col-span-full lg:!grid-cols-3" : ""
        }
      />
      <Puntuaciones scores={data.scores} />
    </section>
  );
}
