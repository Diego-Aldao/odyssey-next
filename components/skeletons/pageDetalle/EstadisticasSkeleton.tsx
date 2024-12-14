import { Skeleton } from "@nextui-org/skeleton";
import React from "react";

export default function EstadisticasSkeleton() {
  return (
    <div className="md:row-start-2 xl:col-span-2 max-w-[1440px] mx-auto w-full flex flex-col gap-8 lg:grid lg:grid-cols-[1.2fr, 1fr]">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 lg:col-start-2 gap-2 ">
        {Array(6)
          .fill(null)
          .map((_, i) => (
            <Skeleton key={i} className="w-full h-12 lg:h-20 rounded-xl" />
          ))}
      </div>
      <div className="flex flex-col gap-4 lg:col-start-1 lg:row-start-1 max-w-5xl mx-auto w-full">
        {Array(10)
          .fill(null)
          .map((_, i) => (
            <Skeleton key={i} className="w-full h-4 rounded-full" />
          ))}
      </div>
    </div>
  );
}
