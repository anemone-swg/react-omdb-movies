import type { JSX } from "react";
import { Link } from "react-router-dom";
import type { Movie } from "../model/types/movie";
import { getUniqueMovies } from "../lib/helpers/getUniqueMovies";
import { Loader } from "@/shared/ui/Loader";
import { Routes } from "@/shared/config/route/routes";
import { ErrLoadingMessage } from "@/shared/ui/ErrLoadingMessage";

/**
 * Props компонента MoviesList.
 *
 * @property {Movie[] | undefined} data - Данные с поиска фильмов.
 * @property {boolean} isFetching - Флаг загрузки данных.
 * @property {string} error - Ошибка запроса.
 */

export interface MoviesListProps {
  data?: Movie[];
  isFetching: boolean;
  error?: string;
}

/**
 * React-компонент, отображающий список фильмов с поиска.
 *
 * @component
 * @param {MoviesListProps} props - Props компонента.
 * @returns {JSX.Element} JSX-элемент с найденными фильмами.
 */
const MoviesList = ({
  data,
  isFetching,
  error,
}: MoviesListProps): JSX.Element => {
  const uniqueMovies = data ? getUniqueMovies(data) : [];

  return (
    <>
      {isFetching && <Loader />}
      {error && <ErrLoadingMessage />}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {!isFetching &&
          uniqueMovies?.map((movie) => (
            <Link
              key={movie.imdbID}
              to={Routes.getMovieSearchDetail(movie.imdbID)}
              className="p-2 border rounded-lg overflow-hidden shadow flex flex-col justify-center items-center transform transition-transform duration-200 ease-in-out
              hover:scale-[1.01] hover:shadow-lg"
            >
              <img
                loading="lazy"
                src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.jpg"}
                alt={movie.Title}
                className="w-full max-h-64 object-contain"
                onError={(e) => {
                  const img = e.currentTarget;
                  if (img.src !== window.location.origin + "/no-image.jpg") {
                    img.src = "/no-image.jpg";
                  }
                }}
              />
              <div className="pt-2">
                <h2 className="font-bold text-center">{movie.Title}</h2>
                <p className="text-sm text-gray-500 text-center">
                  {movie.Year} ({movie.Type})
                </p>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default MoviesList;
