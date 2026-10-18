import useScrollReveal from "../../hooks/useScrollReveal";

/**
 * Wraps children in a div that fades/slides into view on scroll.
 * Pass `delay` (ms) to stagger multiple items, e.g. cards in a grid.
 */
export default function Reveal({ children, delay = 0, className = "" }) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
