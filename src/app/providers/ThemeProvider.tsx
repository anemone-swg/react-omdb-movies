import { type JSX, type ReactNode, useEffect, useState } from "react";
import { ThemeContext } from "@/shared/context/themeContext";
import type { Theme } from "@/shared/types/theme";

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
    const saved = localStorage.getItem("theme");
    return saved === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
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
