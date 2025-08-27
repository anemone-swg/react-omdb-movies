import { useState } from "react";
import { useGetMoviesQuery } from "../api/api.ts";

const SearchMoviesInput = () => {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");

  const { data, isFetching, error } = useGetMoviesQuery(search, {
    skip: !search,
  });

  const handleSearch = () => {
    setSearch(query);
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
          className="bg-button hover:bg-button-hover text-white px-4 py-2 rounded flex items-center gap-2 transition-colors"
          onClick={handleSearch}
        >
          Найти
        </button>
      </div>

      {isFetching && <p>Загрузка...</p>}
      {error && <p className="text-red-500">Ошибка при загрузке</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data?.Search?.map((movie) => (
          <div
            key={movie.imdbID}
            className="border rounded-lg overflow-hidden shadow"
          >
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.jpg"}
              alt={movie.Title}
              className="w-full h-64 object-cover"
            />
            <div className="p-2">
              <h2 className="font-bold">{movie.Title}</h2>
              <p className="text-sm text-gray-500">
                {movie.Year} ({movie.Type})
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchMoviesInput;
