import { BASE_URL_ANIME } from "@/constants";
import fetchData from "@/services/fetchData";
import { FetchAnimePictures } from "@/types/fetchTypes";
import Image from "next/image";
import React from "react";

interface Props {
  id: string;
}

export default async function ImagesDetalle({ id }: Props) {
  const { data } = await fetchData<FetchAnimePictures>(
    `${BASE_URL_ANIME}/${id}/pictures`
  );
  return (
    <div className="hidden lg:flex gap-4 pointer-events-none absolute grayscale opacity-10 top-20 xl:top-36 pt-10 pb-20 w-full justify-center overflow-hidden">
      {data.slice(0, 7).map((imagen, i) => (
        <div
          className={`imagen w-[150px] min-w-[150px] lg:w-[170px] lg:min-w-[170px] xl:w-[200px] xl:min-w-[200px] rounded-md overflow-hidden ${
            i % 2 === 0 ? "mt-10" : "mb-10"
          }`}
          key={i}
        >
          <Image
            src={imagen.webp.image_url}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="scale-105"
            unoptimized
          />
        </div>
      ))}
    </div>
  );
}
