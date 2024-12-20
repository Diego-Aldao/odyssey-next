import React from "react";

export default function NoData() {
  return (
    <div className="rounded-xl w-full h-[300px] flex items-center justify-center bg-main-black/10 backdrop-blur-sm col-span-full">
      <span className="uppercase font-semibold font-montserrat text-center">
        no se encontraron resultados
      </span>
    </div>
  );
}
