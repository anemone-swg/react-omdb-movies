import type { JSX } from "react";
import { NavLink } from "react-router-dom";
import type { IconType } from "react-icons";

/**
 * Props компонента NavbarBtn.
 *
 * @property {string} to - Маршрут навигации.
 * @property {string} [label] - Название кнопки.
 * @property {IconType} icon - Иконка.
 */
export interface NavbarBtnProps {
  to: string;
  label?: string;
  icon: IconType;
}

/**
 * React-компонент, отображающий кнопку навигационной панели.
 *
 * @component
 * @param {NavbarBtnProps} props - Props компонента.
 * @returns {JSX.Element} JSX-элемент кнопки навигационной панели.
 */
const NavbarBtn = ({ to, label, icon: Icon }: NavbarBtnProps): JSX.Element => (
  <NavLink
    to={to}
    className="bg-button hover:bg-button-hover transition-colors text-white px-4 py-2 rounded flex items-center gap-2"
  >
    <Icon className="w-5 h-5" />
    {label && <span>{label}</span>}
  </NavLink>
);

export default NavbarBtn;
