import ReviewCard from "@/components/cards/ReviewCard";
import MainSection from "@/components/containers/page-inicio/main-section";
import { BASE_URL_ANIME } from "@/constants";
import fetchData from "@/services/fetchData";
import { FetchAnimeReviews } from "@/types/fetchTypes";
import React from "react";

interface Props {
  id: string;
  full?: boolean;
  customGridStyles?: string;
}

export default async function SectionReviews({
  id,
  full,
  customGridStyles,
}: Props) {
  const { data } = await fetchData<FetchAnimeReviews>(
    `${BASE_URL_ANIME}/${id}/reviews`
  );
  const reviews = full ? data : data.slice(0, 4);

  return (
    <MainSection
      asideSection={!full}
      tituloSeccion="reviews"
      customStyles={
        full ? "" : "row-start-5 md:row-start-6 xl:row-start-4 xl:col-start-2"
      }
      destino={full ? undefined : `/anime/${id}/reviews`}
      nombreDestino={full ? undefined : "ver todas"}
    >
      <div
        className={`grid grid-cols-1 xl:grid-cols-1 gap-8 ${customGridStyles}`}
      >
        {reviews.map((review) => (
          <ReviewCard
            key={review.mal_id}
            imagen={review.user.images.webp.image_url}
            usuario={review.user.username}
            tags={review.tags}
            review={review.review}
            reacciones={review.reactions}
            reaccionesTotales={review.reactions.overall}
            full={full || false}
          />
        ))}
      </div>
    </MainSection>
  );
}
