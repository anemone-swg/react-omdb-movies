import { type JSX, type ReactNode, useEffect, useState } from "react";
import { ThemeContext } from "@/shared/context/themeContext";
import type { Theme } from "@/shared/types/theme";
import { USER_THEME_KEY } from "@/shared/consts/localStorage";

/**
 * Пропсы компонента ThemeProvider.
 * @property {ReactNode} children - Дочерние элементы, которые получат доступ к теме
 */
interface ThemeProviderProps {
  children: ReactNode;
}

/**
 * Компонент-провайдер темы.
 * Оборачивает приложение и предоставляет доступ к текущей теме и функции её переключения.
 *
 * @param {ThemeProviderProps} props - Свойства компонента
 * @returns {JSX.Element} Провайдер контекста темы
 */

export const ThemeProvider = ({
  children,
}: ThemeProviderProps): JSX.Element => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem(USER_THEME_KEY);
    return saved === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(USER_THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
