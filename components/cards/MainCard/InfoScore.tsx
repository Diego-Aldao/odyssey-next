import React from "react";

interface Props {
  titulo: string;
  score: number | null;
}

export default function InfoScore({ titulo, score }: Props) {
  return (
    <>
      <div className="score flex items-center gap-1">
        <span className="font-montserrat font-bold text-xs">
          {score ? score : "sin puntuar"}
        </span>
        <span className="icon-[solar--star-bold] h-3 w-3 xl:h-4 xl:w-4 text-main-color"></span>
      </div>
      <span className="line-clamp-1 text-xs sm:text-sm md:text-xs lg:text-sm font-montserrat font-semibold">
        {titulo}
      </span>
    </>
  );
}
