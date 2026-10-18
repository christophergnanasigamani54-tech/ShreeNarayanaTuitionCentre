import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";
import siteConfig from "../config/siteConfig";
import { translations, localizeHours } from "./translations";

const STORAGE_KEY = "snt-lang";
const TAMIL_FONT_ID = "tamil-font";
const TAMIL_FONT_URL =
  "https://fonts.googleapis.com/css2?family=Noto+Sans+Tamil:wght@400;500;600;700;800&display=swap";

const LanguageContext = createContext(null);

// Priority: ?lang=ta in the link  >  last choice saved in the browser  >  English
function getInitialLang() {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    if (fromUrl === "ta" || fromUrl === "en") return fromUrl;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "ta" || saved === "en") return saved;
  } catch {
    /* storage can be unavailable (private mode) — fall back to English */
  }
  return "en";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);
  const originalMeta = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;

    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }

    // Remember the English title/description from index.html the first time
    const descEl = document.querySelector('meta[name="description"]');
    if (!originalMeta.current) {
      originalMeta.current = {
        title: document.title,
        description: descEl ? descEl.getAttribute("content") : "",
      };
    }

    const meta = translations[lang].meta;
    document.title = meta.title || originalMeta.current.title;
    if (descEl) {
      descEl.setAttribute("content", meta.description || originalMeta.current.description);
    }

    // Load the Tamil font only when Tamil is used (keeps English visitors fast)
    if (lang === "ta" && !document.getElementById(TAMIL_FONT_ID)) {
      const link = document.createElement("link");
      link.id = TAMIL_FONT_ID;
      link.rel = "stylesheet";
      link.href = TAMIL_FONT_URL;
      document.head.appendChild(link);
    }
  }, [lang]);

  const toggleLang = useCallback(() => setLang((l) => (l === "en" ? "ta" : "en")), []);

  const value = useMemo(() => {
    const t = translations[lang];
    // Centre name / tagline / address: English comes from siteConfig.js, Tamil from translations.js
    const brand =
      lang === "ta"
        ? t.brand
        : {
            centreName: siteConfig.centreName,
            shortName: siteConfig.shortName,
            tagline: siteConfig.tagline,
            address: siteConfig.address,
          };
    const hours = siteConfig.openingHours.map((slot) =>
      lang === "ta" ? localizeHours(slot) : slot
    );
    return { lang, setLang, toggleLang, t, brand, hours };
  }, [lang, toggleLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}
