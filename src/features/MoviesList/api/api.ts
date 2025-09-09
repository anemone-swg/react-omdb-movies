import { baseApi } from "@/shared/api/rtkApi";
import type { SearchMoviesResponse } from "../model/types/searchMoviesResponse.ts";
import type { contentType } from "@/shared/types/contentType";

const moviesListApi = baseApi.injectEndpoints({
  endpoints: (create) => ({
    getMovies: create.query<
      SearchMoviesResponse,
      {
        search: string;
        page?: number;
        type?: contentType;
        year?: number | undefined;
      }
    >({
      query: ({ search, page = 1, type, year }) => ({
        url: "",
        params: {
          s: search,
          page,
          ...(type ? { type } : {}),
          ...(year ? { y: year } : {}),
        },
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetMoviesQuery } = moviesListApi;
