import type { JSX } from "react";
import React from "react";

/**
 * Props компонента MovieInput.
 *
 * @property {string} value - Строка поиска.
 * @property {(e: React.ChangeEvent<HTMLInputElement>) => void} onChange - Действие при изменении.
 */

export interface MovieInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * React-компонент, отображающий input для поиска фильмов.
 *
 * @component
 * @param {MovieInputProps} props - Props компонента.
 * @returns {JSX.Element} JSX-элемент с input'ом.
 */

const MovieInput = ({ value, onChange }: MovieInputProps): JSX.Element => {
  return (
    <input
      className="border rounded p-2 flex-1"
      type="text"
      placeholder={"Введите название..."}
      value={value}
      onChange={onChange}
    />
  );
};

export default React.memo(MovieInput);
