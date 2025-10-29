import { Provider } from "react-redux";
import { Decorator } from "@storybook/react";
import { createReduxStore } from "@/app/store/store";
import { StateSchema } from "@/app/store/StateSchema";
import type { DeepPartial } from "@/shared/types/deepPartial";
import { ReducersMapObject } from "@reduxjs/toolkit";

export const StoreDecorator =
  (
    state: DeepPartial<StateSchema> = {},
    asyncReducers?: ReducersMapObject<StateSchema>,
  ): Decorator =>
  // eslint-disable-next-line react/display-name
  (Story) => {
    const store = createReduxStore(state, asyncReducers);

    return (
      <Provider store={store}>
        <Story />
      </Provider>
    );
  };
