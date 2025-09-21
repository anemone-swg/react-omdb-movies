import React, { type JSX } from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

/**
 * Props компонента LangSwitcher.
 *
 * @property {string} [className] - Кастомный стиль.
 */
export interface LangSwitcherProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

/**
 * Кнопка переключения языка (русский/английский).
 * Отображает язык в зависимости от текущего.
 * При клике переключает язык.
 *
 * @component
 * @returns {JSX.Element} JSX-элемент кнопки для переключения языка
 */
const LangSwitcher = ({
  className,
  ...otherProps
}: LangSwitcherProps): JSX.Element => {
  const { i18n } = useTranslation();

  const toggleLanguage = async () => {
    const newLang = i18n.language === "ru" ? "en" : "ru";
    await i18n.changeLanguage(newLang);
  };

  return (
    <button
      data-testid={"lang-switcher-btn"}
      className={clsx(
        "bg-button hover:bg-button-hover transition-colors text-white px-4 py-2 rounded",
        className,
      )}
      onClick={toggleLanguage}
      {...otherProps}
    >
      {i18n.language === "ru" ? "Ru" : "En"}
    </button>
  );
};

export default LangSwitcher;
