import { ErrorBoundary } from "react-error-boundary";
import {
  SearchMoviesInput,
  selectSearch,
  selectType,
  selectYear,
} from "@/features/SearchMoviesInput";
import { Pagination, selectPage } from "@/features/Pagination";
import {
  MoviesList,
  MoviesListFallback,
  useGetMoviesQuery,
} from "@/features/MoviesList";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";

const SearchMoviesContent = () => {
  const search = useAppSelector(selectSearch);
  const page = useAppSelector(selectPage);
  const type = useAppSelector(selectType);
  const year = useAppSelector(selectYear);

  const { data, isFetching } = useGetMoviesQuery(
    { search, page, type, year },
    {
      skip: !search,
    },
  );

  return (
    <>
      <SearchMoviesInput />
      <ErrorBoundary
        FallbackComponent={MoviesListFallback}
        resetKeys={[search, data]}
      >
        <MoviesList
          data={data?.Search}
          isFetching={isFetching}
          error={data?.Error}
        />
      </ErrorBoundary>
      <Pagination totalResults={data?.totalResults} isFetching={isFetching} />
    </>
  );
};

export default SearchMoviesContent;
