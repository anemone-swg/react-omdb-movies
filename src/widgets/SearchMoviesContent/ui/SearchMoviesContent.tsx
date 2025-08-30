import {
  SearchMoviesInput,
  selectSearch,
  selectType,
  selectYear,
} from "@/features/SearchMoviesInput";
import { Pagination, selectPage } from "@/features/Pagination";
import { MoviesList, useGetMoviesQuery } from "@/features/MoviesList";
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
      <MoviesList
        data={data?.Search}
        isFetching={isFetching}
        error={data?.Error}
      />
      <Pagination totalResults={data?.totalResults} isFetching={isFetching} />
    </>
  );
};

export default SearchMoviesContent;
