import { FetchTrailers } from "@/types/fetchTypes";

export const filtroTrailers = (trailers: FetchTrailers) => {
  const palabrasClave = ["trailer", "teaser"];
  const filtrados = trailers.data.filter((trailer) =>
    palabrasClave.some((palabra) =>
      trailer.title.toLowerCase().includes(palabra)
    )
  );
  return filtrados;
};
