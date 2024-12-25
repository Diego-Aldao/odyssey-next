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
    <div className="max-w-[1440px] w-full mx-auto lg:mt-40">
      <MainSection
        tituloSeccion="episodios"
        customStyles="row-start-2 md:row-start-3 xl:col-start-2 xl:row-start-3 xl:!text-lg"
      >
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
