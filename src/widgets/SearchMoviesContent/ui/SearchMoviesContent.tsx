import { useState } from "react";
import { SearchMoviesInput } from "@/features/SearchMoviesInput";
import { Pagination, selectPage } from "@/features/Pagination";
import { MoviesList, useGetMoviesQuery } from "@/features/MoviesList";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";

const SearchMoviesContent = () => {
  const [search, setSearch] = useState("");
  const page = useAppSelector(selectPage);

  const { data, isFetching } = useGetMoviesQuery(
    { search, page },
    {
      skip: !search,
    },
  );

  return (
    <>
      <SearchMoviesInput setSearch={setSearch} />
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
