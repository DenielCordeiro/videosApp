/*
export interface IFilmeApi {
  poster_path?: string;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  genre_ids?: number[];
  id?: number;
  original_title?: string;
  original_language?: string;
  title?: string;
  backdrop_path?: string;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
}

export interface IlistaFilmes {
  page: number;
  results: IFilmeApi[];
  total_results: number;
  total_pages: number;
}
*/

/* eslint-disable @typescript-eslint/naming-convention */
export interface IFilmeApi {
    adult?: boolean;
    video?: boolean;
    title?: string;
    overview?: string;
    poster_path?: string;
    release_date?: string;
    backdrop_path?: string;
    original_title?: string;
    original_language?: string;
    genre_ids?: number[];
    id?: number;
    popularity?: number;
    vote_count?: number;
    vote_average?: number;
  }

  export interface IListFilms {
    results: IFilmeApi[];
    page: number;
    total_results: number;
    total_pages: number;
  }
