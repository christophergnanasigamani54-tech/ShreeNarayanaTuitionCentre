import { Quote } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import testimonials from "../config/testimonials";
import { useLanguage } from "../i18n/LanguageContext";
import { extra } from "../i18n/extra";

// Accepts either a plain string or { en, ta } — falls back to English if Tamil is missing
const pick = (field, lang) =>
  typeof field === "string" ? field : field?.[lang] || field?.en || "";

export default function Testimonials() {
  const { lang } = useLanguage();
  const s = extra[lang].testimonials;

  // Hidden until you add real testimonials in src/config/testimonials.js
  if (!testimonials.length) return null;

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow={s.eyebrow} title={s.title} description={s.description} />
        </Reveal>

        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map((item, i) => (
            <Reveal
              key={i}
              delay={(i % 3) * 100}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <figure className="h-full rounded-2xl border border-slate-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <Quote size={28} className="mb-4 text-accent-500" aria-hidden="true" />
                <blockquote className="mb-6 leading-relaxed text-slate-600">
                  {pick(item.quote, lang)}
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-600 font-bold text-white"
                    aria-hidden="true"
                  >
                    {[...item.name][0]}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-semibold text-slate-900">{item.name}</span>
                    <span className="block text-sm text-slate-500">
                      {pick(item.relation, lang)}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}