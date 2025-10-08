import { useTranslation } from "react-i18next";
import { NavbarThemeBtn } from "@/features/NavbarThemeBtn";
import { LangSwitcher } from "@/features/LangSwitcher";
import { NavbarBtn } from "@/shared/ui/NavbarBtn";
import { NavbarItemsList } from "../model/items";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <>
      <nav className="px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold select-none">OmdbMovies</div>

        <div className="flex space-x-4">
          {NavbarItemsList.map(
            ({ to, label, icon, "data-testid": testId, className }) => (
              <NavbarBtn
                key={to}
                to={to}
                data-testid={testId}
                icon={icon}
                label={label ? t(label) : undefined}
                className={className}
              />
            ),
          )}
          <NavbarThemeBtn />
          <LangSwitcher />
        </div>
      </nav>
      <hr className="border-navbar-hr border-t" />
    </>
  );
};

export default Navbar;
