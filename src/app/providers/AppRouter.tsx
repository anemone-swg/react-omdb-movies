import { createBrowserRouter } from "react-router-dom";
import App from "@/app/App";
import { Routes } from "@/shared/config/routes.ts";
import { HomePage } from "@/pages/HomePage";
import { MoviesPage } from "@/pages/MoviesPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { MoviesSearchPage } from "@/pages/MoviesSearchPage";
import { MovieDetailsPage } from "@/pages/MovieDetailsPage";
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
          // По итогу здесь не нужны вложенные маршруты и outlet.
          // Можно было все сделать просто children от App.
          {
            index: true,
            element: <MoviesLogic />,
          },
          {
            path: Routes.MOVIES_SEARCH,
            element: <MoviesSearchPage />,
          },
          {
            path: Routes.MOVIES_SEARCH_DETAIL,
            element: <MovieDetailsPage />,
          },
        ],
      },
    ],
  },
]);
