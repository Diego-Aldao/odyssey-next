import { Skeleton } from "@nextui-org/skeleton";
import React from "react";

interface Props {
  cantidad: number;
}

export default function SkewCardSkeleton({ cantidad }: Props) {
  const cantidadCards = Array(cantidad).fill(null);
  return (
    <>
      {cantidadCards.map((_, i) => (
        <Skeleton
          key={i}
          className="-skew-x-[10deg] h-20 xl:h-24 bg-secondary-black w-full rounded-xl"
        />
      ))}
    </>
  );
}
