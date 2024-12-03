export interface LocalTemporada {
  id: number;
  nombre: string;
  nombreApi: string;
  añoApi: number;
  icono: string;
}

export interface LocalMainGenero {
  id: number;
  nombre: string;
  icono: string;
}

export interface LocalTipoDeAnime {
  id: number;
  nombre: string;
  nombreApi?: string;
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
