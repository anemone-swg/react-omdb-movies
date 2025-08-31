import type { JSX } from "react";
import { selectPage } from "../model/selectors";
import { paginationActions } from "../model/slice";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";

/**
 * Props компонента Pagination.
 *
 * @property {string | undefined} totalResults - Данные с поиска фильмов.
 * @property {boolean} [isFetching] - Флаг загрузки данных.
 */

export interface PaginationProps {
  totalResults: string | undefined;
  isFetching?: boolean;
}

/**
 * React-компонент для пагинации.
 *
 * @component
 * @param {PaginationProps} props - Props компонента.
 * @returns {JSX.Element} JSX-элемент с найденными фильмами.
 */
const Pagination = ({
  totalResults,
  isFetching = false,
}: PaginationProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectPage);

  return (
    <>
      {!isFetching && totalResults && Number(totalResults) > 0 && (
        <div className="flex justify-center gap-4 mt-6">
          <button
            className="bg-button text-white px-4 py-2 rounded transition-colors disabled:opacity-50"
            disabled={page === 1 || isFetching}
            onClick={() => dispatch(paginationActions.setPage(page - 1))}
          >
            Назад
          </button>
          <span className="px-4 py-2">
            Стр. {page} из {Math.ceil(Number(totalResults) / 10)}
          </span>
          <button
            className="bg-button hover:bg-button-hover text-white px-4 py-2 rounded transition-colors disabled:opacity-50"
            disabled={
              page >= Math.ceil(Number(totalResults) / 10) || isFetching
            }
            onClick={() => dispatch(paginationActions.setPage(page + 1))}
          >
            Вперёд
          </button>
        </div>
      )}
    </>
  );
};

export default Pagination;
