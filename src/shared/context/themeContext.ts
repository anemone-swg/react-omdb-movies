import { createContext } from "react";
import type { Theme } from "@/shared/types/theme.ts";

/**
 * Тип данных, передаваемых через контекст темы.
 *
 * @property {Theme} theme - Тип темы приложения
 * @property {()=>void} toggleTheme - Функция переключения темы
 */
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);
