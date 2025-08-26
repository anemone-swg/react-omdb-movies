import { Link } from "react-router-dom";
import { Routes } from "@/shared/config/routes.ts";

const MoviesLogic = () => {
  return (
    <>
      <Link to={Routes.MOVIES_SEARCH}>Поиск фильмов</Link>
    </>
  );
};

export default MoviesLogic;
