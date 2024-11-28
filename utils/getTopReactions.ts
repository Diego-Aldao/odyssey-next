import { Reactions } from "@/types/fetchTypes";

interface Reacciones {
  [key: string]: string;
}

export const getTopReactions = (
  reacciones: Reactions,
  reactionLabels: Reacciones
) => {
  const keysOrdenadas = Object.entries(reacciones)
    .sort(([, valueA], [, valueB]) => valueB - valueA) // Ordenar por valor
    .map(([key]) => key);
  const topThreeLabels = keysOrdenadas
    .slice(1, 4)
    .map((key) => reactionLabels[key]);
  return topThreeLabels;
};
