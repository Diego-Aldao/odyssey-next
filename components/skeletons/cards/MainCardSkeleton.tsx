import { Skeleton } from "@nextui-org/skeleton";
import React from "react";

interface Props {
  cantidad: number;
  customCardStyles?: string;
}

export default function MainCardSkeleton({
  cantidad,
  customCardStyles,
}: Props) {
  const cantidadCards = Array(cantidad).fill(null);

  return cantidadCards.map((_, i) => (
    <div
      key={i}
      className={`h-[62vw] sm:h-[43vw] md:h-[30vw] lg:h-[19.7vw] 2xl:h-[14vw] rounded-xl bg-secondary-black p-1 ${customCardStyles}`}
    >
      <Skeleton className="w-full h-full rounded-xl"></Skeleton>
    </div>
  ));
}
