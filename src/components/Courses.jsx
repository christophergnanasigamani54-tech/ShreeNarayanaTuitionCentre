import {
  BookOpenText,
  GraduationCap,
  Trophy,
  Target,
  UserRound,
  Laptop,
  ArrowUpRight,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import { useLanguage } from "../i18n/LanguageContext";

// Same order as t.courses.items in src/i18n/translations.js
const courseIcons = [BookOpenText, GraduationCap, Trophy, Target, UserRound, Laptop];

export default function Courses() {
  const { t } = useLanguage();

  return (
    <section id="courses" className="py-20 sm:py-28 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={t.courses.eyebrow}
            title={t.courses.title}
            description={t.courses.description}
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.courses.items.map((course, i) => {
            const Icon = courseIcons[i];
            return (
              <Reveal key={i} delay={(i % 3) * 100}>
                <div className="group h-full flex flex-col rounded-2xl bg-white p-7 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 border border-slate-100">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 mb-5 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                    <Icon size={22} />
                  </span>
                  <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">
                    {course.description}
                  </p>
                  
                  <Button
                    as="a"
                    href="#contact"
                    variant="outline"
                    className="self-start !px-5 !py-2.5 text-sm"
                    onClick={() =>
                      window.dispatchEvent(
                        new CustomEvent("enquire-course", { detail: { title: course.title } })
                      )
                    }
                  >
                    {t.courses.cta} <ArrowUpRight size={15} />
                  </Button>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
