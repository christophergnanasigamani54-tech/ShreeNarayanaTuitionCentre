import { Target, Users2, ClipboardCheck, MessagesSquare } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import siteConfig from "../config/siteConfig";
import stats from "../config/stats";
import { useLanguage } from "../i18n/LanguageContext";

const pillarIcons = [Target, Users2, ClipboardCheck, MessagesSquare];

export default function About() {
  const { t, brand } = useLanguage();
  const years = new Date().getFullYear() - siteConfig.foundedYear;

  const statCards = [
    { value: `${years}+`, label: t.about.statYears, tone: "brand" },
    { value: stats.studentsMentored, label: t.about.statStudents, tone: "accent" },
    { value: stats.passPercentage, label: t.about.statPass, tone: "brand" },
    { value: stats.maxBatchSize, label: t.about.statBatch, tone: "accent" },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={t.about.eyebrow}
            title={t.about.title(brand.shortName)}
            description={t.about.description(siteConfig.foundedYear)}
          />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <Reveal>
            <div className="space-y-5 text-slate-600 leading-relaxed">
              <p>{t.about.p1(brand.centreName)}</p>
              <p>{t.about.p2}</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="grid grid-cols-2 gap-4">
              {statCards.map((s) => (
                <div
                  key={s.label}
                  className={`rounded-2xl p-6 text-center ${
                    s.tone === "brand" ? "bg-brand-50" : "bg-accent-400/10"
                  }`}
                >
                  <p
                    className={`text-3xl font-bold ${
                      s.tone === "brand" ? "text-brand-700" : "text-accent-600"
                    }`}
                  >
                    {s.value}
                  </p>
                  <p className="text-sm text-slate-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.about.pillars.map((pillar, i) => {
            const Icon = pillarIcons[i];
            return (
              <Reveal key={pillar.title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-white mb-4">
                    <Icon size={20} />
                  </span>
                  <h3 className="text-base font-semibold mb-2">{pillar.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{pillar.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
