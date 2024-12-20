import React from "react";

interface Props {
  titulo: string;
  score: number;
}

interface PropsDetailed {
  titulo: string;
  score: number;
  scored_by: number;
  type: string;
  episodes: number | null;
}

export function InfoTopDetailed({
  titulo,
  score,
  scored_by,
  type,
  episodes,
}: PropsDetailed) {
  return (
    <div className="flex flex-col gap-2 items-end w-fit max-w-[70%] absolute right-0 z-[2] pr-4">
      <span className="uppercase text-xs xl:text-base font-semibold text-right line-clamp-1 ml-auto">
        {titulo}
      </span>
      <div className="calificacion flex gap-1 items-center">
        {scored_by && (
          <span className="text-[10px] font-montserrat capitalize text-secondary-white">
            ({scored_by.toLocaleString()} votos)
          </span>
        )}

        <span
          className={`text-xs ${
            score
              ? "xl:text-sm font-montserrat font-black"
              : "text-secondary-white uppercase"
          }`}
        >
          {score || "sin puntuar"}
        </span>
        <span className="icon-[solar--star-bold] h-3 w-3 xl:h-4 xl:w-4 text-main-color"></span>
      </div>
      {episodes && (
        <div className="tipo hidden lg:block">
          <span className="text-xs text-secondary-white font-montserrat">
            {type} ({episodes} eps)
          </span>
        </div>
      )}
    </div>
  );
}

export default function InfoTop({ titulo, score }: Props) {
  return (
    <div className="flex gap-2 items-center w-fit max-w-[70%] absolute  right-0 z-[2] pr-4">
      <span className="uppercase text-xs xl:text-base font-semibold text-right line-clamp-1 pr-4 ml-auto">
        {titulo}
      </span>
      <div className="calificacion flex gap-1 items-center">
        <span className="text-xs xl:text-sm font-montserrat font-black">
          {score || "sin puntuar"}
        </span>
        <span className="icon-[solar--star-bold] h-3 w-3 xl:h-4 xl:w-4 text-main-color"></span>
      </div>
    </div>
  );
}
