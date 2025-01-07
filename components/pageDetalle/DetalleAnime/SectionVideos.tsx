import VideoCard from "@/components/cards/VideoCard";
import { BASE_URL_ANIME } from "@/constants";
import fetchData from "@/services/fetchData";
import { FetchAnimeMedia } from "@/types/fetchTypes";
import React from "react";

interface Props {
  id: string;
}

export default async function SectionVideos({ id }: Props) {
  const { data } = await fetchData<FetchAnimeMedia>(
    `${BASE_URL_ANIME}/${id}/videos`
  );
  const mainTrailers = data.promo.slice(0, 12);
  const mainExtra = data.music_videos.slice(0, 12);
  const longitudMedia = mainTrailers.length + mainExtra.length;
  return (
    <>
      {longitudMedia >= 1 && (
        <section className="w-[100%] hidden md:block max-w-[1440px] mx-auto overflow-hidden">
          <div
            className={`contenido flex gap-4 max-w-7xl overflow-y-hidden w-full custom-scroll ${
              longitudMedia >= 4 && longitudMedia < 6
                ? "md:overflow-x-scroll xl:overflow-x-hidden pb-4"
                : longitudMedia >= 6
                ? "md:overflow-x-scroll pb-4"
                : "overflow-x-hidden"
            }`}
          >
            {mainTrailers.map((item, i) => (
              <VideoCard
                key={`${item.trailer.youtube_id}${i}`}
                id={item.trailer.youtube_id}
                imagen={item.trailer.images.medium_image_url}
                videoUrl={item.trailer.embed_url}
                tipoDeVideo={item.title}
                customStyles="md:max-w-[180px] md:h-[127px] lg:h-[155px] xl:h-[159px] md:min-w-[180px] lg:max-w-[230px] lg:min-w-[230px] w-full"
                customStylesImage="h-[99px] lg:h-[127px]"
              />
            ))}
            {mainExtra.map((item, i) => (
              <VideoCard
                key={`${item.video.youtube_id}${i}`}
                id={item.video.youtube_id}
                imagen={item.video.images.medium_image_url}
                videoUrl={item.video.embed_url}
                tipoDeVideo={item.title}
                customStyles="md:max-w-[180px] md:min-w-[180px] lg:max-w-[230px] lg:min-w-[230px] w-full"
                customStylesImage="h-[99px] lg:h-[127px]"
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
