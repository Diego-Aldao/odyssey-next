import React from "react";

interface Props {
  titulo: string;
  score: number;
}

export default function InfoTop({ titulo, score }: Props) {
  return (
    <div className="flex gap-2 items-center w-fit max-w-[70%] absolute  right-0 z-[2] pr-4">
      <span className="uppercase text-xs xl:text-base font-semibold text-right line-clamp-1 pr-4 ml-auto">
        {titulo}
      </span>
      <div className="calificacion flex gap-1 items-center">
        <span className="text-xs xl:text-sm font-montserrat font-black">
          {score}
        </span>
        <span className="icon-[solar--star-bold] h-3 w-3 xl:h-4 xl:w-4 text-main-color"></span>
      </div>
    </div>
  );
}
