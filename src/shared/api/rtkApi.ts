import { createApi } from "@reduxjs/toolkit/query/react";
import {
  fetchBaseQuery,
  type FetchBaseQueryError,
} from "@reduxjs/toolkit/query";

const rawBaseQuery = fetchBaseQuery({
  baseUrl: "http://www.omdbapi.com/",
  paramsSerializer: (params) => {
    return new URLSearchParams({ apikey: "903b94fa", ...params }).toString();
  },
});

const baseQueryWithErrorHandler: typeof rawBaseQuery = async (
  args,
  api,
  extraOptions,
) => {
  const result = await rawBaseQuery(args, api, extraOptions);

  if (result.error) {
    const error = result.error as FetchBaseQueryError;

    if ("status" in error && error.status !== "FETCH_ERROR") {
      const status = error.status;
      const message =
        (error.data as { reason?: string })?.reason || "Ошибка сервера";
      console.error(`Ошибка запроса [${status}]: ${message}`);
    } else if ("error" in error && error.status === "FETCH_ERROR") {
      console.error("Сетевая ошибка:", error.error);
    } else {
      console.error("Неизвестная ошибка:", error);
    }
  }

  return result;
};

export const baseApi = createApi({
  baseQuery: baseQueryWithErrorHandler,
  tagTypes: [],
  endpoints: () => ({}),
});
