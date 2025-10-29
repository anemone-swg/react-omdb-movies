import { baseApi } from "@/shared/api/rtkApi";
import type { SearchMoviesResponse } from "../model/types/searchMoviesResponse";
import { contentType } from "@/shared/types/contentType";

const moviesListApi = baseApi.injectEndpoints({
  endpoints: (create) => ({
    // getMovies: create.query<
    //   SearchMoviesResponse,
    //   {
    //     search: string;
    //     page?: number;
    //     type?: contentType;
    //     year?: number | undefined;
    //   }
    // >({
    //   query: ({ search, page = 1, type, year }) => ({
    //     url: "",
    //     params: {
    //       s: search,
    //       page,
    //       ...(type ? { type } : {}),
    //       ...(year ? { y: year } : {}),
    //     },
    //   }),
    // }),
    getMovies: create.infiniteQuery<
      SearchMoviesResponse,
      { search: string; type?: contentType; year?: number | undefined },
      number | undefined
    >({
      infiniteQueryOptions: {
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages, lastPageParam) => {
          if (lastPage.Response === "False" || !lastPage.Search?.length) {
            return undefined;
          }

          const totalResults = parseInt(lastPage.totalResults, 10);
          const loadedResults = allPages.flatMap((p) => p.Search ?? []).length;

          if (loadedResults >= totalResults) {
            return undefined;
          }

          return (lastPageParam ?? 1) + 1;
        },
      },
      query: ({ queryArg, pageParam }) => ({
        url: "",
        params: {
          s: queryArg.search,
          page: pageParam,
          ...(queryArg.type ? { type: queryArg.type } : {}),
          ...(queryArg.year ? { y: queryArg.year } : {}),
        },
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetMoviesInfiniteQuery } = moviesListApi;
