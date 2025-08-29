import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface PaginationState {
  page: number;
}

const initialState: PaginationState = {
  page: 1,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
});

export const { actions: paginationActions } = paginationSlice;
export const { reducer: paginationReducer } = paginationSlice;
