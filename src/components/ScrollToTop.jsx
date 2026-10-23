import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

/* ------------------------------------------------------------------
   SETTINGS — change these numbers if you like
   ------------------------------------------------------------------ */
const SHOW_AFTER_PX = 400; // arrow appears after scrolling down this far
const BLINK_TIMES = 3; // how many times the message blinks each time the arrow appears: 1, 2 or 3
const ON_MS = 900; // how long the message stays visible each time
const OFF_MS = 500; // gap between blinks

const TEXT = {
  en: { label: "Back to top", aria: "Scroll back to top" },
  ta: { label: "மேலே செல்ல", aria: "பக்கத்தின் மேலே செல்லவும்" },
};

export default function ScrollToTop() {
  const { lang } = useLanguage();
  const text = TEXT[lang];

  const [visible, setVisible] = useState(false);
  const [labelOn, setLabelOn] = useState(false);

  // Show the arrow only after the visitor has scrolled down a little
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Blink the message BLINK_TIMES times every time the arrow appears
  // (each time the visitor scrolls down again)
  useEffect(() => {
    if (!visible) return;

    const timers = [];
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      // No blinking for people who prefer less motion: just show it once
      timers.push(setTimeout(() => setLabelOn(true), 400));
      timers.push(setTimeout(() => setLabelOn(false), 3000));
    } else {
      let t = 400;
      for (let i = 0; i < BLINK_TIMES; i++) {
        timers.push(setTimeout(() => setLabelOn(true), t));
        t += ON_MS;
        timers.push(setTimeout(() => setLabelOn(false), t));
        t += OFF_MS;
      }
    }

    return () => {
      timers.forEach(clearTimeout);
      setLabelOn(false);
    };
  }, [visible]);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <div
      className={`fixed bottom-[26px] left-1/2 z-40 -translate-x-1/2 transition-all duration-300 sm:bottom-[38px] ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label={text.aria}
        aria-hidden={!visible}
        tabIndex={visible ? 0 : -1}
        className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-brand-200 bg-white text-brand-600 shadow-card transition-all duration-200 [@media(hover:hover)]:hover:-translate-y-0.5 [@media(hover:hover)]:hover:border-brand-600 [@media(hover:hover)]:hover:bg-brand-600 [@media(hover:hover)]:hover:text-white active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-300"
      >
        <ArrowUp size={22} aria-hidden="true" />

        {/* The blinking message (also shows when you hover with a mouse on a computer) */}
        <span
          className={`pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 whitespace-nowrap rounded-full border border-brand-200 bg-white px-3 py-1.5 text-xs font-semibold text-brand-700 shadow-card transition-opacity duration-300 [@media(hover:hover)]:group-hover:opacity-100 group-focus-visible:opacity-100 ${
            labelOn ? "opacity-100" : "opacity-0"
          }`}
        >
          {text.label}
        </span>
      </button>
    </div>
  );
}