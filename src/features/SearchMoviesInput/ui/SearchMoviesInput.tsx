import { type JSX, useState } from "react";
import { useDispatch } from "react-redux";
import type { contentType } from "@/shared/types/contentType";
import { paginationActions } from "@/features/Pagination";
import { searchMoviesInputActions } from "../model/slice";
import { selectSearch, selectType } from "../model/selectors";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector.ts";

/**
 * React-компонент, отображающий input и кнопку для поиска фильмов.
 *
 * @component
 * @returns {JSX.Element} JSX-элемент с полем ввода и кнопкой поиска фильмов.
 */
const SearchMoviesInput = (): JSX.Element => {
  const dispatch = useDispatch();
  const search = useAppSelector(selectSearch);
  const type = useAppSelector(selectType);
  const [query, setQuery] = useState(search ?? "");

  const handleSearch = () => {
    const trimmed = query.trim();
    if (!trimmed) return;
    dispatch(paginationActions.setPage(1));
    dispatch(searchMoviesInputActions.setSearch(trimmed));
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-6 text-center">Поиск фильмов</h1>
      <div className="flex gap-2 max-w-3xl mx-auto px-4 mb-4">
        <input
          className="border rounded p-2 flex-1"
          type="text"
          placeholder={"Введите название..."}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-button hover:bg-button-hover text-white px-4 py-2 rounded transition-colors"
          onClick={handleSearch}
        >
          Найти
        </button>
      </div>
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
      </div>
    </>
  );
};

export default SearchMoviesInput;
