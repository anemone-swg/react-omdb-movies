import { type JSX } from "react";
import { useDispatch } from "react-redux";
import type { contentType } from "@/shared/types/contentType";
import { searchMoviesInputActions } from "../model/slice";
import { selectType, selectYear } from "../model/selectors";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";
import MovieInputGroup from "./MovieInputGroup";

/**
 * React-компонент, отображающий input и кнопку для поиска фильмов.
 *
 * @component
 * @returns {JSX.Element} JSX-элемент с полем ввода и кнопкой поиска фильмов.
 */
const SearchMoviesInput = (): JSX.Element => {
  const dispatch = useDispatch();
  const type = useAppSelector(selectType);
  const year = useAppSelector(selectYear);

  const years = Array.from(
    { length: 100 },
    (_, i) => new Date().getFullYear() - i,
  );

  return (
    <>
      <h1 className="text-2xl font-bold mb-6 text-center">Поиск фильмов</h1>
      <MovieInputGroup />
      <div className="flex gap-2 max-w-3xl mx-auto px-4 mb-4">
        <select
          value={type ?? ""}
          onChange={(e) =>
            dispatch(
              searchMoviesInputActions.setType(
                e.target.value === ""
                  ? undefined
                  : (e.target.value as contentType),
              ),
            )
          }
          className="border p-2 rounded"
        >
          <option value="">Все</option>
          <option value="movie">Фильмы</option>
          <option value="series">Сериалы</option>
          <option value="episode">Эпизоды</option>
        </select>
        <select
          value={year ?? ""}
          onChange={(e) =>
            dispatch(
              searchMoviesInputActions.setYear(
                e.target.value === "" ? undefined : Number(e.target.value),
              ),
            )
          }
          className="border p-2 rounded"
        >
          <option value="">Все годы</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SearchMoviesInput;
