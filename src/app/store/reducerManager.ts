import { combineReducers, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import type {
  ReducerManager,
  StateSchema,
  StateSchemaKey,
} from "./StateSchema";

export function createReducerManager(
  initialReducers: ReducersMapObject<StateSchema>,
): ReducerManager {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  let keysToRemove: Array<StateSchemaKey> = [];

  return {
    getReducerMap: () => reducers,

    reduce: (state, action) => {
      if (action.type === "RESET_STORE") {
        state = undefined;
      }

      if (keysToRemove.length > 0) {
        state = { ...state };
        keysToRemove.forEach((key) => {
          if (state) {
            delete state[key];
          }
        });
        keysToRemove = [];
      }

      //@ts-expect-error combinerReducer требует полного стейта
      return combinedReducer(state, action);
    },

    add: (key: StateSchemaKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }

      reducers[key] = reducer;

      combinedReducer = combineReducers(reducers);
    },

    remove: (key: StateSchemaKey) => {
      if (!key || !reducers[key]) {
        return;
      }

      delete reducers[key];

      keysToRemove.push(key);

      combinedReducer = combineReducers(reducers);
    },
  };
}
