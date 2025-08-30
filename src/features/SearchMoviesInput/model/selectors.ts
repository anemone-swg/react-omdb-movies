import type { AppState } from "@/app/store/store";

export const selectSearch = (state: AppState) => state.searchMoviesInput.search;
