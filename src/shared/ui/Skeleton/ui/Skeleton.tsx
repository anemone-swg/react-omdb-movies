import React, { CSSProperties, memo } from "react";
import clsx from "clsx";
import styles from "./Skeleton.module.scss";

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

const Skeleton = ({ className, height, width, border }: SkeletonProps) => {
  const sideStyles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return (
    <div className={clsx(styles.skeleton, className)} style={sideStyles} />
  );
};

export default memo(Skeleton);
