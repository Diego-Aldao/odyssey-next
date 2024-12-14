import { Skeleton } from "@nextui-org/skeleton";
import React from "react";

interface Props {
  cantidad: number;
  customCardStyles?: string;
}

export default function VideoCardSkeleton({
  cantidad,
  customCardStyles,
}: Props) {
  const cantidadCards = Array(cantidad).fill(null);
  return cantidadCards.map((_, i) => (
    <div className={`flex flex-col gap-2 ${customCardStyles}`} key={i}>
      <Skeleton className="w-1/2 h-4 rounded-xl" />
      <Skeleton className="h-[50vw] sm:h-[16vw] lg:h-[12vw] lg:max-h-[197px] w-full rounded-xl " />
      <Skeleton className="w-1/2 h-4 rounded-xl self-end" />
    </div>
  ));
}
