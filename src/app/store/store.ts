import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { searchMoviesInputReducer } from "@/features/SearchMoviesInput";
import { baseApi } from "@/shared/api/rtkApi";
import { createReducerManager } from "./reducerManager";
import type { ReduxStoreWithManager, StateSchema } from "./StateSchema";

const persistConfig = {
  key: "root",
  storage,
  blacklist: [baseApi.reducerPath],
};

export const createReduxStore = (
  initialState?: unknown,
  asyncReducers?: ReducersMapObject<StateSchema>,
) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    searchMoviesInput: searchMoviesInputReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  };

  const reducerManager = createReducerManager(rootReducers);
  const persistedReducer = persistReducer(persistConfig, reducerManager.reduce);

  const store = configureStore({
    reducer: persistedReducer,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    preloadedState: initialState as any,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(baseApi.middleware),
  }) as ReduxStoreWithManager;

  store.reducerManager = reducerManager;
  return store;
};

export const store = createReduxStore();

export const persistor = persistStore(store);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
