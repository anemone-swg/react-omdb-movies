import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { AppRouter } from "@/app/providers/AppRouter";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { baseApi } from "@/shared/api/rtkApi.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <ApiProvider api={baseApi}>
        <RouterProvider router={AppRouter} />
      </ApiProvider>
    </ThemeProvider>
  </StrictMode>,
);
