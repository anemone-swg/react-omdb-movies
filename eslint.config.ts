import path from "path";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import prettierPlugin from "eslint-plugin-prettier";
import storybook from "eslint-plugin-storybook";
import { defineConfig } from "eslint/config";

export default defineConfig([
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  storybook.configs["flat/recommended"],
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js, prettierPlugin },
    extends: ["js/recommended"],
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: path.resolve(__dirname),
        project: ["./tsconfig.json", "./tsconfig.e2e.json"],
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
        WebdriverIO: "readonly",
        process: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "off",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
        },
      ],
    },
  },

  // убираем typed linting для .storybook,
  // для того чтобы избавиться от ошибки eslint
  {
    files: [".storybook/**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        project: null,
      },
    },
  },
]);
