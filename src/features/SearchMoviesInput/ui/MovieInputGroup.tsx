import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { paginationActions } from "@/features/Pagination";
import { searchMoviesInputActions } from "../model/slice";
import { MovieInput } from "@/shared/ui/MovieInput";

const MovieInputGroup = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, []);

  const handleSearch = useCallback(() => {
    const trimmed = query.trim();
    if (!trimmed) return;
    dispatch(paginationActions.setPage(1));
    dispatch(searchMoviesInputActions.setSearch(trimmed));
  }, [dispatch, query]);

  return (
    <div className="flex gap-2 max-w-3xl mx-auto px-4 mb-4">
      <MovieInput value={query} onChange={handleChange} />
      <button
        className="bg-button hover:bg-button-hover text-white px-4 py-2 rounded transition-colors"
        onClick={handleSearch}
      >
        Найти
      </button>
    </div>
  );
};

export default React.memo(MovieInputGroup);
