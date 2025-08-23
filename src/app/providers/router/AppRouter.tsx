import { createBrowserRouter } from "react-router-dom";
import App from "@/app/App";
import { HomePage } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { Routes } from "@/shared/config/routes";

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
    ],
  },
]);
