import ReviewCard from "@/components/cards/ReviewCard";
import { BASE_URL_ANIME } from "@/constants";
import fetchData from "@/services/fetchData";
import { FetchAnimeReviews } from "@/types/fetchTypes";
import React from "react";

interface Props {
  id: string;
  full?: boolean;
}

export default async function ListadoReviews({ id, full }: Props) {
  const { data } = await fetchData<FetchAnimeReviews>(
    `${BASE_URL_ANIME}/${id}/reviews`
  );
  const reviews = full ? data : data.slice(0, 3);
  return (
    <>
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
    </>
  );
}
