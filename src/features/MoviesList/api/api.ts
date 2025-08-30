import { baseApi } from "@/shared/api/rtkApi.ts";
import type { SearchMoviesResponse } from "../model/types/searchMoviesResponse.ts";
import type { contentType } from "@/shared/types/contentType";

const moviesListApi = baseApi.injectEndpoints({
  endpoints: (create) => ({
    getMovies: create.query<
      SearchMoviesResponse,
      { search: string; page?: number; type?: contentType }
    >({
      query: ({ search, page = 1, type }) => ({
        url: "",
        params: { s: search, page, ...(type ? { type } : {}) },
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetMoviesQuery } = moviesListApi;
