import { NavbarThemeBtn } from "@/features/NavbarThemeBtn";
import { NavbarBtn } from "@/features/NavbarBtn";
import { GiFilmStrip } from "react-icons/gi";
import { Routes } from "@/shared/config/routes.ts";
import { IoHomeOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <nav className="px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold select-none">OmdbMovies</div>

        <div className="flex space-x-4">
          <NavbarBtn to={Routes.HOME} icon={IoHomeOutline} />
          <NavbarBtn to={Routes.MOVIES} label={"Фильмы"} icon={GiFilmStrip} />
          <NavbarThemeBtn />
        </div>
      </nav>
      <hr className="border-navbar-hr border-t" />
    </>
  );
};

export default Navbar;
