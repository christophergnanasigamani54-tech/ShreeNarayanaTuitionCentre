import { Award, Users, FileCheck2, HeartHandshake, Library, HelpCircle } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { useLanguage } from "../i18n/LanguageContext";

// Same order as t.why.items in src/i18n/translations.js
const reasonIcons = [Award, Users, FileCheck2, HeartHandshake, Library, HelpCircle];

export default function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={t.why.eyebrow}
            title={t.why.title}
            description={t.why.description}
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.why.items.map((reason, i) => {
            const Icon = reasonIcons[i];
            return (
              <Reveal key={i} delay={(i % 3) * 100}>
                <div className="h-full rounded-2xl bg-gradient-to-br from-white to-brand-50/50 p-7 border border-brand-100/70 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-accent-500 shadow-soft mb-5">
                    <Icon size={22} />
                  </span>
                  <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{reason.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
