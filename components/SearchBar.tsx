"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  customStyles?: string;
}

export default function SearchBar({ customStyles }: Props) {
  const [value, setValue] = useState<string>("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.stopPropagation();
    e.preventDefault();
    router.push(`/busqueda?q=${value}`);
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className={`barra-busqueda flex gap-2 focus has-[input:focus]:border-main-color/50 group/bar transition-colors  rounded-full bg-main-black/20 border border-white/20 backdrop-blur-sm relative z-[2] w-full p-1 ${customStyles}`}
    >
      <button className="flex items-center gap-2 bg-secondary-black rounded-full p-2 h-full hover:bg-main-color group transition-colors group-has-[input:focus]/bar:bg-main-color">
        <span className="icon-[lets-icons--search-alt-light] lg:h-6 lg:w-6 text-main-white group-hover:text-main-black transition-colors group-has-[input:focus]/bar:text-main-black"></span>
      </button>
      <input
        type="search"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="w-full rounded-r-full bg-transparent text-main-white font-semibold px-2 text-sm border-none outline-none placeholder:text-main-white/70 placeholder:font-medium placeholder-shown:text-ellipsis"
        placeholder="Attack on titan, Fullmetal Alchemist..."
      />
    </form>
  );
}
