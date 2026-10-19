import { ChevronDown, MessageCircle } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import stats from "../config/stats";
import { buildWhatsAppLink } from "../config/whatsapp";
import { useLanguage } from "../i18n/LanguageContext";
import { extra } from "../i18n/extra";

export default function FAQ() {
  const { lang, brand } = useLanguage();
  const s = extra[lang].faq;
  const items = s.items(stats.maxBatchSize);

  // Helps Google show your questions directly in search results (SEO)
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow={s.eyebrow} title={s.title} description={s.description} />
        </Reveal>

        <div className="space-y-4">
          {items.map((item, i) => (
            <Reveal key={i} delay={(i % 3) * 80}>
              <details className="group rounded-2xl border border-slate-100 bg-white shadow-soft transition-shadow duration-300 open:shadow-card">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl p-5 font-semibold text-slate-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-200 sm:p-6 [&::-webkit-details-marker]:hidden">
                  <span className="min-w-0">{item.q}</span>
                  <ChevronDown
                    size={20}
                    className="shrink-0 text-brand-600 transition-transform duration-200 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="-mt-1 px-5 pb-5 text-sm leading-relaxed text-slate-600 sm:px-6 sm:pb-6 sm:text-base">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 text-center">
            <p className="mb-4 font-medium text-slate-700">{s.still}</p>
            <Button
              as="a"
              href={buildWhatsAppLink(s.askMessage(brand.centreName))}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
            >
              <MessageCircle size={18} /> {s.ask}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}