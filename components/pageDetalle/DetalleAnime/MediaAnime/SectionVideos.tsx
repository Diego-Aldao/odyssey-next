import VideoCard from "@/components/cards/VideoCard";
import { MusicVideo, Promo } from "@/types/fetchTypes";
import React from "react";

interface Props {
  promo: Promo[];
  musicVideos: MusicVideo[];
}

export default function SectionVideos({ promo, musicVideos }: Props) {
  const mainTrailers = promo.slice(0, 12);
  const mainExtra = musicVideos.slice(0, 12);
  const longitudMedia = mainTrailers.length + mainExtra.length;
  return (
    <>
      {longitudMedia >= 1 && (
        <section className="xl:col-span-full xl:col-start-1 xl:row-start-1 w-[100%] hidden md:block max-w-[1440px] mx-auto overflow-hidden">
          <div
            className={`contenido flex gap-4 max-w-7xl  w-full custom-scroll ${
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
                nombreAnime={""}
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
