import type { Movie } from "../../model/types/movie";

export const getUniqueMovies = (data: Movie[]) =>
  data.filter(
    (movie, index, self) =>
      index === self.findIndex((m) => m.imdbID === movie.imdbID),
  );
