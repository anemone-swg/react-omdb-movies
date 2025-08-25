import { useContext } from "react";
import { ThemeContext } from "@/shared/context/themeContext";

/**
 * Хук для доступа к текущей теме и функции её переключения.
 * Должен вызываться внутри компонента, обёрнутого в ThemeProvider.
 *
 * @throws {Error} Если хук используется вне ThemeProvider
 * @returns Объект с темой и функцией переключения
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
};
