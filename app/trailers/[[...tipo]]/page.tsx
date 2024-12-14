import PagesNavigationMainContainer from "@/components/containers/pages-navigation/pages-navigation-main-container";
import MainTitulo from "@/components/MainTitulo";
import PagesNavigationFiltros from "@/components/PagesNavigationFiltros";
import MainContentTrailers from "@/components/pageTrailers/MainContentTrailers";
import VideoCardSkeleton from "@/components/skeletons/cards/VideoCardSkeleton";
import React, { Suspense } from "react";

interface Props {
  params: { [key: string]: string[] };
}

export default function PageTrailers({ params }: Props) {
  const { tipo } = params;
  return (
    <PagesNavigationMainContainer>
      <MainTitulo titulo="trailers" />
      <section className="flex flex-col gap-8">
        <PagesNavigationFiltros tipo={tipo} baseDestino="trailers" />
        <div className="grid gap-8 xl:gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          <Suspense fallback={<VideoCardSkeleton cantidad={12} />}>
            <MainContentTrailers tipo={tipo} />
          </Suspense>
        </div>
      </section>
    </PagesNavigationMainContainer>
  );
}
