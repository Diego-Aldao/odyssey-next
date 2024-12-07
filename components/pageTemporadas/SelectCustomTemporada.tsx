"use client";
import { Select, SelectItem } from "@nextui-org/select";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
interface SelectTemporada {
  nombre: string;
  nombreApi: string;
}

interface SelectedTemporada {
  temporada: string;
  año: string;
}
interface Año {
  name: string;
  value: string;
}

const listadoAños: Año[] = [
  {
    name: "2025",
    value: "2025",
  },
  {
    name: "2024",
    value: "2024",
  },
  {
    name: "2023",
    value: "2023",
  },
  {
    name: "2022",
    value: "2022",
  },
  {
    name: "2021",
    value: "2021",
  },
  {
    name: "2020",
    value: "2020",
  },
  {
    name: "2019",
    value: "2019",
  },
  {
    name: "2018",
    value: "2018",
  },
  {
    name: "2017",
    value: "2017",
  },
  {
    name: "2016",
    value: "2016",
  },
  {
    name: "2015",
    value: "2015",
  },
  {
    name: "2014",
    value: "2014",
  },
  {
    name: "2013",
    value: "2013",
  },
  {
    name: "2012",
    value: "2012",
  },
  {
    name: "2011",
    value: "2011",
  },
  {
    name: "2010",
    value: "2010",
  },
  {
    name: "2009",
    value: "2009",
  },
  {
    name: "2008",
    value: "2008",
  },
  {
    name: "2007",
    value: "2007",
  },
  {
    name: "2006",
    value: "2006",
  },
  {
    name: "2005",
    value: "2005",
  },
  {
    name: "2004",
    value: "2004",
  },
  {
    name: "2003",
    value: "2003",
  },
  {
    name: "2002",
    value: "2002",
  },
  {
    name: "2001",
    value: "2001",
  },
  {
    name: "2000",
    value: "2000",
  },
  {
    name: "1999",
    value: "1999",
  },
  {
    name: "1998",
    value: "1998",
  },
  {
    name: "1997",
    value: "1997",
  },
  {
    name: "1996",
    value: "1996",
  },
  {
    name: "1995",
    value: "1995",
  },
];

const listadoTemporadas: SelectTemporada[] = [
  {
    nombre: "Primavera",
    nombreApi: "spring",
  },
  {
    nombre: "Verano",
    nombreApi: "summer",
  },
  {
    nombre: "Otoño",
    nombreApi: "fall",
  },
  {
    nombre: "Invierno",
    nombreApi: "winter",
  },
];

export default function SelectCustomTemporada() {
  const router = useRouter();

  const [selectedTemporada, setSelectedTemporada] = useState<SelectedTemporada>(
    {
      temporada: "",
      año: "",
    }
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    propiedad: string
  ) => {
    let nuevoValor = e.target.value;
    if (propiedad === "temporada") {
      const temporada = listadoTemporadas.filter(
        (temporada) => temporada.nombre === e.target.value
      )[0];
      nuevoValor = temporada.nombreApi;
    }
    const nuevaSelectedTemporada = {
      ...selectedTemporada,
      [propiedad]: nuevoValor,
    };
    setSelectedTemporada(nuevaSelectedTemporada);
  };

  const handleClick = () => {
    if (selectedTemporada === null) return;
    router.push(
      `/temporadas/${selectedTemporada.año}/${selectedTemporada.temporada}`
    );
  };

  const isButtonDisabled: boolean =
    !selectedTemporada.año || !selectedTemporada.temporada;

  return (
    <li className="gap-1 lg:gap-2 items-center text-xs ml-auto bg-secondary-black min-w-[280px] px-2 rounded-xl py-2 hidden md:flex">
      <Select
        aria-label="select temporada"
        classNames={{
          trigger: "min-h-8 h-8 max-h-8 bg-main-black",
        }}
        className="min-w-[120px] lg:min-w-[140px]"
        placeholder="Temporada"
        onChange={(e) => {
          handleChange(e, "temporada");
        }}
      >
        {listadoTemporadas.map((temporada) => (
          <SelectItem key={temporada.nombre}>{temporada.nombre}</SelectItem>
        ))}
      </Select>
      <span className="text-tertiary-black">|</span>
      <Select
        classNames={{
          trigger: "min-h-8 h-8 max-h-8 px-2 bg-main-black",
        }}
        aria-label="select año"
        className="min-w-[80px] lg:min-w-[100px]"
        placeholder="Año"
        onChange={(e) => {
          handleChange(e, "año");
        }}
      >
        {listadoAños.map((año) => (
          <SelectItem key={año.value}>{año.name}</SelectItem>
        ))}
      </Select>
      <button
        className="flex items-center px-1 gap-2 group disabled:cursor-not-allowed"
        onClick={handleClick}
        disabled={isButtonDisabled}
      >
        <span className="uppercase text-xs font-semibold hidden lg:inline-block group-hover:text-main-color transition-colors group-disabled:text-tertiary-black group-enabled:text-main-white">
          buscar
        </span>
        <span className="icon-[solar--map-arrow-right-broken] group-hover:text-main-color group-disabled:text-tertiary-black group-enabled:text-main-white transition-colors"></span>
      </button>
    </li>
  );
}
