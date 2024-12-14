import BackButton from "@/components/buttons/BackButton";
import MainSection from "@/components/containers/page-inicio/main-section";
import ListadoEpisodiosAnimeID from "@/components/pageDetalle/EpisodiosAnimeID/ListadoEpisodiosAnimeID";
import SkewCardSkeleton from "@/components/skeletons/cards/SkewCardSkeleton";
import React, { Suspense } from "react";

interface Props {
  params: { [key: string]: string };
}

export default function PageEpisodios({ params }: Props) {
  const { id } = params;
  return (
    <div className="max-w-[1440px] w-full mx-auto lg:mt-40">
      <MainSection
        tituloSeccion="episodios"
        customStyles="row-start-2 md:row-start-3 xl:col-start-2 xl:row-start-3 xl:!text-lg"
      >
        <div className="grid gap-4 px-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Suspense fallback={<SkewCardSkeleton cantidad={12} />}>
            <ListadoEpisodiosAnimeID id={id} />
          </Suspense>
        </div>
      </MainSection>
      <BackButton
        destino={`/anime/${id}`}
        nombre="ver la información completa"
      />
    </div>
  );
}
