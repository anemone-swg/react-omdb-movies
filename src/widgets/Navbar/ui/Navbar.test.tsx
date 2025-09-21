import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Navbar } from "@/widgets/Navbar";
import {
  createMemoryRouter,
  MemoryRouter,
  RouterProvider,
} from "react-router-dom";
import { routesConfig } from "@/app/providers/AppRouter";
import { Routes } from "@/shared/config/route/routes";

jest.mock("@/features/NavbarThemeBtn", () => ({
  __esModule: true,
  NavbarThemeBtn: () => <div>Mock NavbarThemeBtn</div>,
}));

describe("Navbar", () => {
  // В <MemoryRouter с/без initialEntries>
  // ты просто создаёшь обёртку истории для роутера.
  // Рендерятся только те компоненты, которые явно вложены внутрь MemoryRouter.
  // В твоём примере — только <Navbar />.
  // Но если в MemoryRouter засунуть routesConfig, то вроде
  // будет рендер страницы при переданном initialEntries

  test("рендер Navbar", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    expect(screen.getByText("OmdbMovies")).toBeInTheDocument();
    screen.debug();
  });

  // В createMemoryRouter(routesConfig, { initialEntries: [Routes.HOME] })
  // и <RouterProvider router={router} />
  // рендерятся все компоненты, описанные в конфиге для текущего маршрута (Routes.HOME).

  test("переход с HomePage на MoviesPage", async () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: [Routes.HOME],
    });
    render(<RouterProvider router={router} />);

    const moviesNavbarBtn = screen.getByTestId("movies-navbar-btn");
    expect(moviesNavbarBtn).toBeInTheDocument();

    await userEvent.click(moviesNavbarBtn);

    expect(
      await screen.findByTestId("link-to-search-movies"),
    ).toBeInTheDocument();
    screen.debug();
  });

  test("переход с MoviesPage на HomePage", async () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: [Routes.MOVIES],
    });
    render(<RouterProvider router={router} />);

    const linkBtn = screen.getByTestId("link-to-search-movies");
    expect(linkBtn).toBeInTheDocument();

    const homeNavbarBtn = screen.getByTestId("home-navbar-btn");
    expect(homeNavbarBtn).toBeInTheDocument();

    await userEvent.click(homeNavbarBtn);

    expect(
      await screen.findByTestId("home-page-container"),
    ).toBeInTheDocument();
    screen.debug();
  });
});
