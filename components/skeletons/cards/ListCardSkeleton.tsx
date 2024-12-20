import { Skeleton } from "@nextui-org/skeleton";
import React from "react";

interface Props {
  cantidad: number;
}

export default function ListCardSkeleton({ cantidad }: Props) {
  return (
    <>
      {Array(cantidad)
        .fill(null)
        .map((_, i) => (
          <Skeleton key={i} className="-skew-x-12 h-8 rounded-xl" />
        ))}
    </>
  );
}
