import { BASE_URL_ANIME } from "@/constants";
import fetchData from "@/services/fetchData";
import { FetchAnimeStatistics } from "@/types/fetchTypes";
import React from "react";

interface Props {
  id: string;
}

export default async function SectionEstadisticas({ id }: Props) {
  const { data } = await fetchData<FetchAnimeStatistics>(
    `${BASE_URL_ANIME}/${id}/statistics`
  );

  type Result = Record<number, string>;
  const listadoPorcentajes = data.scores.reduce<Result>((acc, item) => {
    const key = item.percentage;
    acc[key] = `max-w-[${key}%]`;
    return acc;
  }, {});
  return (
    <section className="md:row-start-2 xl:col-span-2 max-w-[1440px] mx-auto w-full flex flex-col gap-8 lg:grid lg:grid-cols-[55%,45%] lg:gap-0">
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 lg:col-start-2  gap-2 lg:gap-0">
        <li className="flex flex-col gap-1 lg:items-center">
          <span className="text-xs capitalize xl:text-sm text-secondary-white">
            lo completaron
          </span>
          <span className="text-3xl md:text-4xl font-montserrat font-semibold xl:text-5xl">
            {data.completed.toLocaleString("es-AR")}
          </span>
        </li>
        <li className="flex flex-col gap-1 lg:items-center">
          <span className="text-xs capitalize xl:text-sm text-secondary-white">
            lo estan viendo
          </span>
          <span className="text-3xl md:text-4xl font-montserrat font-semibold xl:text-5xl">
            {data.watching.toLocaleString("es-AR")}
          </span>
        </li>
        <li className="flex flex-col gap-1 lg:items-center">
          <span className="text-xs capitalize xl:text-sm text-secondary-white">
            lo dejaron
          </span>
          <span className="text-3xl md:text-4xl font-montserrat font-semibold xl:text-5xl">
            {data.dropped.toLocaleString("es-AR")}
          </span>
        </li>
        <li className="flex flex-col gap-1 lg:items-center">
          <span className="text-xs capitalize xl:text-sm text-secondary-white">
            lo tienen en pausa
          </span>
          <span className="text-3xl md:text-4xl font-montserrat font-semibold xl:text-5xl">
            {data.on_hold.toLocaleString("es-AR")}
          </span>
        </li>
        <li className="flex flex-col gap-1 lg:items-center">
          <span className="text-xs capitalize xl:text-sm text-secondary-white">
            tienen planeado verlo
          </span>
          <span className="text-3xl md:text-4xl font-montserrat font-semibold xl:text-5xl">
            {data.plan_to_watch.toLocaleString("es-AR")}
          </span>
        </li>
        <li className="flex flex-col gap-1 lg:items-center">
          <span className="text-xs capitalize xl:text-sm text-secondary-white">
            total
          </span>
          <span className="text-3xl md:text-4xl font-montserrat font-semibold xl:text-5xl">
            {data.total.toLocaleString("es-AR")}
          </span>
        </li>
      </ul>
      <div className="grafico flex flex-col gap-4 lg:col-start-1 lg:row-start-1">
        <div className="grafico-content flex flex-col gap-2 max-w-5xl mx-auto w-full">
          {data.scores.map((score) => (
            <div
              key={score.votes}
              className="grid grid-cols-[28px,1fr,115px] md:grid-cols-[28px,1fr,150px] gap-2 items-center"
            >
              <div className="puntuacion flex justify-between items-center">
                <span className="text-xs lg:text-sm font-montserrat">
                  {score.score}
                </span>
                <span className="icon-[solar--star-bold] h-3 w-3 lg:h-4 lg:w-4  text-main-color"></span>
              </div>

              <div className="contenedor-total h-4 md:h-6 overflow-hidden bg-secondary-black w-full rounded-r-xl rounded-l-md">
                <div
                  style={{ width: `${score.percentage}%` }}
                  className={`h-full block bg-main-color rounded-r-xl rounded-l-md`}
                ></div>
              </div>
              <div className="contenedor-numeros flex gap-2">
                <span className="text-[10px] md:text-xs lg:text-sm font-montserrat">
                  {score.percentage}%
                </span>
                <span className="text-[10px] md:text-xs lg:text-sm font-montserrat text-secondary-white line-clamp-1">
                  ({score.votes.toLocaleString("es-AR")} votos)
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
