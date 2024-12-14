import { Skeleton } from "@nextui-org/skeleton";
import React from "react";

interface Props {
  cantidad: number;
}

export default function ReviewCardSkeleton({ cantidad }: Props) {
  return (
    <>
      {Array(cantidad)
        .fill(null)
        .map((_, i) => (
          <div
            key={i}
            className="review grid md:grid-cols-[50px,1fr] gap-2 h-fit transition-all"
          >
            <Skeleton className="imagen-xl hidden md:block h-[50px] w-[50px] rounded-xl"></Skeleton>
            <div className="info w-full flex flex-col gap-2">
              <div className="header flex gap-2">
                <Skeleton className="imagen h-[50px] w-[50px] rounded-xl md:hidden"></Skeleton>
                <div className="flex flex-col gap-2">
                  <Skeleton className="nombre w-[80px] h-[20px] rounded-xl"></Skeleton>
                  <Skeleton className="tag w-[120px] h-[25px] rounded-xl"></Skeleton>
                </div>
              </div>
              {Array(6)
                .fill(null)
                .map((item) => (
                  <Skeleton
                    key={item}
                    className="w-full h-[15px] rounded-xl max-w-5xl"
                  ></Skeleton>
                ))}
              <Skeleton className="interacciones w-[150px] h-[20px] rounded-xl"></Skeleton>
            </div>
          </div>
        ))}
    </>
  );
}
