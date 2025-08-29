import type { Movie } from "./movie.ts";

export interface SearchMoviesResponse {
  Search: Movie[];
  totalResults: string;
  Response: "True" | "False";
  Error?: string;
}
