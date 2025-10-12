import { Reducer } from "@reduxjs/toolkit";
import { StateSchemaKey } from "@/app/store/StateSchema";

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};
