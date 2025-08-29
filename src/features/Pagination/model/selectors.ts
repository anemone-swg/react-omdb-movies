import type { AppState } from "@/app/store/store";

export const selectPage = (state: AppState) => state.pagination.page;
