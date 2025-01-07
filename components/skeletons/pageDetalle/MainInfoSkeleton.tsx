import { Skeleton } from "@nextui-org/skeleton";
import React from "react";

export default function MainInfoSkeleton() {
  const arraySkeletons = Array(4).fill(0);
  return (
    <div className="flex flex-col gap-4 w-full max-w-[1440px] mx-auto md:items-center md:gap-8">
      <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-x-2 w-full items-center">
        {arraySkeletons.map((_, i) => (
          <li key={i} className="flex flex-col gap-1 lg:items-center">
            <Skeleton className="w-[100px] h-[10px]" />
            <Skeleton className="w-[120px] h-[20px] lg:w-[150px] lg:h-[40px] xl:w-[200px]" />
          </li>
        ))}
      </ul>
    </div>
  );
}
