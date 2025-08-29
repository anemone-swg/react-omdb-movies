import { type Dispatch, type JSX, type SetStateAction, useState } from "react";
import { useDispatch } from "react-redux";
import { paginationActions } from "@/features/Pagination";

/**
 * Props компонента SearchMoviesInput.
 *
 * @property {Dispatch<SetStateAction<string>>} setSearch - Функция для изменения строки поиска.
 */
export interface SearchMoviesInputProps {
  setSearch: Dispatch<SetStateAction<string>>;
}

/**
 * React-компонент, отображающий input и кнопку для поиска фильмов.
 *
 * @component
 * @param {SearchMoviesInputProps} props - Props компонента.
 * @returns {JSX.Element} JSX-элемент с полем ввода и кнопкой поиска фильмов.
 */
const SearchMoviesInput = ({
  setSearch,
}: SearchMoviesInputProps): JSX.Element => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    const trimmed = query.trim();
    if (!trimmed) return;
    dispatch(paginationActions.setPage(1));
    setSearch(trimmed);
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
