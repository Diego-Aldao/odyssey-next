import {
  LocalFullGenero,
  LocalMainGenero,
  LocalTemporada,
  LocalTipoDeAnime,
} from "./types/localTypes";

export const LISTADO_TEMPORADAS: LocalTemporada[] = [
  {
    nombre: "temporada actual",
    nombreApi: null,
    añoApi: "now",
  },
  {
    nombre: "invierno 2025",
    nombreApi: "winter",
    añoApi: 2025,
  },
  {
    nombre: "primavera 2025",
    nombreApi: "spring",
    añoApi: 2025,
  },
  {
    nombre: "proximas temporadas",
    nombreApi: null,
    añoApi: "upcoming",
  },
];

export const LISTADO_TIPOS_ANIMES: LocalTipoDeAnime[] = [
  {
    id: 1,
    nombre: "todos",
    nombreApi: null,
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

export const LISTADO_ALL_GENEROS: LocalFullGenero[] = [
  {
    id: 1,
    nombre: "Acción",
    cantidad: 5340,
  },
  {
    id: 2,
    nombre: "Aventura",
    cantidad: 4228,
  },
  {
    id: 46,
    nombre: "Ganador De Premios",
    cantidad: 254,
  },
  {
    id: 4,
    nombre: "Comedia",
    cantidad: 7526,
  },
  {
    id: 8,
    nombre: "Drama",
    cantidad: 3003,
  },
  {
    id: 10,
    nombre: "Fantasía",
    cantidad: 5754,
  },
  {
    id: 14,
    nombre: "Horror",
    cantidad: 570,
  },
  {
    id: 7,
    nombre: "Mysterio",
    cantidad: 956,
  },
  {
    id: 22,
    nombre: "Romance",
    cantidad: 2094,
  },
  {
    id: 24,
    nombre: "Sci-Fi",
    cantidad: 3368,
  },
  {
    id: 30,
    nombre: "Deporte",
    cantidad: 791,
  },
  {
    id: 37,
    nombre: "Supernatural",
    cantidad: 1494,
  },
  {
    id: 41,
    nombre: "Suspenso",
    cantidad: 439,
  },
  {
    id: 9,
    nombre: "Ecchi",
    cantidad: 813,
  },
  {
    id: 51,
    nombre: "Antropomórfico",
    cantidad: 1107,
  },
  {
    id: 39,
    nombre: "Detective",
    cantidad: 311,
  },
  {
    id: 58,
    nombre: "Gore",
    cantidad: 270,
  },
  {
    id: 35,
    nombre: "Harem",
    cantidad: 476,
  },
  {
    id: 13,
    nombre: "Historico",
    cantidad: 1631,
  },
  {
    id: 62,
    nombre: "Isekai",
    cantidad: 406,
  },
  {
    id: 18,
    nombre: "Mecha",
    cantidad: 1292,
  },
  {
    id: 38,
    nombre: "Militar",
    cantidad: 724,
  },
  {
    id: 19,
    nombre: "Musical",
    cantidad: 4715,
  },
  {
    id: 20,
    nombre: "Parodia",
    cantidad: 790,
  },
  {
    id: 40,
    nombre: "Psicológico",
    cantidad: 431,
  },
  {
    id: 23,
    nombre: "Escolar",
    cantidad: 2151,
  },
  {
    id: 42,
    nombre: "Seinen",
    cantidad: 1049,
  },
  {
    id: 27,
    nombre: "Shounen",
    cantidad: 2042,
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

export const BASE_URL_PERSONA: string = "https://api.jikan.moe/v4/people";

export const BASE_URL_REVIEWS: string =
  "https://api.jikan.moe/v4/reviews/anime";

export const LISTADO_ID_ANIME_RANDOM = [
  58572, 55855, 49073, 15227, 55774, 56845, 53590, 2402, 49757, 50306, 53633,
  54301, 56894, 48780, 54857, 55102, 55701, 58516, 54853, 54865, 55973, 52742,
];

export const LISTADO_NAVEGACION = [
  {
    id: 1,
    nombre: "últimos episodios",
    link: "/episodios",
  },
  {
    id: 2,
    nombre: "anime de temporada",
    link: "/temporadas/now",
  },
  {
    id: 3,
    nombre: "tops",
    link: "/tops",
  },
  {
    id: 4,
    nombre: "trailers",
    link: "/trailers",
  },
];

export const LISTADO_NAVEGACION_FOOTER = [
  {
    titulo: "categorías",
    id: 1,
    contenido: [
      {
        id: 1,
        nombre: "trailers",
        link: "/trailers",
      },
      {
        id: 2,
        nombre: "temporadas",
        link: "/temporadas",
      },
      {
        id: 3,
        nombre: "tops",
        link: "/tops",
      },
      {
        id: 4,
        nombre: "episodios",
        link: "/episodios",
      },
    ],
  },
  {
    titulo: "más buscado",
    id: 2,
    contenido: [
      {
        id: 1,
        nombre: "shingeki no kyojin",
        link: "/anime/16498",
      },
      {
        id: 2,
        nombre: "death note",
        link: "/anime/1535",
      },
      {
        id: 3,
        nombre: "fullmetal alchemist",
        link: "/anime/5114",
      },
      {
        id: 4,
        nombre: "one punch man",
        link: "/anime/30276",
      },
    ],
  },
  {
    titulo: "temporadas",
    id: 3,
    contenido: [
      {
        id: 1,
        nombre: "invierno 2024",
        link: "/temporadas/2024/winter",
      },
      {
        id: 2,
        nombre: "primavera 2025",
        link: "/temporadas/2025/spring",
      },
      {
        id: 3,
        nombre: "verano 2025",
        link: "/temporadas/2025/summer",
      },
      {
        id: 4,
        nombre: "otoño 2025",
        link: "/temporadas/2025/fall",
      },
    ],
  },
  {
    titulo: "media",
    id: 4,
    contenido: [
      {
        id: 1,
        nombre: "ultimos episodios",
        link: "/episodios",
      },
      {
        id: 2,
        nombre: "mejores episodios",
        link: "/episodios/popular",
      },
      {
        id: 3,
        nombre: "ultimos trailers",
        link: "/trailers",
      },
      {
        id: 4,
        nombre: "mejores trailers",
        link: "/trailers/popular",
      },
    ],
  },
];

export const LISTADO_FILTROS_PAGES_NAVIGATION = [
  {
    id: 1,
    nombre: "recientes",
    nombreApi: null,
  },
  {
    id: 2,
    nombre: "populares",
    nombreApi: "popular",
  },
];
