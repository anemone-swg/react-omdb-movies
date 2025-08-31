/**
 * Объект с маршрутами и функцией для навигации по маршруту "/movies/search/:id".
 *
 * @example
 * navigate(Routes.getMovieSearchDetail(movie.imdbID));
 * @example
 * <Link
 *   key={movie.imdbID}
 *   to={Routes.getMovieSearchDetail(movie.imdbID)}
 * >
 *   ***
 * </Link>
 */
export const Routes = {
  HOME: "/",
  MOVIES: "/movies",
  MOVIES_SEARCH: "/movies/search",
  MOVIES_SEARCH_DETAIL: "/movies/search/:id",

  getMovieSearchDetail: (id: string | number) => `/movies/search/${id}`,
} as const;
