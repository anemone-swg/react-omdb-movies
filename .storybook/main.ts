import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";

const isDev = process.env.NODE_ENV === "development";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-webpack5-compiler-swc", "@storybook/addon-docs"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@": path.resolve(__dirname, "../src"),
      };
    }

    if (config.module?.rules) {
      config.module.rules.push({
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              esModule: false,
              modules: {
                namedExport: false,
                auto: (resourcePath: string) =>
                  resourcePath.includes(".module."),
                localIdentName: isDev
                  ? "[path][name]__[local]--[hash:base64:5]"
                  : "[hash:base64:8]",
                exportLocalsConvention: "asIs",
              },
            },
          },
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: [path.resolve(__dirname, "../src/app/styles")],
              },
            },
          },
        ],
      });
    }

    return config;
  },
};

export default config;
