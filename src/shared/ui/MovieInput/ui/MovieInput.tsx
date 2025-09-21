import type { JSX } from "react";
import React from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

/**
 * Props компонента MovieInput.
 *
 * @property {string} value - Строка поиска.
 * @property {(e: React.ChangeEvent<HTMLInputElement>) => void} onChange - Действие при изменении.
 * @property {string} [className] - Кастомный стиль.
 * @property {string} [placeholder] - Строка в поиске по умолчанию.
 */

export interface MovieInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
}

/**
 * React-компонент, отображающий input для поиска фильмов.
 *
 * @component
 * @param {MovieInputProps} props - Props компонента.
 * @returns {JSX.Element} JSX-элемент с input'ом.
 */

const MovieInput = ({
  value,
  onChange,
  className,
  placeholder,
  ...otherProps
}: MovieInputProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <input
      className={clsx("border rounded p-2 flex-1", className)}
      type="text"
      placeholder={placeholder ?? t("инпут_фильмов_поиск")}
      value={value}
      onChange={onChange}
      {...otherProps}
    />
  );
};

export default React.memo(MovieInput);
