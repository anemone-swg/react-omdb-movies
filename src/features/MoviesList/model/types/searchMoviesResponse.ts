import type { Movie } from "@/entities/MovieTile";

export interface SearchMoviesResponse {
  Search: Movie[];
  totalResults: string;
  Response: "True" | "False";
  Error?: string;
}
