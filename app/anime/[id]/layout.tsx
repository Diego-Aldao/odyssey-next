import AnimeMainContainer from "@/components/containers/page-detalle/anime-main-container";
import SectionHero from "@/components/pageDetalle/DetalleAnime/SectionHero";
import HeroSkeleton from "@/components/skeletons/pageDetalle/HeroSkeleton";
import { Suspense } from "react";

interface Props {
  children: React.ReactNode;
  params: { [key: string]: string };
}

export default function AnimeLayout({ children, params }: Props) {
  const { id } = params;
  return (
    <AnimeMainContainer>
      <Suspense fallback={<HeroSkeleton />}>
        <SectionHero id={id} />
      </Suspense>
      {children}
    </AnimeMainContainer>
  );
}
