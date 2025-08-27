import type { JSX, ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./LinkBtn.module.scss";

/**
 * Props компонента LinkBtn.
 *
 * @property {string} to - Маршрут навигации.
 * @property {ReactNode} children - Дочерние элементы.
 */
export interface LinkBtnProps {
  to: string;
  children: ReactNode;
}

/**
 * React-компонент, отображающий кнопку с навигацией.
 *
 * @component
 * @param {LinkBtnProps} props - Props компонента.
 * @returns {JSX.Element} JSX-элемент кнопки навигационной панели.
 */

const LinkBtn = ({ to, children }: LinkBtnProps): JSX.Element => {
  return (
    <Link to={to} className={styles.linkBtn}>
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
