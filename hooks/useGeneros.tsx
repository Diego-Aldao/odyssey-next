"use client";
import { LocalMainGenero } from "@/types/localTypes";
import { useState } from "react";
import { LISTADO_MAIN_GENEROS } from "@/constants";

export default function useGeneros() {
  const [currentGenero, setCurrentGenero] = useState<LocalMainGenero | null>(
    null
  );
  const handleGenero = (id: number) => {
    const generoClickeado = LISTADO_MAIN_GENEROS.filter(
      (genero) => genero.id === id
    )[0];
    setCurrentGenero(generoClickeado);
  };
  return { currentGenero, handleGenero };
}
