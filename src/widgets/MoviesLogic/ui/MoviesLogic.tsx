import { LinkBtn } from "@/shared/ui/LinkBtn";
import { Routes } from "@/shared/config/routes.ts";

const MoviesLogic = () => {
  return (
    <>
      <LinkBtn to={Routes.MOVIES_SEARCH}>Поиск фильмов</LinkBtn>
    </>
  );
};

export default MoviesLogic;
