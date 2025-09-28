import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { routesConfig } from "@/app/providers/AppRouter";
import { createReduxStore } from "@/app/store/store";
import { Routes } from "@/shared/config/route/routes";

jest.mock("@/widgets/Navbar", () => ({
  __esModule: true,
  Navbar: () => <div>Mock Navbar</div>,
}));

jest.mock("@/widgets/HomeContent", () => ({
  __esModule: true,
  HomeContent: () => <div>Mock Home Content</div>,
}));

describe("навигация по AppRouter", () => {
  test("рендер HomePage", () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: [Routes.HOME],
    });

    render(
      <Provider store={createReduxStore()}>
        <RouterProvider router={router} />
      </Provider>,
    );
    expect(screen.getByText("Mock Navbar")).toBeInTheDocument();
    expect(screen.getByText("Mock Home Content")).toBeInTheDocument();
    screen.debug();
  });
});
