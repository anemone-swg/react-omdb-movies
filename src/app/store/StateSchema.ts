import type {
  EnhancedStore,
  Reducer,
  ReducersMapObject,
  UnknownAction,
} from "@reduxjs/toolkit";
import type { PersistPartial } from "redux-persist/es/persistReducer";
import { PaginationState } from "@/features/Pagination";
import { SearchMoviesInputState } from "@/features/SearchMoviesInput";
import { baseApi } from "@/shared/api/rtkApi";

export interface StateSchema {
  searchMoviesInput: SearchMoviesInputState;

  // Асинхронные редюсеры
  pagination?: PaginationState;

  // RTK Query
  [baseApi.reducerPath]: ReturnType<typeof baseApi.reducer>;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (
    state: Partial<StateSchema> | undefined,
    action: UnknownAction,
  ) => StateSchema;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager
  extends EnhancedStore<StateSchema & PersistPartial> {
  reducerManager: ReducerManager;
}
