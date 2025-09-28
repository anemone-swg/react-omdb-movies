import React from "react";
import { useTranslation } from "react-i18next";
import { FallbackProps } from "react-error-boundary";

const GlobalErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const { t } = useTranslation();
  return (
    <div>
      <p>{t("возникла_непредвиденная_ошибка")}</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again.</button>
    </div>
  );
};

export default GlobalErrorFallback;
