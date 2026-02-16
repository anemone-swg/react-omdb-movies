import type { Movie } from "@/entities/MovieTile";

export const getUniqueMovies = (data: Movie[]) =>
  data.filter(
    (movie, index, self) =>
      index === self.findIndex((m) => m.imdbID === movie.imdbID),
  );
