import React from "react";
import VideoCardSkeleton from "../cards/VideoCardSkeleton";

export default function VideosSkeleton() {
  return (
    <section className="xl:col-span-full xl:col-start-1 xl:row-start-1 w-[100%] hidden md:block max-w-[1440px] mx-auto overflow-hidden">
      <div className="contenido flex gap-4 max-w-7xl w-full">
        <VideoCardSkeleton
          cantidad={4}
          customCardStyles="w-full max-h-[159px]"
        />
      </div>
    </section>
  );
}
