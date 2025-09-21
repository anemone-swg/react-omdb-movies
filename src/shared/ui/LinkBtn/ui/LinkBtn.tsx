import type { JSX, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import clsx from "clsx";
import styles from "./LinkBtn.module.scss";

/**
 * Props компонента LinkBtn.
 *
 * @property {string} to - Маршрут навигации.
 * @property {ReactNode} children - Дочерние элементы.
 * @property {string} [className] - Кастомный стиль.
 */
export interface LinkBtnProps extends LinkProps {
  to: string;
  children: ReactNode;
  className?: string;
}

/**
 * React-компонент, отображающий кнопку с навигацией.
 *
 * @component
 * @param {LinkBtnProps} props - Props компонента.
 * @returns {JSX.Element} JSX-элемент кнопки навигационной панели.
 */

const LinkBtn = ({ to, children, className, ...otherProps }: LinkBtnProps): JSX.Element => {
  return (
    <Link to={to} className={clsx(styles.linkBtn, className)} {...otherProps}>
      <span className={styles.linkBtn__circle} aria-hidden="true">
        <span
          className={`${styles.linkBtn__arrow} ${styles.linkBtn__icon}`}
        ></span>
      </span>
      <span className={styles.linkBtn__btnText}>{children}</span>
    </Link>
  );
};

export default LinkBtn;
