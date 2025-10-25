import type { AppState } from "@/app/store/store";

export const selectPage = (state: AppState) => state?.pagination?.page;

export const selectThisPagination = (state: AppState) =>
  state?.pagination?.isActive;
