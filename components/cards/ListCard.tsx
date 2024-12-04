import React from "react";
interface Props {
  index: number | string;
  nombre: string;
}

export default function ListCard({ index, nombre }: Props) {
  return (
    <div className="flex items-center gap-2  text-xs -skew-x-12 py-2 px-4 rounded-xl border border-main-white/20">
      <span className="font-montserrat font-semibold text-sm">{index}</span>
      <span>-</span>
      <span className="text-left line-clamp-1">{nombre}</span>
    </div>
  );
}
