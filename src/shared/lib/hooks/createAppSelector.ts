import { createSelector } from "@reduxjs/toolkit";
import type { AppState } from "@/app/store/store";

export const createAppSelector = createSelector.withTypes<AppState>();
