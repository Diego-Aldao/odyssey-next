"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BASE_URL, LISTADO_CATEGORIAS_BUSQUEDA } from "@/constants";
import ListadoCategorias from "./ListadoCategorias";
import ListadoResultados from "./ListadoResultados";
import useTypingTimeout from "@/hooks/useTypingTimeout";

interface Props {
  customStyles?: string;
  initialType?: string;
}

export default function SearchBar({ customStyles, initialType }: Props) {
  const [value, setValue] = useState<string>("");
  const router = useRouter();
  const [currentTipo, setCurrentTipo] = useState<string>(
    initialType || "anime"
  );
  const [currentUrl, setCurrentUrl] = useState<string>("");
  const { handleTypingTimeout, isTyping } = useTypingTimeout();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.stopPropagation();
    e.preventDefault();
    if (!value) return;
    router.push(`/busqueda/${currentTipo}?q=${value}`);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
    handleTypingTimeout();
  };

  useEffect(() => {
    if (value && !isTyping) {
      const url = `${BASE_URL}/${LISTADO_CATEGORIAS_BUSQUEDA[currentTipo].nombreApi}?q=${value}&order_by=favorites&sort=desc&limit=6`;
      if (url !== currentUrl) {
        setCurrentUrl(url);
      }
    }
  }, [value, isTyping]);

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className={`barra-busqueda flex gap-2 has-[input:focus]:border-main-white/40  transition-colors rounded-full bg-main-black/20 border border-main-white/20 backdrop-blur-sm relative z-[2] w-full p-1 ${customStyles} relative`}
    >
      <ListadoCategorias
        currentTipo={currentTipo}
        setCurrentTipo={setCurrentTipo}
      />
      <input
        type="search"
        value={value}
        onChange={(e) => {
          handleInputChange(e);
        }}
        className="w-full rounded-r-full peer bg-transparent text-main-white font-semibold px-2 text-sm border-none outline-none placeholder:text-main-white/70 placeholder:font-medium placeholder-shown:text-ellipsis"
        placeholder="Attack on titan, Fullmetal Alchemist..."
      />
      <button className="flex items-center bg-secondary-black rounded-full p-2 group hover:bg-main-color transition-colors">
        <span className="icon-[lets-icons--search-alt-light] lg:h-5 lg:w-5 text-main-white group-hover:text-main-black transition-colors"></span>
      </button>
      <ListadoResultados
        currentTipo={currentTipo}
        url={currentUrl}
        value={value}
        isTyping={isTyping}
      />
    </form>
  );
}
