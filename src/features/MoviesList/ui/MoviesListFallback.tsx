import React from "react";
import { useTranslation } from "react-i18next";
import { FallbackProps } from "react-error-boundary";

const MoviesListFallback = ({ error }: FallbackProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-center text-red-500"> {error.message}</p>
      <p className="text-center text-red-500">{t("ошибка_при_загрузке")}</p>
    </div>
  );
};

export default MoviesListFallback;
