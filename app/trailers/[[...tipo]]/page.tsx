import VideoCard from "@/components/cards/VideoCard";
import PagesNavigationMainContainer from "@/components/containers/pages-navigation/pages-navigation-main-container";
import MainTitulo from "@/components/MainTitulo";
import PagesNavigationFiltros from "@/components/PagesNavigationFiltros";
import { BASE_URL_TRAILERS } from "@/constants";
import fetchData from "@/services/fetchData";
import { FetchTrailers } from "@/types/fetchTypes";
import React from "react";

interface Props {
  params: { [key: string]: string[] };
}

export default async function PageTrailers({ params }: Props) {
  const { tipo } = params;
  const urlTipo = tipo?.includes("popular") ? `/${tipo}` : "";
  const { data } = await fetchData<FetchTrailers>(
    `${BASE_URL_TRAILERS}${urlTipo}`
  );
  return (
    <PagesNavigationMainContainer>
      <MainTitulo titulo="trailers" />
      <section className="flex flex-col gap-8">
        <PagesNavigationFiltros tipo={tipo} baseDestino="trailers" />
        <div className="grid gap-8 xl:gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {data.map((trailer) => (
            <VideoCard
              id={trailer.entry.mal_id}
              key={trailer.entry.mal_id}
              nombreAnime={trailer.entry.title}
              tipoDeVideo={trailer.title}
              imagen={trailer.trailer.images.medium_image_url}
              videoUrl={trailer.trailer.embed_url}
            />
          ))}
        </div>
      </section>
    </PagesNavigationMainContainer>
  );
}
