import { BASE_URL_ANIME } from "@/constants";
import fetchData from "@/services/fetchData";
import { FetchAnimeEpisodesWithMedia } from "@/types/fetchTypes";
import React from "react";
import MainSection from "@/components/containers/page-inicio/main-section";
import SkewCard from "@/components/cards/SkewCard";

interface Props {
  id: string;
}

export default async function SectionFullEpisodios({ id }: Props) {
  const { data } = await fetchData<FetchAnimeEpisodesWithMedia>(
    `${BASE_URL_ANIME}/${id}/videos/episodes`
  );
  const episodios = data.reverse();
  return (
    <div className="contenedor max-w-[1440px] w-full mx-auto lg:mt-40">
      <MainSection
        tituloSeccion="episodios"
        customStyles="row-start-2 md:row-start-3 xl:col-start-2 xl:row-start-3 xl:!text-lg"
      >
        <div className="grid gap-4 px-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {episodios.map((episodio) => (
            <SkewCard
              imagen={episodio.images.jpg.image_url}
              customImageStyles="object-[50%,0px] xl:object-[50%,0px]"
              titulo={episodio.title}
              subtitulo={`Episodio ${episodio.mal_id}`}
              destino={""}
              key={episodio.mal_id}
            />
          ))}
        </div>
      </MainSection>
    </div>
  );
}
