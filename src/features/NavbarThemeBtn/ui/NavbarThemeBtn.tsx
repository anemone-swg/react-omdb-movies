import { FaRegMoon, FaRegSun } from "react-icons/fa";
import { useTheme } from "@/shared/lib/hooks/useTheme";
import type { JSX } from "react";

/**
 * Кнопка переключения темы приложения (светлая/тёмная).
 * Отображает иконку в зависимости от текущей темы.
 * При клике переключает тему.
 *
 * @component
 * @returns {JSX.Element} JSX-элемент кнопки для переключения темы
 */
const NavbarThemeBtn = (): JSX.Element => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="bg-button hover:bg-button-hover transition-colors text-white px-4 py-2 rounded"
    >
      {theme === "light" ? <FaRegSun /> : <FaRegMoon />}
    </button>
  );
};

export default NavbarThemeBtn;
