import { NavLinkProps } from "react-router-dom";
import type { IconType } from "react-icons";
import { IoHomeOutline } from "react-icons/io5";
import { GiFilmStrip } from "react-icons/gi";
import { Routes } from "@/shared/config/route/routes";

export interface NavbarItemType extends NavLinkProps {
  to: string;
  icon: IconType;
  label?: string;
  className?: string;
  "data-testid"?: string;
}

export const NavbarItemsList: NavbarItemType[] = [
  {
    to: Routes.HOME,
    icon: IoHomeOutline,
    "data-testid": "home-navbar-btn",
  },
  {
    to: Routes.MOVIES,
    icon: GiFilmStrip,
    label: "фильмы",
    "data-testid": "movies-navbar-btn",
  },
];
