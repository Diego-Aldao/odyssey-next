import { Skeleton } from "@nextui-org/skeleton";
import React from "react";
import SkewCardSkeleton from "./cards/SkewCardSkeleton";

export default function PageIndividuosSkeleton() {
  return (
    <main className="w-full h-fit px-2 md:px-8 lg:px-10 md:gap-8 xl:gap-12 2xl:px-0 mx-auto max-w-[1440px] grid md:grid-cols-[1fr,2.5fr] lg:grid-cols-[250px,1fr] xl:grid-cols-[300px,1fr] md:pt-56">
      <div className="h-[140vw] max-h-[600px] md:hidden"></div>
      <div className="left-info gap-8 flex-col hidden md:flex">
        <Skeleton className="w-full h-[300px] lg:h-[400px] rounded-xl" />
        <div className="flex flex-col gap-2">
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <Skeleton key={i} className="w-full h-8 rounded-xl" />
            ))}
        </div>
      </div>
      <div className="right-info flex flex-col gap-8">
        <div className="main-info flex flex-col items-center md:items-start gap-8">
          <Skeleton className="w-[280px] h-10  md:w-full md:max-w-[600px] md:h-12 xl:h-16 rounded-xl" />
          <div className="grid grid-cols-2 w-full xl:grid-cols-3 justify-items-center md:justify-items-start">
            <Skeleton className="w-[80%] max-w-[300px] h-10 rounded-xl" />
            <Skeleton className="w-[80%] max-w-[300px] h-10 rounded-xl" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Skeleton className="w-[200px] h-8" />
          <div className="flex flex-col gap-2">
            {Array(6)
              .fill(null)
              .map((_, i) => (
                <Skeleton
                  key={i}
                  className="w-full max-w-[500px] xl:max-w-[700px] h-4"
                />
              ))}
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <Skeleton className="w-[200px] h-8" />
          <div className="grid sm:grid-cols-2 gap-2">
            <SkewCardSkeleton cantidad={6} />
          </div>
        </div>
      </div>
    </main>
  );
}
