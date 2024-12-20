import { Skeleton } from "@nextui-org/skeleton";
import React from "react";

interface Props {
  cantidad: number;
}

export default function SearchCardSkeleton({ cantidad }: Props) {
  const cantidadCards = Array(cantidad).fill(null);

  return (
    <>
      {cantidadCards.map((_, i) => (
        <div
          className="rounded-xl p-2 flex gap-2 max-w-[450px] w-full border border-main-white/10"
          key={i}
        >
          <Skeleton className="w-[100px] h-[135px] rounded-xl" />
          <div className="info flex flex-col gap-2 flex-1">
            <Skeleton className="w-28 h-4 rounded-xl" />
            <Skeleton className="w-24 h-4 rounded-xl" />
            <Skeleton className="mt-auto ml-auto w-16 h-4 rounded-xl" />
          </div>
        </div>
      ))}
    </>
  );
}
