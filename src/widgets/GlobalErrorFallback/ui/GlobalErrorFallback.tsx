import React from "react";
import { useTranslation } from "react-i18next";
import { FallbackProps } from "react-error-boundary";

const GlobalErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center gap-2">
      <p>{t("возникла_непредвиденная_ошибка")}</p>
      <pre>{error.message}</pre>
      <button
        className={
          "bg-button hover:bg-button-hover transition-colors text-white px-4 py-2 rounded"
        }
        onClick={resetErrorBoundary}
      >
        {t("попробовать_снова")}
      </button>
    </div>
  );
};

export default GlobalErrorFallback;
