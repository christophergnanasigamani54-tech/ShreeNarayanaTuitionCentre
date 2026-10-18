import { Globe } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

/**
 * Small pill button that switches the whole site between English and Tamil.
 * It always shows the language you can switch TO ("தமிழ்" while in English,
 * "English" while in Tamil).
 */
export default function LanguageToggle({ className = "" }) {
  const { t, toggleLang } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={t.toggle.aria}
      className={`inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-white px-3 py-2 text-sm font-semibold text-brand-700 shadow-soft transition-all duration-200 hover:bg-brand-50 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-200 ${className}`}
    >
      <Globe size={16} aria-hidden="true" />
      <span>{t.toggle.label}</span>
    </button>
  );
}
