import fetchData from "@/services/fetchData";
import { FetchCharacterPictures } from "@/types/fetchTypes";
import Image from "next/image";
import React from "react";

interface Props {
  url: string;
}

export default async function SectionImagenes({ url }: Props) {
  const { data } = await fetchData<FetchCharacterPictures>(url);
  return (
    <div className="hidden md:flex gap-4 pointer-events-none absolute grayscale opacity-10 top-0 pt-10 pb-20 w-full  justify-center overflow-hidden">
      {data.slice(0, 10).map((imagen, i) => (
        <div
          className={`imagen w-[150px] min-w-[150px] lg:w-[170px] lg:min-w-[170px] xl:w-[200px] xl:min-w-[200px] rounded-md overflow-hidden ${
            i % 2 === 0 ? "mt-10" : "mb-10"
          }`}
          key={i}
        >
          <Image
            src={imagen.jpg.image_url}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="scale-105"
          />
        </div>
      ))}
    </div>
  );
}
