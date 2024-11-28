import MainSection from "@/components/containers/page-inicio/main-section";
import { BASE_URL_ANIME } from "@/constants";
import fetchData from "@/services/fetchData";
import { FetchAnimeReviews } from "@/types/fetchTypes";
import { getTopReactions } from "@/utils/getTopReactions";
import Image from "next/image";
import React from "react";

interface Props {
  id: string;
}

interface Reacciones {
  [key: string]: string;
}

const reactionLabels: Reacciones = {
  overall: "General",
  nice: "icon-[emojione-monotone--ok-hand]",
  love_it: "icon-[emojione-monotone--red-heart]",
  funny:
    "icon-[emojione-monotone--smiling-face-with-open-mouth-and-closed-eyes]",
  confusing: "icon-[emojione-monotone--confused-face]",
  informative: "icon-[emojione-monotone--light-bulb]",
  well_written: "icon-[emojione-monotone--writing-hand]",
  creative: "icon-[emojione-monotone--artist-palette]",
};

export default async function SectionReviews({ id }: Props) {
  const { data } = await fetchData<FetchAnimeReviews>(
    `${BASE_URL_ANIME}/${id}/reviews`
  );

  return (
    <MainSection
      asideSection={true}
      tituloSeccion="reviews"
      customStyles="row-start-5 md:row-start-6 xl:row-start-4 xl:col-start-2"
      destino={`/anime/${id}/reviews`}
      nombreDestino="ver todas"
    >
      <div className="grid md:grid-cols-2 xl:grid-cols-1 gap-8">
        {data.slice(0, 4).map((review) => (
          <div
            className="review grid grid-cols-[50px,1fr] gap-2"
            key={review.mal_id}
          >
            <div className="usuario w-full h-fit rounded-md border border-secondary-white overflow-hidden">
              <Image
                src={review.user.images.webp.image_url}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <div className="info flex flex-col gap-2">
              <header className="flex flex-col gap-2">
                <span className="nombre-usuario text-sm font-montserrat font-semibold">
                  {review.user.username}
                </span>
                <ul className="tags flex flex-wrap gap-2 items-center">
                  {review.tags.map((reaccion) => (
                    <span
                      className="tag text-xs py-1 px-4 bg-secondary-black rounded-full"
                      key={reaccion}
                    >
                      {reaccion}
                    </span>
                  ))}
                </ul>
              </header>
              <span className="line-clamp-4 text-xs text-secondary-white">
                {review.review}
              </span>
              <div className="reacciones flex gap-2 items-center">
                <ul className="flex items-center gap-1">
                  {getTopReactions(review.reactions, reactionLabels).map(
                    (topReaction, i) => (
                      <span key={i} className={`${topReaction} h-5 w-5`}></span>
                    )
                  )}
                </ul>
                <span className="font-montserrat text-xs font-semibold">
                  {review.reactions.overall}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </MainSection>
  );
}
