import type { Decorator } from "@storybook/react";
import type { Theme } from "@/shared/types/theme";

export const ThemeDecorator: Decorator = (Story, context) => {
  const theme = (context.globals.theme as Theme) || "light";
  document.documentElement.setAttribute("data-theme", theme);
  return <Story />;
};
