import { BASE_URL_ANIME } from "@/constants";
import fetchData from "@/services/fetchData";
import { FetchAnimeMedia } from "@/types/fetchTypes";
import React from "react";
import SectionVideos from "./SectionVideos";
import SectionEpisodios from "./SectionEpisodios";

interface Props {
  id: string;
}

export default async function MediaAnime({ id }: Props) {
  const { data } = await fetchData<FetchAnimeMedia>(
    `${BASE_URL_ANIME}/${id}/videos`
  );

  return (
    <>
      <SectionVideos promo={data.promo} musicVideos={data.music_videos} />
      <SectionEpisodios episodios={data.episodes} id={id} />
    </>
  );
}
