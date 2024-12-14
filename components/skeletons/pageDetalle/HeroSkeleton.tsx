import { Skeleton } from "@nextui-org/skeleton";
import React from "react";

export default function HeroSkeleton() {
  return (
    <div className="hero h-[600px] md:h-[550px] xl:h-[650px] w-full flex flex-col items-start gap-4 justify-end max-w-[1440px] mx-auto lg:relative">
      <Skeleton className="upper-info w-full max-w-[200px] h-4 rounded-xl" />
      <Skeleton className="upper-info w-full h-10 rounded-xl max-w-[500px] lg:max-w-[700px] xl:max-w-[800px] lg:h-16" />
      <ul className="generos flex gap-2 flex-wrap">
        {Array(3)
          .fill(null)
          .map((_, i) => (
            <Skeleton key={i} className="genero rounded-full h-6 w-[100px]" />
          ))}
      </ul>
      <div className="sinopsis flex flex-col gap-2 w-full">
        {Array(6)
          .fill(null)
          .map((_, i) => (
            <Skeleton
              key={i}
              className="h-4 w-full rounded-xl max-w-[400px] lg:max-w-[500px] xl:max-w-[700px]"
            />
          ))}
      </div>
    </div>
  );
}
