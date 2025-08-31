import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { contentType } from "@/shared/types/contentType";

export interface SearchMoviesInputState {
  search: string;
  type: contentType;
  year: number | undefined;
}

const initialState: SearchMoviesInputState = {
  search: "",
  type: undefined,
  year: undefined,
};

export const searchMoviesInputSlice = createSlice({
  name: "searchMoviesInput",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setType(state, action: PayloadAction<contentType>) {
      state.type = action.payload;
    },
    setYear(state, action: PayloadAction<number | undefined>) {
      state.year = action.payload;
    },
  },
});

export const { actions: searchMoviesInputActions } = searchMoviesInputSlice;
export const { reducer: searchMoviesInputReducer } = searchMoviesInputSlice;
