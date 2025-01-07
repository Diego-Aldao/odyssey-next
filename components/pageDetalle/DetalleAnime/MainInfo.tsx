import { BASE_URL_ANIME } from "@/constants";
import fetchData from "@/services/fetchData";
import { FetchAnime } from "@/types/fetchTypes";
import React from "react";

interface Props {
  id: string;
}

interface Temporada {
  [key: string]: string;
}

const listadoTemporadas: Temporada = {
  fall: "otoño",
  winter: "invierno",
  spring: "primavera",
  summer: "verano",
};

export default async function MainInfo({ id }: Props) {
  const { data } = await fetchData<FetchAnime>(`${BASE_URL_ANIME}/${id}/full`);

  const listadoData = [
    {
      titulo: "episodios",
      valor: data.episodes,
    },
    {
      titulo: "estudio",
      valor: data.studios[0].name,
    },
    {
      titulo: "estreno",
      valor: `${listadoTemporadas[data.season]} ${data.year}`,
    },
    {
      titulo: "popularidad",
      valor: `#${data.popularity}`,
    },
  ];

  return (
    <div className="flex flex-col gap-4 w-full max-w-[1440px] mx-auto md:items-center md:gap-8">
      <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-x-2 w-full items-center">
        {listadoData.map((item, index) => (
          <li key={index} className="flex flex-col gap-1 lg:items-center">
            <span className="text-xs capitalize xl:text-sm text-secondary-white">
              {item.titulo}
            </span>
            <span className="text-lg md:text-xl lg:text-2xl font-montserrat font-semibold xl:text-3xl uppercase">
              {item.valor}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
