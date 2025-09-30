import type { JSX } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import type { IconType } from "react-icons";
import clsx from "clsx";

/**
 * Props компонента NavbarBtn.
 *
 * @property {string} [label] - Название кнопки.
 * @property {IconType} icon - Иконка.
 * @property {string} [className] - Кастомный класс.
 */
export interface NavbarBtnProps extends NavLinkProps {
  label?: string;
  icon: IconType;
  className?: string;
}

/**
 * React-компонент, отображающий кнопку навигационной панели.
 *
 * @component
 * @param {NavbarBtnProps} props - Props компонента.
 * @returns {JSX.Element} JSX-элемент кнопки навигационной панели.
 */
const NavbarBtn = ({
  to,
  label,
  icon: Icon,
  className,
  ...otherProps
}: NavbarBtnProps): JSX.Element => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      clsx(
        "text-white px-8 py-2 rounded flex items-center gap-2 transition-colors",
        isActive ? "bg-button-hover" : "bg-button hover:bg-button-hover",
        className,
      )
    }
    {...otherProps}
  >
    <Icon className="w-5 h-5" />
    {label && <span>{label}</span>}
  </NavLink>
);

export default NavbarBtn;
