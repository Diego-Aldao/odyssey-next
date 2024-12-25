"use client";
import React from "react";
import { Select, SelectItem } from "@nextui-org/select";
import { usePathname, useRouter } from "next/navigation";
import { LISTADO_FILTROS_PAGE_TOPS } from "@/constants";
import { LocalFiltroTop } from "@/types/localTypes";

interface Props {
  searchParamsFilter: string | string[] | undefined;
}

export default function Filtros({ searchParamsFilter }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (filtro: LocalFiltroTop) => {
    if (filtro.value === null) {
      router.push(`${pathname}`, { scroll: false });
    } else {
      router.push(`${pathname}?${filtro.type}=${filtro.value}`, {
        scroll: false,
      });
    }
  };

  return (
    <>
      <ul className="w-full col-span-full hidden lg:flex gap-4 justify-center">
        {LISTADO_FILTROS_PAGE_TOPS.map((filtro) => (
          <li
            key={filtro.nombre}
            className={`py-2 px-3 xl:px-4 cursor-pointer hover:border-main-color border rounded-xl capitalize text-sm font-medium transition-colors ${
              searchParamsFilter === filtro.nombre
                ? "border-main-color bg-main-color text-main-black"
                : "border-main-white/20 bg-main-black text-main-white"
            }`}
            onClick={() => {
              handleClick(filtro);
            }}
          >
            {filtro.nombre}
          </li>
        ))}
      </ul>
      <Select
        label="Filtros"
        className="max-w-[200px] col-span-full lg:hidden"
        size="sm"
        classNames={{
          base: "justify-self-end",
          trigger: "min-h-10 h-10 max-h-10",
        }}
      >
        {LISTADO_FILTROS_PAGE_TOPS.map((filtro) => (
          <SelectItem
            key={filtro.nombre}
            value={filtro.nombre}
            onClick={() => {
              handleClick(filtro);
            }}
          >
            {filtro.nombre}
          </SelectItem>
        ))}
      </Select>
    </>
  );
}
