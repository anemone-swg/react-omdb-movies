import type { JSX } from "react";
import type { Movie } from "../model/types/movie";
import { Loader } from "@/shared/ui/Loader";

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
  return (
    <>
      {isFetching && <Loader />}
      {error && <p className="text-center text-red-500">Ошибка при загрузке</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {!isFetching &&
          data?.map((movie) => (
            <div
              key={movie.imdbID}
              className="p-2 border rounded-lg overflow-hidden shadow flex flex-col justify-center items-center"
            >
              <img
                src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.jpg"}
                alt={movie.Title}
                className="w-full max-h-64 object-contain"
              />
              <div className="pt-2">
                <h2 className="font-bold text-center">{movie.Title}</h2>
                <p className="text-sm text-gray-500 text-center">
                  {movie.Year} ({movie.Type})
                </p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default MoviesList;
