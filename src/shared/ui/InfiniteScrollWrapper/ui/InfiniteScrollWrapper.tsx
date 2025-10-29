import React, { memo, useRef } from "react";
import { useInfiniteScroll } from "@/shared/lib/hooks/useInfiniteScroll";

export interface InfiniteScrollWrapperProps {
  children: React.ReactNode;
  useInnerScroll?: boolean;
  className?: string;
  onScrollEnd?: () => void;
}

const InfiniteScrollWrapper = ({
  children,
  useInnerScroll = false,
  className,
  onScrollEnd,
}: InfiniteScrollWrapperProps) => {
  const wrapperRef = useInnerScroll
    ? useRef<HTMLDivElement | null>(null)
    : undefined;
  const triggerRef = useRef<HTMLDivElement | null>(null);

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  return (
    <section
      ref={useInnerScroll ? wrapperRef : undefined}
      className={className}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  );
};

export default memo(InfiniteScrollWrapper);
