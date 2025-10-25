import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { PaginationState } from "./types/PaginationState";

const initialState: PaginationState = {
  page: 1,
  isActive: true,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setThisPagination(state, action: PayloadAction<boolean>) {
      state.isActive = action.payload;
    },
  },
});

export const { actions: paginationActions } = paginationSlice;
export const { reducer: paginationReducer } = paginationSlice;
