import { Send, MessageCircle, Users, TrendingUp, ArrowRight } from "lucide-react";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import { useLanguage } from "../i18n/LanguageContext";
import { extra } from "../i18n/extra";

// Same order as `steps.items` in src/i18n/extra.js
const stepIcons = [Send, MessageCircle, Users, TrendingUp];

export default function HowItWorks() {
  const { lang } = useLanguage();
  const s = extra[lang].steps;

  return (
    <section
      id="how-it-works"
      className="py-20 sm:py-28 bg-gradient-to-br from-brand-900 to-brand-950"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-accent-400 mb-4">
              {s.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-white">
              {s.title}
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {s.description}
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {s.items.map((item, i) => {
            const Icon = stepIcons[i];
            return (
              <Reveal key={i} delay={i * 100}>
                <article className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors duration-300 hover:bg-white/10">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-500 text-lg font-bold text-brand-950">
                      {i + 1}
                    </span>
                    <Icon size={22} className="text-brand-200" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-300">{item.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-10 text-center">
            <Button as="a" href="#contact" variant="outline">
              {s.cta} <ArrowRight size={16} />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}