import { Score } from "@/types/fetchTypes";
import React from "react";

interface Props {
  scores: Score[];
}

export default function Puntuaciones({ scores }: Props) {
  return (
    <div className="flex flex-col gap-4 lg:col-start-1 lg:row-start-1">
      <div className="flex flex-col gap-2 max-w-5xl mx-auto w-full">
        {scores.map((score) => (
          <div
            key={score.votes}
            className="grid grid-cols-[28px,1fr,115px] md:grid-cols-[28px,1fr,170px] gap-2 items-center"
          >
            <div className="puntuacion flex justify-between items-center">
              <span className="text-xs lg:text-sm font-montserrat">
                {score.score}
              </span>
              <span className="icon-[solar--star-bold] h-3 w-3 lg:h-4 lg:w-4  text-main-color"></span>
            </div>

            <div className="h-4 md:h-6 overflow-hidden bg-secondary-black w-full rounded-r-xl rounded-l-md">
              <div
                style={{ width: `${score.percentage}%` }}
                className={`h-full block bg-main-color rounded-r-xl rounded-l-md`}
              ></div>
            </div>
            <div className="flex gap-2">
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
  );
}
