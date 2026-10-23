import { useEffect, useState } from "react";
import { BookOpen } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

function isValidKural(data) {
  return (
    data &&
    Number.isInteger(data.number) &&
    data.number >= 1 &&
    data.number <= 1330 &&
    Array.isArray(data.kural) &&
    data.kural.length === 2 &&
    data.kural.every((line) => typeof line === "string" && line.length > 0) &&
    data.meaning &&
    typeof data.meaning.en === "string" &&
    data.meaning.en.length > 0
  );
}

export default function DailyKural() {
  const { lang, t } = useLanguage();
  const [kural, setKural] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let timeout;
    const scheduleRefresh = () => {
      const now = new Date();
      const nextUtcDay = Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate() + 1
      );
      timeout = window.setTimeout(() => {
        setRetryCount((count) => count + 1);
        scheduleRefresh();
      }, nextUtcDay - now.getTime());
    };

    scheduleRefresh();
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    async function loadKural() {
      setHasError(false);
      setKural(null);

      try {
        const response = await fetch("https://kural.codewithram.dev/api/daily", {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error(`Kural request failed: ${response.status}`);

        const data = await response.json();
        if (!isValidKural(data)) {
          throw new Error("Kural service returned an invalid response");
        }

        setKural({
          number: data.number,
          line1: data.kural[0],
          line2: data.kural[1],
          translation: data.meaning.en,
        });
      } catch (error) {
        if (controller.signal.aborted) return;
        console.error("Unable to load today's Thirukkural.", error);
        setHasError(true);
      }
    }

    loadKural();
    return () => controller.abort();
  }, [retryCount]);

  return (
    <section
      className="relative z-10 mx-auto mb-10 max-w-4xl px-4 sm:px-6 lg:px-8"
      aria-labelledby="daily-kural-title"
      aria-busy={!kural && !hasError}
    >
      <div className="rounded-3xl border border-brand-100 bg-white/90 px-5 py-6 text-center shadow-soft backdrop-blur-sm sm:px-8">
        <h2
          id="daily-kural-title"
          className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-700 sm:text-sm"
        >
          <BookOpen size={16} aria-hidden="true" />
          {t.dailyKural.title}
        </h2>

        {kural ? (
          <>
            <blockquote
              className="font-display text-lg font-semibold leading-relaxed text-slate-900 sm:text-xl"
              lang="ta"
            >
              <p>{kural.line1}</p>
              <p>{kural.line2}</p>
            </blockquote>
            {lang === "en" && (
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                {kural.translation}
              </p>
            )}
            <p className="mt-3 text-xs font-semibold text-brand-700">
              {t.dailyKural.number(kural.number)}
            </p>
          </>
        ) : hasError ? (
          <div role="alert">
            <p className="text-sm text-slate-600">{t.dailyKural.error}</p>
            <button
              type="button"
              onClick={() => setRetryCount((count) => count + 1)}
              className="mt-2 text-sm font-semibold text-brand-700 underline underline-offset-2 hover:text-brand-900"
            >
              {t.dailyKural.retry}
            </button>
          </div>
        ) : (
          <p className="text-sm text-slate-500" role="status">
            {t.dailyKural.loading}
          </p>
        )}
      </div>
    </section>
  );
}
