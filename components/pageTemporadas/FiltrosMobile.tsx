"use client";
import { LISTADO_TEMPORADAS, LISTADO_TIPOS_ANIMES } from "@/constants";
import { Select, SelectItem } from "@nextui-org/select";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import SelectCustomTemporada from "./SelectCustomTemporada";

export default function FiltrosMobile() {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const currentTemporada = LISTADO_TEMPORADAS.filter(
      (temporada) => temporada.nombre === e.target.value
    )[0];
    if (!currentTemporada) return;
    if (currentTemporada && currentTemporada.nombreApi === null) {
      router.push(`/temporadas/${currentTemporada.añoApi}`);
    } else {
      router.push(
        `/temporadas/${currentTemporada.añoApi}/${currentTemporada.nombreApi}`
      );
    }
  };
  const handleChangeFiltro = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const currentFiltro = LISTADO_TIPOS_ANIMES.filter(
      (filtro) => filtro.nombre === e.target.value
    )[0];
    if (!currentFiltro) return;
    if (currentFiltro.nombreApi === null) {
      router.push(`${pathname}`, { scroll: false });
    } else {
      router.push(`${pathname}?filter=${currentFiltro.nombreApi}`, {
        scroll: false,
      });
    }
  };

  return (
    <div className="filtros-mobile flex flex-wrap items-center justify-between gap-1 gap-y-2 md:hidden ">
      <Select
        label="Temporadas"
        classNames={{
          trigger: "min-h-12 h-12 max-h-12 px-2",
          innerWrapper: "capitalize",
        }}
        popoverProps={{
          classNames: {
            base: "min-w-[190px]",
            content: "capitalize px-0",
          },
        }}
        className="max-w-[170px] min-w-[170px] sm:max-w-[220px] sm:min-w-[220px]"
        onChange={(e) => {
          handleChange(e);
        }}
      >
        {LISTADO_TEMPORADAS.map((temporada) => (
          <SelectItem key={temporada.nombre}>{temporada.nombre}</SelectItem>
        ))}
      </Select>
      <Select
        label="Filtros"
        classNames={{
          trigger: "min-h-12 h-12 max-h-12 px-2",
          innerWrapper: "capitalize",
        }}
        className="max-w-[110px] min-w-[110px] sm:max-w-[140px] sm:min-w-[140px]"
        onChange={(e) => {
          handleChangeFiltro(e);
        }}
        popoverProps={{
          classNames: {
            base: "min-w-[120px]",
            content: "capitalize px-0",
          },
        }}
      >
        {LISTADO_TIPOS_ANIMES.map((tipo) => (
          <SelectItem key={tipo.nombre}>{tipo.nombre}</SelectItem>
        ))}
      </Select>
      <div className="contenedor-custom w-full flex items-center justify-start">
        <SelectCustomTemporada />
      </div>
    </div>
  );
}
