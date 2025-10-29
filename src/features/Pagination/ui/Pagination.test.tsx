import { Provider } from "react-redux";
import { ReducersMapObject } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { createReduxStore } from "@/app/store/store";
import { StateSchema } from "@/app/store/StateSchema";
import Pagination from "./Pagination";
import { paginationReducer } from "../model/slice";
import type { DeepPartial } from "@/shared/types/deepPartial";

// в setupJest есть мок "react-i18next" для всех тестов,
// но тут мок конкретно для пагинации со своим ключом
jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    t: (key: string, options?: any) => {
      if (key === "страница_из")
        return `Страница ${options.current} из ${options.total}`;
      return key;
    },
  }),
}));

const asyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  pagination: paginationReducer,
};

describe.skip("Pagination", () => {
  test("render correctly with page = 5", () => {
    render(
      <Provider
        store={createReduxStore(
          {
            pagination: { page: 5 },
          },
          asyncReducers as ReducersMapObject<StateSchema>,
        )}
      >
        <Pagination totalResults={"100"} />
      </Provider>,
    );
    const paginationDiv = screen.getByTestId("pagination-div");
    expect(paginationDiv).toBeInTheDocument();
    const paginationPage = screen.getByTestId("pagination-page");
    // expect(paginationPage).toHaveTextContent(/5\s*из/i);
    expect(paginationPage).toMatchSnapshot();
    screen.debug();
  });

  test("do not render", () => {
    render(
      <Provider store={createReduxStore()}>
        <Pagination totalResults={"100"} isFetching={true} />
      </Provider>,
    );
    expect(screen.queryByTestId("pagination-div")).not.toBeInTheDocument();
    screen.debug();
  });
});
