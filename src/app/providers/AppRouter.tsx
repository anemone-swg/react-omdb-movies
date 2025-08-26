import { createBrowserRouter } from "react-router-dom";
import App from "@/app/App";
import { HomePage } from "@/pages/HomePage";
import { MoviesPage } from "@/pages/MoviesPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { Routes } from "@/shared/config/routes.ts";
import { MoviesSearchPage } from "@/pages/MoviesSearchPage";
import { MoviesLogic } from "@/widgets/MoviesLogic";

export const AppRouter = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: Routes.MOVIES,
        element: <MoviesPage />,
        children: [
          {
            index: true,
            element: <MoviesLogic />,
          },
          {
            path: Routes.MOVIES_SEARCH,
            element: <MoviesSearchPage />,
          },
        ],
      },
    ],
  },
]);
