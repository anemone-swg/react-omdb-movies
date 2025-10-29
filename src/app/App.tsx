import "./styles/App.scss";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { persistor } from "@/app/store/store";
import { GlobalErrorFallback } from "@/widgets/GlobalErrorFallback";
import { baseApi } from "@/shared/api/rtkApi";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";

const App = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <ErrorBoundary
        FallbackComponent={GlobalErrorFallback}
        onReset={async () => {
          dispatch(baseApi.util.resetApiState());
          dispatch({ type: "RESET_STORE" });
          await persistor.purge();
        }}
      >
        <Outlet />
        <ScrollRestoration
          getKey={(location, _matches) => {
            return location.pathname;
          }}
        />
      </ErrorBoundary>
    </>
  );
};

export default App;
