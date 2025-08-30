import {
  SearchMoviesInput,
  selectSearch,
  selectType,
} from "@/features/SearchMoviesInput";
import { Pagination, selectPage } from "@/features/Pagination";
import { MoviesList, useGetMoviesQuery } from "@/features/MoviesList";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";

const SearchMoviesContent = () => {
  const search = useAppSelector(selectSearch);
  const page = useAppSelector(selectPage);
  const type = useAppSelector(selectType);

  const { data, isFetching } = useGetMoviesQuery(
    { search, page, type },
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
