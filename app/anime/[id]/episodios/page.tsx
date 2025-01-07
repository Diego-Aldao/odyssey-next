import BackButton from "@/components/buttons/BackButton";
import MainSection from "@/components/containers/page-inicio/main-section";
import ListadoEpisodiosAnimeID from "@/components/pageDetalle/EpisodiosAnimeID/ListadoEpisodiosAnimeID";
import { Metadata } from "next";

interface Props {
  params: Promise<{ [key: string]: string }>;
  searchParams: Promise<{ [key: string]: string }>;
}

export const metadata: Metadata = {
  title: "Episodios",
};

export default async function PageEpisodios({ params, searchParams }: Props) {
  const id = (await params).id;
  const page = (await searchParams).page;
  return (
    <div className="max-w-[1440px] w-full mx-auto">
      <MainSection tituloSeccion="episodios">
        <div className="grid gap-4 px-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <ListadoEpisodiosAnimeID id={id} page={page} />
        </div>
      </MainSection>
      <BackButton
        destino={`/anime/${id}`}
        nombre="ver la información completa"
      />
    </div>
  );
}
