import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to the returned ref.
 * When the element scrolls into view, it adds the `reveal-visible`
 * class which triggers the CSS transition defined in index.css.
 */
export default function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("reveal-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return ref;
}
