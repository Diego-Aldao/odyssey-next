import { Skeleton } from "@nextui-org/skeleton";
import React from "react";

interface Props {
  cantidad: number;
  customCardStyles?: string;
}

export default function RankCardSkeleton({
  cantidad,
  customCardStyles,
}: Props) {
  const cantidadCards = Array(cantidad).fill(null);

  return cantidadCards.map((_, i) => (
    <Skeleton
      key={i}
      className={`-skew-x-12 h-16 rounded-xl bg-secondary-black flex overflow-hidden relative ${customCardStyles}`}
    />
  ));
}
