import { Users, Award, ArrowRight, BookOpen } from "lucide-react";
import Button from "./ui/Button";
import siteConfig from "../config/siteConfig";
import stats from "../config/stats";
import { getWhatsAppGroupLink } from "../config/whatsapp";
import { useLanguage } from "../i18n/LanguageContext";
import heroPhoto from "../assets/hero-photo.jpeg";

export default function Hero() {
  const { t, brand } = useLanguage();
  const yearsOfExperience = new Date().getFullYear() - siteConfig.foundedYear;

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white pt-28 pb-16 sm:pt-36 sm:pb-24"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent-400/20 blur-3xl animate-blob" aria-hidden="true" />
      <div className="pointer-events-none absolute top-1/2 -left-24 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl animate-blob" style={{ animationDelay: "3s" }} aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <div className="text-center lg:text-left animate-fadeUp">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-brand-700 shadow-soft mb-6">
            <Award size={14} className="shrink-0 text-accent-500" />
            {t.hero.badge(yearsOfExperience)}
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.1] tracking-tight mb-6">
            {t.hero.titlePrefix}
            <span className="text-brand-600">{brand.centreName}</span>
            {t.hero.titleSuffix}
          </h1>

          <p className="text-lg sm:text-xl font-medium text-slate-600 mb-4">
            {brand.tagline}
          </p>

          <p className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Button
              as="a"
              href={getWhatsAppGroupLink()}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              className="w-full sm:w-auto"
            >
              {t.hero.join}
            </Button>
            <Button as="a" href="#contact" variant="outline" className="w-full sm:w-auto">
              {t.hero.enquire} <ArrowRight size={16} />
            </Button>
          </div>

          <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Users size={18} className="shrink-0 text-brand-600" />
              <span>{t.hero.studentsMentored(stats.studentsMentored)}</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen size={18} className="shrink-0 text-brand-600" />
              <span>{t.hero.classes}</span>
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className="relative animate-fadeUp" style={{ animationDelay: "150ms" }}>
          <div className="relative mx-auto max-w-md aspect-square rounded-[2.5rem] shadow-card overflow-hidden">
            <img
              src={heroPhoto}
              alt={t.hero.imageAlt(brand.centreName)}
              className="h-full w-full object-cover"
            />

            {/* Floating badge cards */}
            <div className="absolute top-6 left-6 bg-white rounded-2xl shadow-card px-4 py-3 animate-float">
              <p className="text-xs text-slate-400">{t.hero.resultRate}</p>
              <p className="text-lg font-bold text-brand-700">{stats.passPercentage}</p>
            </div>
            <div
              className="absolute bottom-6 right-6 bg-white rounded-2xl shadow-card px-4 py-3 animate-float"
              style={{ animationDelay: "1.2s" }}
            >
              <p className="text-xs text-slate-400">{t.hero.batchSize}</p>
              <p className="text-lg font-bold text-accent-600">{t.hero.maxBatch(stats.maxBatchSize)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
