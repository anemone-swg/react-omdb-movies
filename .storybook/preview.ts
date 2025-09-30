import type { Preview } from "@storybook/react-webpack5";
import "@/app/styles/App.scss";
import { RouterDecorator } from "./RouterDecorator";
import { ThemeDecorator } from "./ThemeDecorator";

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: ["light", "dark"],
    },
  },
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [RouterDecorator, ThemeDecorator],
};

export default preview;
