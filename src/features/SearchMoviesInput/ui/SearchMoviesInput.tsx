import { type JSX, useState } from "react";
import { useDispatch } from "react-redux";
import { paginationActions } from "@/features/Pagination";
import { searchMoviesInputActions } from "@/features/SearchMoviesInput";

/**
 * React-компонент, отображающий input и кнопку для поиска фильмов.
 *
 * @component
 * @returns {JSX.Element} JSX-элемент с полем ввода и кнопкой поиска фильмов.
 */
const SearchMoviesInput = (): JSX.Element => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

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
    </>
  );
};

export default SearchMoviesInput;
