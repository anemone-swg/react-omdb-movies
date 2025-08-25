import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "@/app/providers/AppRouter";
import { ThemeProvider } from "@/app/providers/ThemeProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={AppRouter} />
    </ThemeProvider>
  </StrictMode>,
);
