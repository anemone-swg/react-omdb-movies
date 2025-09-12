import React, { type JSX } from "react";
import clsx from "clsx";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import { useTheme } from "@/shared/lib/hooks/useTheme";

/**
 * Props компонента NavbarThemeBtn.
 *
 * @property {string} [className] - Кастомный стиль.
 */
export interface NavbarThemeBtnProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

/**
 * Кнопка переключения темы приложения (светлая/тёмная).
 * Отображает иконку в зависимости от текущей темы.
 * При клике переключает тему.
 *
 * @component
 * @returns {JSX.Element} JSX-элемент кнопки для переключения темы
 */
const NavbarThemeBtn = ({
  className,
  ...otherProps
}: NavbarThemeBtnProps): JSX.Element => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className={clsx(
        "bg-button hover:bg-button-hover transition-colors text-white px-4 py-2 rounded",
        className,
      )}
      {...otherProps}
    >
      {theme === "light" ? <FaRegSun /> : <FaRegMoon />}
    </button>
  );
};

export default NavbarThemeBtn;
