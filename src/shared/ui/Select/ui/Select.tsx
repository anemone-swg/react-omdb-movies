import React, { type JSX, memo, useMemo } from "react";
import clsx from "clsx";

export interface SelectOption {
  value: string;
  content: string;
}

/**
 * Props компонента Select.
 * @property {string} [className] - Кастомный класс.
 * @property {SelectOption[]} [options] - Опции select'а.
 */
export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  options?: SelectOption[];
}

/**
 * React-компонент, отображающий select.
 *
 * @component
 * @param {NavbarBtnProps} props - Props компонента.
 * @returns {JSX.Element} JSX-элемент select'а.
 */
const Select = ({
  className,
  options,
  ...otherProps
}: SelectProps): JSX.Element => {
  const optionsList = useMemo(
    () =>
      options?.map((opt) => (
        <option value={opt.value} key={opt.value}>
          {opt.content}
        </option>
      )),
    [options],
  );

  return (
    <select {...otherProps} className={clsx("border p-2 rounded", className)}>
      {optionsList}
    </select>
  );
};

export default memo<SelectProps>(Select);
