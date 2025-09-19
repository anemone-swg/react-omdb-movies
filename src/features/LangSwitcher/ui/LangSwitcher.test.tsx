import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { changeLanguageMock } from "react-i18next";
import LangSwitcher from "./LangSwitcher";

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

describe("langSwitcher", () => {
  test("применяется otherProps", () => {
    render(<LangSwitcher disabled />);
    const langBtn = screen.getByTestId("lang-switcher-btn");
    expect(langBtn).toBeInTheDocument();
    // 3 разные варианта одной проверки
    expect(langBtn.getAttribute("disabled")).not.toBeNull();
    expect(langBtn).toBeDisabled();
    // expect(langBtn.disabled).toBe(true);
    screen.debug();
  });

  test("toggleLanguage вызывается при клике", () => {
    render(<LangSwitcher />);
    const langBtn = screen.getByRole("button");
    fireEvent.click(langBtn);
    expect(changeLanguageMock).toHaveBeenCalled();
  });
});
