import { Select, SelectItem } from "@nextui-org/select";
import React from "react";

interface Props {
  currentTipo: string;
  setCurrentTipo: React.Dispatch<React.SetStateAction<string>>;
}

const tiposDeBusqueda = ["anime", "personajes", "personas"];

export default function ListadoCategorias({
  currentTipo,
  setCurrentTipo,
}: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nuevoValor = e.target.value;
    if (nuevoValor) {
      setCurrentTipo(nuevoValor);
    } else {
      setCurrentTipo("anime");
    }
  };
  return (
    <Select
      onChange={(e) => {
        handleChange(e);
      }}
      placeholder="categoria"
      defaultSelectedKeys={[currentTipo]}
      aria-label="seleccionar tipo de busqueda"
      className="min-w-fit w-[160px] lg:w-[190px]"
      value={currentTipo}
      classNames={{
        innerWrapper: "px-0 w-[75%]",
        trigger:
          "pl-2 pr-0 lg:pl-4 lg:pr-0 rounded-l-3xl rounded-r-xl min-h-8 h-8 lg:min-h-9 lg:h-9",
        value: "text-[10px] uppercase lg:text-[11px]",
        selectorIcon: "end-1",
      }}
      popoverProps={{
        classNames: {
          base: "min-w-[130px]",
        },
      }}
    >
      {tiposDeBusqueda.map((valor) => (
        <SelectItem
          key={valor}
          classNames={{
            title: "text-[10px] uppercase lg:text-[11px]",
            selectedIcon: "w-2 h-2",
          }}
        >
          {valor}
        </SelectItem>
      ))}
    </Select>
  );
}
