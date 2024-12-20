import React from "react";
import VideoCardSkeleton from "../cards/VideoCardSkeleton";
import MainSection from "@/components/containers/page-inicio/main-section";
import ListCardSkeleton from "../cards/ListCardSkeleton";

export default function MediaSkeleton() {
  return (
    <>
      <section className="xl:col-span-full xl:col-start-1 xl:row-start-1 w-[100%] hidden md:block max-w-[1440px] mx-auto overflow-hidden">
        <div className="contenido flex gap-4 max-w-7xl w-full">
          <VideoCardSkeleton
            cantidad={4}
            customCardStyles="w-full max-h-[159px]"
          />
        </div>
      </section>
      <MainSection
        tituloSeccion="episodios"
        customStyles="row-start-2 md:row-start-3 xl:col-start-2 xl:row-start-3 xl:!text-lg"
      >
        <div className="grid gap-4 px-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1">
          <ListCardSkeleton cantidad={6} />
        </div>
      </MainSection>
    </>
  );
}
