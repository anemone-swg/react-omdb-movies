import React, { type JSX, memo, ReactNode } from "react";
import clsx from "clsx";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { FaCheck, FaChevronDown } from "react-icons/fa";
import styles from "./Select.module.scss";

export interface SelectOption {
  value: string;
  content: ReactNode;
}

export interface SelectProps {
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  options?: SelectOption[];
  className?: string;
}

/**
 * React-компонент, отображающий select.
 *
 * @component
 * @param {SelectProps} props - Props компонента.
 * @returns {JSX.Element} JSX-элемент select'а.
 */
const Select = ({
  value,
  defaultValue,
  onChange,
  options,
  className,
}: SelectProps): JSX.Element => {
  const selectedOption = options?.find((opt) => opt.value === value);

  return (
    <Listbox
      as="div"
      value={value}
      onChange={onChange}
      className={clsx(className, styles.select)}
    >
      <ListboxButton className={styles.selectButton}>
        {selectedOption ? selectedOption.content : defaultValue}
        <FaChevronDown className={styles.chevron} />
      </ListboxButton>
      <ListboxOptions className={styles.options}>
        {options?.map((option) => (
          <ListboxOption
            key={option.value}
            value={option.value}
            className={({ selected }) =>
              clsx(styles.option, selected && styles.optionSelected)
            }
          >
            <FaCheck className={styles.checkIcon} />
            <div className={styles.optionContent}>{option.content}</div>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
};

export default memo<SelectProps>(Select);
