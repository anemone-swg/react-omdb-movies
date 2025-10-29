import { useMemo } from "react";
import { ErrorBoundary } from "react-error-boundary";
import {
  SearchMoviesInput,
  selectSearch,
  selectType,
  selectYear,
} from "@/features/SearchMoviesInput";
import {
  MoviesList,
  MoviesListFallback,
  useGetMoviesInfiniteQuery,
} from "@/features/MoviesList";
import { InfScrollLoadMoreBtn } from "@/features/InfScrollLoadMoreBtn";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";
import { InfiniteScrollWrapper } from "@/shared/ui/InfiniteScrollWrapper";

const SearchMoviesContent = () => {
  const search = useAppSelector(selectSearch);
  const type = useAppSelector(selectType);
  const year = useAppSelector(selectYear);

  const {
    data,
    isLoading,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGetMoviesInfiniteQuery(
    { search, type, year },
    {
      // skip: !search || __PROJECT__ === "storybook",
      skip: !search,
    },
  );

  const pages = useMemo(() => {
    return data?.pages.flatMap((page) => page.Search) ?? [];
  }, [data?.pages]);
  const lastError = useMemo(() => data?.pages.at(-1)?.Error, [data?.pages]);

  const handleLoadMore = () => {
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  };

  return (
    <>
      <SearchMoviesInput />
      <ErrorBoundary
        FallbackComponent={MoviesListFallback}
        resetKeys={[search, data]}
      >
        <InfiniteScrollWrapper onScrollEnd={handleLoadMore}>
          <MoviesList data={pages} isFetching={isFetching} error={lastError} />
        </InfiniteScrollWrapper>
      </ErrorBoundary>
      {!isLoading && !lastError && (
        <InfScrollLoadMoreBtn
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
          isFetchingNextPage={isFetchingNextPage}
          isFetching={isFetching}
        />
      )}
    </>
  );
};

export default SearchMoviesContent;
