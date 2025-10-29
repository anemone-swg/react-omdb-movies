import "@testing-library/jest-dom";
//без библы "whatwg-fetch" не работал переход на другие страницы
import "whatwg-fetch";
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

// Мок IntersectionObserver для Jest
global.IntersectionObserver = class {
  constructor(private callback: unknown) {}
  observe() {}
  unobserve() {}
  disconnect() {}
} as unknown as typeof IntersectionObserver;
