export type FetchEpisodiosRecientes = {
  pagination: Pagination;
  data: EpisodiosRecientes[];
};

export type EpisodiosRecientes = {
  entry: Entry;
  episodes: Entry[];
  region_locked: boolean;
};

export type Entry = {
  mal_id: number;
  url: string;
  images?: { [key: string]: Image };
  title: string;
  premium?: boolean;
};

export type Image = {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
};

export type Pagination = {
  last_visible_page: number;
  has_next_page: boolean;
};

export type FetchTemporadas = {
  pagination: PaginationComplete;
  data: Temporada[];
};

export type Temporada = {
  mal_id: number;
  url: string;
  images: { [key: string]: Image };
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: null | string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number | null;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: number | null;
  scored_by: number | null;
  rank: number | null;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: "fall" | null;
  year: number | null;
  broadcast: Broadcast;
  producers: Demographic[];
  licensors: Demographic[];
  studios: Demographic[];
  genres: Demographic[];
  explicit_genres: [];
  themes: Demographic[];
  demographics: Demographic[];
};

export type Aired = {
  from: Date;
  to: Date | null;
  prop: Prop;
  string: string;
};

export type Prop = {
  from: From;
  to: From;
};

export type From = {
  day: number | null;
  month: number | null;
  year: number | null;
};

export type Broadcast = {
  day: null | string;
  time: null | string;
  timezone: string | null;
  string: null | string;
};

export type Demographic = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

export type Title = {
  type: string;
  title: string;
};

export type Trailer = {
  youtube_id: null | string;
  url: null | string;
  embed_url: null | string;
  images: ImagesTrailer;
};

export type ImagesTrailer = {
  image_url: null | string;
  small_image_url: null | string;
  medium_image_url: null | string;
  large_image_url: null | string;
  maximum_image_url: null | string;
};

export type PaginationComplete = {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: Items;
};

export type Items = {
  count: number;
  total: number;
  per_page: number;
};

export type FetchTops = {
  pagination: PaginationComplete;
  data: TopEmision[];
};

export type TopEmision = {
  mal_id: number;
  url: string;
  images: { [key: string]: Image };
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: null | string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number | null;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string | null;
  year: number | null;
  broadcast: Broadcast;
  producers: Demographic[];
  licensors: Demographic[];
  studios: Demographic[];
  genres: Demographic[];
  explicit_genres: [];
  themes: Demographic[];
  demographics: Demographic[];
};

export type FetchPopulares = {
  pagination: PaginationComplete;
  data: Populares[];
};

export type Populares = {
  mal_id: number;
  url: string;
  images: { [key: string]: Image };
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: "TV";
  source: string;
  episodes: number | null;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: Broadcast;
  producers: Demographic[];
  licensors: Demographic[];
  studios: Demographic[];
  genres: Demographic[];
  explicit_genres: [];
  themes: Demographic[];
  demographics: Demographic[];
};

export type FetchTrailers = {
  pagination: Pagination;
  data: VideoTrailer[];
};

export type VideoTrailer = {
  title: string;
  entry: Entry;
  trailer: Trailer;
};

export type FetchAnime = {
  data: Anime;
};

export type Anime = {
  mal_id: number;
  url: string;
  images: { [key: string]: Image };
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: [];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: Broadcast;
  producers: Genre[];
  licensors: [];
  studios: Genre[];
  genres: Genre[];
  explicit_genres: [];
  themes: Genre[];
  demographics: [];
};

export type Genre = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

export type FetchAnimeEpisodes = {
  pagination: Pagination;
  data: AnimeEpisode[];
};

export type AnimeEpisode = {
  mal_id: number;
  url: string;
  title: string;
  title_japanese: string;
  title_romanji: string;
  aired: Date;
  score: number;
  filler: boolean;
  recap: boolean;
  forum_url: string;
};

export type FetchAnimeCharacters = {
  data: AnimeCharacter[];
};

export type AnimeCharacter = {
  character: Character;
  role: string;
  favorites: number;
  voice_actors: VoiceActor[];
};

export type Character = {
  mal_id: number;
  url: string;
  images: CharacterImages;
  name: string;
};

export type CharacterImages = {
  jpg: Jpg;
  webp: Webp;
};

export type Jpg = {
  image_url: string;
};

export type Webp = {
  image_url: string;
  small_image_url: string;
};

export type VoiceActor = {
  person: Person;
  language: string;
};

export type Person = {
  mal_id: number;
  url: string;
  images: PersonImages;
  name: string;
};

export type PersonImages = {
  jpg: Jpg;
};

export type FetchAnimeMedia = {
  data: Media;
};

export type Media = {
  promo: Promo[];
  episodes: Episode[];
  music_videos: MusicVideo[];
};

export type Episode = {
  mal_id: number;
  title: string;
  episode: string;
  url: string;
  images: EpisodeImages;
};

export type EpisodeImages = {
  jpg: Jpg;
};

export type MusicVideo = {
  title: string;
  video: Video;
  meta: Meta;
};

export type Meta = {
  title: null | string;
  author: null | string;
};

export type Video = {
  youtube_id: string;
  url: string;
  embed_url: string;
  images: VideoImages;
};

export type VideoImages = {
  image_url: string;
  small_image_url: string;
  medium_image_url: string;
  large_image_url: string;
  maximum_image_url: string;
};

export type Promo = {
  title: string;
  trailer: Video;
};

export type FetchAnimeEpisodesWithMedia = {
  pagination: Pagination;
  data: EpisodesWithMedia[];
};

export type EpisodesWithMedia = {
  mal_id: number;
  title: string;
  episode: string;
  url: string;
  images: Images;
};

export type Images = {
  jpg: Jpg;
};

export type FetchAnimeRecomendations = {
  data: AnimeRecomendation[];
};

export type AnimeRecomendation = {
  entry: EntryRecomendation;
  url: string;
  votes: number;
};

export type EntryRecomendation = {
  mal_id: number;
  url: string;
  images: { [key: string]: Image };
  title: string;
};

export type FetchAnimeStatistics = {
  data: Estadistica;
};

export type Estadistica = {
  watching: number;
  completed: number;
  on_hold: number;
  dropped: number;
  plan_to_watch: number;
  total: number;
  scores: Score[];
};

export type Score = {
  score: number;
  votes: number;
  percentage: number;
};
