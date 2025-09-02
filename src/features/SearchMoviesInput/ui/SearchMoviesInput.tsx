import React, { type JSX } from "react";
import { useTranslation } from "react-i18next";
import { selectType, selectYear } from "../model/selectors";
import { setTypeWithResetPage, setYearWithResetPage } from "../model/thunks";
import MovieInputGroup from "./MovieInputGroup";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";
import type { contentType } from "@/shared/types/contentType";

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

  const years = Array.from(
    { length: 100 },
    (_, i) => new Date().getFullYear() - i,
  );

  return (
    <>
      <h1 className="text-2xl font-bold mb-6 text-center">
        {t("поиск_фильмов")}
      </h1>
      <MovieInputGroup />
      <div className="flex gap-2 max-w-3xl mx-auto px-4 mb-4">
        <select
          value={type ?? ""}
          onChange={(e) =>
            dispatch(
              setTypeWithResetPage(
                e.target.value === ""
                  ? undefined
                  : (e.target.value as contentType),
              ),
            )
          }
          className="border p-2 rounded"
        >
          <option value="">{t("все_поиск")}</option>
          <option value="movie">{t("фильмы_поиск")}</option>
          <option value="series">{t("сериалы_поиск")}</option>
          <option value="episode">{t("эпизоды_поиск")}</option>
        </select>
        <select
          value={year ?? ""}
          onChange={(e) =>
            dispatch(
              setYearWithResetPage(
                e.target.value === "" ? undefined : Number(e.target.value),
              ),
            )
          }
          className="border p-2 rounded"
        >
          <option value="">{t("все_годы_поиск")}</option>
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

export default React.memo(SearchMoviesInput);
