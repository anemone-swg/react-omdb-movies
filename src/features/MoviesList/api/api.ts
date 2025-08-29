import { baseApi } from "@/shared/api/rtkApi.ts";
import type { SearchMoviesResponse } from "../model/types/searchMoviesResponse.ts";

const moviesListApi = baseApi.injectEndpoints({
  endpoints: (create) => ({
    getMovies: create.query<
      SearchMoviesResponse,
      { search: string; page?: number }
    >({
      query: ({ search, page = 1 }) => ({
        url: "",
        params: { s: search, page },
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetMoviesQuery } = moviesListApi;
