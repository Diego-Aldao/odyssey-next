import ReviewCard from "@/components/cards/ReviewCard";
import NoData from "@/components/errors/NoData";
import { BASE_URL_ANIME } from "@/constants";
import fetchData from "@/services/fetchData";
import { FetchAnimeReviews } from "@/types/fetchTypes";
import React from "react";

interface Props {
  id: string;
}

export default async function ListadoReviews({ id }: Props) {
  const { data } = await fetchData<FetchAnimeReviews>(
    `${BASE_URL_ANIME}/${id}/reviews`
  );
  return (
    <>
      {data && data.length >= 1 && (
        <>
          {data.map((review) => (
            <ReviewCard
              key={review.mal_id}
              imagen={review.user.images.webp.image_url}
              usuario={review.user.username}
              tags={review.tags}
              review={review.review}
              reacciones={review.reactions}
              reaccionesTotales={review.reactions.overall}
            />
          ))}
        </>
      )}

      {data && data.length === 0 && <NoData />}
    </>
  );
}
