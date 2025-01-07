import AnimeMainContainer from "@/components/containers/page-detalle/anime-main-container";
import HeaderDetalle from "@/components/pageDetalle/DetalleAnime/HeaderDetalle";
import SectionVideos from "@/components/pageDetalle/DetalleAnime/SectionVideos";
import SectionHero from "@/components/pageDetalle/DetalleAnime/SectionHero";
import HeroSkeleton from "@/components/skeletons/pageDetalle/HeroSkeleton";
import { BASE_URL_ANIME } from "@/constants";
import fetchData from "@/services/fetchData";
import { FetchAnime } from "@/types/fetchTypes";
import { Metadata } from "next";
import { Suspense } from "react";

interface Props {
  children: React.ReactNode;
  params: Promise<{ [key: string]: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id;
  const { data } = await fetchData<FetchAnime>(`${BASE_URL_ANIME}/${id}/full`);
  return {
    title: {
      default: data.title + " — Odyssey",
      template: data.title + " %s" + " — Odyssey",
    },
  };
}

export default async function AnimeLayout({ children, params }: Props) {
  const id = (await params).id;
  return (
    <AnimeMainContainer>
      <Suspense fallback={<HeroSkeleton />}>
        <SectionHero id={id} />
      </Suspense>
      <SectionVideos id={id} />
      <HeaderDetalle id={id} />
      {children}
    </AnimeMainContainer>
  );
}
