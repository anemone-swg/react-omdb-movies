import type { Preview } from "@storybook/react-webpack5";
import "@/app/styles/App.scss";
import { RouterDecorator } from "@/shared/config/storybook/RouterDecorator";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator";
import { I18nDecorator } from "@/shared/config/storybook/I18nDecorator";

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
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    toolbar: {
      icon: "globe",
      items: [
        { value: "en", title: "English" },
        { value: "ru", title: "Russian" },
      ],
      showName: true,
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
  decorators: [
    RouterDecorator,
    ThemeDecorator,
    StoreDecorator(),
    I18nDecorator,
  ],
};

export default preview;
