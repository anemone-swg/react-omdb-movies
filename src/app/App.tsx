import "./styles/App.scss";
import { Outlet } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { GlobalErrorFallback } from "@/widgets/GlobalErrorFallback";

const App = () => {
  return (
    <>
      <ErrorBoundary
        FallbackComponent={GlobalErrorFallback}
        onReset={() => location.reload()}
      >
        <Outlet />
      </ErrorBoundary>
    </>
  );
};

export default App;
