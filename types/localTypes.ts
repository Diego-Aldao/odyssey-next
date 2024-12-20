export interface LocalTemporada {
  nombre: string;
  nombreApi: string | null;
  añoApi: number | string;
}

export interface LocalMainGenero {
  id: number;
  nombre: string;
  icono: string;
}
export interface LocalFullGenero {
  id: number;
  nombre: string;
  cantidad: number;
}

export interface LocalTipoDeAnime {
  id: number;
  nombre: string;
  nombreApi: string | null;
}
export interface LocalGenero {
  id: number;
  nombre: string;
}

export interface SelectedTrailer {
  titulo: string;
  url: string;
}

export interface LocalItemTraduccion {
  nombre: string;
  color: string;
}

export interface LocalObjetoTraduccion {
  [key: string]: LocalItemTraduccion;
}

export interface SearchParams {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export interface LocalItemCategoria {
  nombreApi: string;
  nombreLocal: string;
}

export interface LocalCategorias {
  [key: string]: LocalItemCategoria;
}
