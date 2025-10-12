import type { Decorator } from "@storybook/react";
import { Provider } from "react-redux";
import { createReduxStore } from "@/app/store/store";

export const StoreDecorator: Decorator = (Story, context) => {
  // const asyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  //   pagination: paginationReducer,
  // };

  return (
    <Provider store={createReduxStore()}>
      <Story />
    </Provider>
  );
};
