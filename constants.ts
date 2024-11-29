import {
  LocalMainGenero,
  LocalTemporada,
  LocalTipoDeAnime,
} from "./types/localTypes";

export const LISTADO_TEMPORADAS: LocalTemporada[] = [
  {
    id: 1,
    nombre: "invierno '25",
    nombreApi: "winter",
    añoApi: 2025,
    icono: "icon-[emojione-monotone--snowflake]",
  },
  {
    id: 2,
    nombre: "primavera '25",
    nombreApi: "spring",
    añoApi: 2025,
    icono: "icon-[emojione-monotone--cherry-blossom]",
  },
  {
    id: 3,
    nombre: "verano '25",
    nombreApi: "summer",
    añoApi: 2025,
    icono: "icon-[emojione-monotone--sun]",
  },
  {
    id: 4,
    nombre: "otoño '25",
    nombreApi: "fall",
    añoApi: 2025,
    icono: "icon-[emojione-monotone--maple-leaf]",
  },
];

export const LISTADO_TIPOS_ANIMES: LocalTipoDeAnime[] = [
  {
    id: 1,
    nombre: "todos",
  },
  {
    id: 2,
    nombre: "tv",
    nombreApi: "tv",
  },
  {
    id: 3,
    nombre: "peliculas",
    nombreApi: "movie",
  },
  {
    id: 4,
    nombre: "ova",
    nombreApi: "ova",
  },
  {
    id: 5,
    nombre: "especiales",
    nombreApi: "special",
  },
];

export const LISTADO_MAIN_GENEROS: LocalMainGenero[] = [
  {
    id: 1,
    nombre: "acción",
    icono: "icon-[game-icons--broadsword]",
  },
  {
    id: 2,
    nombre: "aventura",
    icono: "icon-[game-icons--open-treasure-chest]",
  },
  {
    id: 4,
    nombre: "comedia",
    icono: "icon-[fa6-solid--face-laugh-beam]",
  },
  {
    id: 8,
    nombre: "drama",
    icono: "icon-[game-icons--drama-masks]",
  },
  {
    id: 10,
    nombre: "fantasia",
    icono: "icon-[game-icons--spell-book]",
  },
  {
    id: 22,
    nombre: "romance",
    icono: "icon-[game-icons--opposite-hearts]",
  },
  {
    id: 30,
    nombre: "deportes",
    icono: "icon-[game-icons--soccer-ball]",
  },
  {
    id: 62,
    nombre: "isekai",
    icono: "icon-[game-icons--world]",
  },
  {
    id: 18,
    nombre: "mecha",
    icono: "icon-[game-icons--robot-golem]",
  },
  {
    id: 42,
    nombre: "seinen",
    icono: "icon-[game-icons--fragmented-sword]",
  },
  {
    id: 27,
    nombre: "shounen",
    icono: "icon-[game-icons--mine-explosion]",
  },
];

export const BASE_URL_POPULARES: string =
  "https://api.jikan.moe/v4/anime?type=tv&order_by=popularity&limit=12";

export const BASE_URL_TRAILERS: string =
  "https://api.jikan.moe/v4/watch/promos";

export const BASE_URL_EPISODES: string =
  "https://api.jikan.moe/v4/watch/episodes";

export const BASE_URL_TEMPORADAS: string = "https://api.jikan.moe/v4/seasons";

export const BASE_URL_TOPS: string = "https://api.jikan.moe/v4/top";

export const BASE_URL_ANIME: string = "https://api.jikan.moe/v4/anime";

export const BASE_URL_PERSONAJES: string =
  "https://api.jikan.moe/v4/characters";

export const LISTADO_ID_ANIME_RANDOM = [
  58572, 55855, 49073, 15227, 55774, 56845, 53590, 2402, 49757, 50306, 53633,
  54301, 56894, 48780, 54857, 55102, 55701, 58516, 54853, 54865, 55973, 52742,
];
