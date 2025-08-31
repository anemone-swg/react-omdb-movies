import { baseApi } from "@/shared/api/rtkApi.ts";
import type { MovieByIdResponse } from "../model/types/movieByIdResponse";

const moviesProfileApi = baseApi.injectEndpoints({
  endpoints: (create) => ({
    getMovieById: create.query<
      MovieByIdResponse,
      {
        i: string;
      }
    >({
      query: ({ i }) => ({
        url: "",
        params: {
          i,
        },
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetMovieByIdQuery } = moviesProfileApi;
