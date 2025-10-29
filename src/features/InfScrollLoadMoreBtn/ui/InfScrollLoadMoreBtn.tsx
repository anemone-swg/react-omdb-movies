import React from "react";
import { useTranslation } from "react-i18next";

export interface InfScrollLoadMoreBtnProps {
  hasNextPage: boolean;
  isFetching: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
}

const InfScrollLoadMoreBtn = ({
  hasNextPage,
  isFetching,
  isFetchingNextPage,
  fetchNextPage,
}: InfScrollLoadMoreBtnProps) => {
  const { t } = useTranslation();

  const handleLoadMore = () => {
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  };

  return (
    <div className={"flex justify-center items-center mt-4"}>
      {hasNextPage ? (
        <button
          className={
            "text-white px-4 py-2 rounded transition-colors bg-button hover:bg-button-hover"
          }
          onClick={handleLoadMore}
          disabled={isFetching}
        >
          {isFetchingNextPage ? t("загрузка") : t("загрузить_больше")}
        </button>
      ) : (
        <p>{t("нечего_загружать")}</p>
      )}
    </div>
  );
};

export default InfScrollLoadMoreBtn;
