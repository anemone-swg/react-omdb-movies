import { baseApi } from "@/shared/api/rtkApi";
import type { SearchMoviesResponse } from "../model/types/searchMoviesResponse.ts";

const searchMoviesInputApi = baseApi.injectEndpoints({
  endpoints: (create) => ({
    getMovies: create.query<SearchMoviesResponse, string>({
      query: (search) => ({
        url: "",
        params: { s: search },
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetMoviesQuery } = searchMoviesInputApi;
