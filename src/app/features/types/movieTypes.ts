import { MovieDetails } from "./movieDetailsType";

export interface MovieState {
  entities: Movie[] | [];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

export interface MovieDetailsState {
  details: MovieDetails | {};
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: null;
}

export interface MovieSearchState {
  movies: Movie | {};
  loading: "idle" | "pending" | "succeeded" | "failed";
}

export interface Movie {
  "#TITLE": string;
  "#YEAR": number;
  "#IMDB_ID": string;
  "#RANK": number;
  "#ACTORS": string;
  "#AKA": string;
  "#IMDB_URL": string;
  "#IMDB_IV": string;
  "#IMG_POSTER": string;
  photo_width: number;
  photo_height: number;
}
