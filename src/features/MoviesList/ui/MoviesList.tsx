import { JSX, memo, useMemo } from "react";
import { getUniqueMovies } from "../lib/helpers/getUniqueMovies";
import { type Movie, MovieTile } from "@/entities/MovieTile";
import { Skeleton } from "@/shared/ui/Skeleton";

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
  if (error) {
    throw new Error(error);
  }

  const uniqueMovies = useMemo(
    () => (data ? getUniqueMovies(data) : []),
    [data],
  );

  let content = uniqueMovies?.map((movie) => (
    <MovieTile key={movie.imdbID} movie={movie} />
  ));

  if (isFetching) {
    content = [
      ...content,
      ...Array.from({ length: 4 }).map((_, index) => (
        <Skeleton
          key={`skeleton-${index}`}
          className="p-2 rounded-lg overflow-hidden shadow flex flex-col justify-center items-center"
          height={326}
        />
      )),
    ];
  }

  return (
    <div
      data-testid={"movies-list"}
      className="grid grid-cols-2 md:grid-cols-4 gap-4"
    >
      {content}
    </div>
  );
};

export default memo(MoviesList);
