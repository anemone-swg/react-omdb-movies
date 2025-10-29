import { type RefObject, useEffect } from "react";

export interface UseInfiniteScrollOptions {
  callback?: () => void;
  triggerRef: RefObject<HTMLElement | null>;
  wrapperRef?: RefObject<HTMLElement | null>;
}

export const useInfiniteScroll = ({
  callback,
  triggerRef,
  wrapperRef,
}: UseInfiniteScrollOptions) => {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const triggerEl = triggerRef.current;

    if (!triggerEl) return;

    if (callback) {
      const options: IntersectionObserverInit = {
        root: wrapperRef?.current ?? null,
        rootMargin: "300px",
        threshold: 0.1,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      observer.observe(triggerEl);

      return () => {
        observer?.unobserve(triggerEl);
        observer?.disconnect();
      };
    }
  }, [callback, triggerRef, wrapperRef]);
};
