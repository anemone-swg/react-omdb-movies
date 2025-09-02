import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { paginationActions } from "@/features/Pagination";
import { searchMoviesInputActions } from "../model/slice";
import { selectSearch } from "../model/selectors";
import { MovieInput } from "@/shared/ui/MovieInput";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";

const MovieInputGroup = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const search = useAppSelector(selectSearch);
  const [query, setQuery] = useState(search ?? "");

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
        {t("найти")}
      </button>
    </div>
  );
};

export default React.memo(MovieInputGroup);
