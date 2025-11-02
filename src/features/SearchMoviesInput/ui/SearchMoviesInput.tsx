import React, { type JSX, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { selectType, selectYear } from "../model/selectors";
import { setTypeWithResetPage, setYearWithResetPage } from "../model/thunks";
import MovieInputGroup from "./MovieInputGroup";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";
import { Select } from "@/shared/ui/Select";
import { contentType } from "@/shared/types/contentType";

/**
 * React-компонент, отображающий input и кнопку для поиска фильмов.
 *
 * @component
 * @returns {JSX.Element} JSX-элемент с полем ввода и кнопкой поиска фильмов.
 */
const SearchMoviesInput = (): JSX.Element => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const type = useAppSelector(selectType);
  const year = useAppSelector(selectYear);

  const years = useMemo(
    () => Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i),
    [],
  );

  const yearOptions = useMemo(
    () => [
      { value: "", content: t("все_годы_поиск") },
      ...years.map((y) => ({
        value: String(y),
        content: String(y),
      })),
    ],
    [t, years],
  );

  const movieOptions = useMemo(
    () => [
      { value: "", content: t("все_поиск") },
      { value: "movie", content: t("фильмы_поиск") },
      { value: "series", content: t("сериалы_поиск") },
      { value: "episode", content: t("эпизоды_поиск") },
    ],
    [t],
  );

  const onChangeMovie = useCallback(
    (value: string) =>
      dispatch(
        // @ts-expect-error: не та типизация для санков
        setTypeWithResetPage(value === "" ? undefined : (value as contentType)),
      ),
    [dispatch],
  );

  const onChangeYear = useCallback(
    (value: string) =>
      dispatch(
        // @ts-expect-error: не та типизация для санков
        setYearWithResetPage(value === "" ? undefined : Number(value)),
      ),
    [dispatch],
  );

  return (
    <>
      <h1 className="text-2xl font-bold mb-6 text-center">
        {t("поиск_фильмов")}
      </h1>
      <MovieInputGroup />
      <div className="flex justify-center gap-2 max-w-3xl mx-auto px-4 mb-4">
        <Select
          value={type ?? ""}
          options={movieOptions}
          onChange={onChangeMovie}
        />
        <Select
          value={year ? String(year) : ""}
          options={yearOptions}
          onChange={onChangeYear}
        />
      </div>
    </>
  );
};

export default React.memo(SearchMoviesInput);
