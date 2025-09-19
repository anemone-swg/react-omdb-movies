import "@testing-library/jest-dom";
import { TextDecoder, TextEncoder } from "util";

Object.assign(global, { TextDecoder, TextEncoder });

jest.mock("react-i18next", () => {
  const changeLanguageMock = jest.fn();
  return {
    useTranslation: () => ({
      t: (key: string) => key,
      i18n: {
        changeLanguage: changeLanguageMock,
        language: "ru",
      },
    }),
    __esModule: true,
    changeLanguageMock,
  };
});
