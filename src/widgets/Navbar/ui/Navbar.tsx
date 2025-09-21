import { useTranslation } from "react-i18next";
import { GiFilmStrip } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";
import { NavbarThemeBtn } from "@/features/NavbarThemeBtn";
import { LangSwitcher } from "@/features/LangSwitcher";
import { NavbarBtn } from "@/shared/ui/NavbarBtn";
import { Routes } from "@/shared/config/route/routes";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <>
      <nav className="px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold select-none">OmdbMovies</div>

        <div className="flex space-x-4">
          <NavbarBtn
            data-testid={"home-navbar-btn"}
            to={Routes.HOME}
            icon={IoHomeOutline}
          />
          <NavbarBtn
            data-testid={"movies-navbar-btn"}
            to={Routes.MOVIES}
            label={t("фильмы")}
            icon={GiFilmStrip}
          />
          <NavbarThemeBtn />
          <LangSwitcher />
        </div>
      </nav>
      <hr className="border-navbar-hr border-t" />
    </>
  );
};

export default Navbar;
