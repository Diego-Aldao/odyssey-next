import VideoCard from "@/components/cards/VideoCard";
import { BASE_URL_ANIME } from "@/constants";
import fetchData from "@/services/fetchData";
import { FetchAnimeMedia } from "@/types/fetchTypes";
import React from "react";
import EpisodiosAnime from "./SectionEpisodios";
import SectionVideos from "./SectionVideos";

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
      <EpisodiosAnime episodios={data.episodes} id={id} />
    </>
  );
}
