import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { AppRouter } from "@/app/providers/AppRouter";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { persistor, store } from "@/app/store/store";
import "@/shared/config/i18n/i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={AppRouter} />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </StrictMode>,
);
