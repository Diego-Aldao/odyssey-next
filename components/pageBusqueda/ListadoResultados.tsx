import { BASE_URL, LISTADO_CATEGORIAS_BUSQUEDA } from "@/constants";
import ListadoAnime from "./ListadoAnime";
import ListadoPersonajes from "./ListadoPersonajes";
import ListadoPersonas from "./ListadoPersonas";

interface Props {
  query: string;
  categoria: string;
  page: string;
  genero: string;
}

export default async function ListadoResultados({
  query,
  categoria,
  page,
  genero,
}: Props) {
  const categoriaApi = LISTADO_CATEGORIAS_BUSQUEDA[categoria].nombreApi;
  const pagina = page ? `&page=${page}` : "";
  const urlBusqueda = `${BASE_URL}/${categoriaApi}?q=${query}&order_by=favorites&sort=desc&limit=24${pagina}`;
  const urlGenero = `${BASE_URL}/anime?genres=${genero}&order_by=favorites&sort=desc&limit=24${pagina}`;

  switch (categoria) {
    case "anime":
      return (
        <ListadoAnime
          url={genero ? urlGenero : urlBusqueda}
          query={query}
          categoria={categoria}
          page={page}
          genero={genero}
        />
      );
    case "personajes":
      return (
        <ListadoPersonajes
          url={urlBusqueda}
          query={query}
          categoria={categoria}
          page={page}
        />
      );

    case "personas":
      return (
        <ListadoPersonas
          url={urlBusqueda}
          query={query}
          categoria={categoria}
          page={page}
        />
      );
  }
}
