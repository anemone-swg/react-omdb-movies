import { createAsyncThunk } from "@reduxjs/toolkit";
import { searchMoviesInputActions } from "./slice";
import { paginationActions } from "@/features/Pagination";
import type { contentType } from "@/shared/types/contentType";

export const setTypeWithResetPage = createAsyncThunk(
  "filters/setTypeWithResetPage",
  async (type: contentType, { dispatch }) => {
    dispatch(searchMoviesInputActions.setType(type));
    dispatch(paginationActions.setPage(1));
  },
);

export const setYearWithResetPage = createAsyncThunk(
  "filters/setYearWithResetPage",
  async (year: number | undefined, { dispatch }) => {
    dispatch(searchMoviesInputActions.setYear(year));
    dispatch(paginationActions.setPage(1));
  },
);
