import { EpisodiosRecientes } from "@/types/fetchTypes";

export const filtroEpisodiosByRegion = (data: EpisodiosRecientes[]) => {
  const episodiosFiltrados = data.filter(
    (episodios) => !episodios.region_locked
  );
  return episodiosFiltrados;
};
