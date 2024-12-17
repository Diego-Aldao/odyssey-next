import { BASE_URL, LISTADO_CATEGORIAS_BUSQUEDA } from "@/constants";
import ListadoAnime from "./ListadoAnime";
import ListadoPersonajes from "./ListadoPersonajes";
import ListadoPersonas from "./ListadoPersonas";

interface Props {
  query: string;
  categoria: string;
  page: string;
}

export default async function ListadoResultados({
  query,
  categoria,
  page,
}: Props) {
  const categoriaApi = LISTADO_CATEGORIAS_BUSQUEDA[categoria].nombreApi;
  const pagina = page ? `&page=${page}` : "";
  const url = `${BASE_URL}/${categoriaApi}?q=${query}&order_by=favorites&sort=desc&limit=24${pagina}`;

  switch (categoria) {
    case "anime":
      return (
        <ListadoAnime
          url={url}
          query={query}
          categoria={categoria}
          page={page}
        />
      );
    case "personajes":
      return (
        <ListadoPersonajes
          url={url}
          query={query}
          categoria={categoria}
          page={page}
        />
      );

    case "personas":
      return (
        <ListadoPersonas
          url={url}
          query={query}
          categoria={categoria}
          page={page}
        />
      );
  }
}
