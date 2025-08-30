import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface SearchMoviesInputState {
  search: string;
}

const initialState: SearchMoviesInputState = {
  search: "",
};

export const searchMoviesInputSlice = createSlice({
  name: "searchMoviesInput",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const { actions: searchMoviesInputActions } = searchMoviesInputSlice;
export const { reducer: searchMoviesInputReducer } = searchMoviesInputSlice;
