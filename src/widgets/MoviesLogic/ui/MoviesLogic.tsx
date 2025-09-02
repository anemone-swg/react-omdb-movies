import { useTranslation } from "react-i18next";
import { LinkBtn } from "@/shared/ui/LinkBtn";
import { Routes } from "@/shared/config/route/routes";

const MoviesLogic = () => {
  const { t } = useTranslation();

  return (
    <>
      <LinkBtn to={Routes.MOVIES_SEARCH}>{t("поиск_фильмов")}</LinkBtn>
    </>
  );
};

export default MoviesLogic;
