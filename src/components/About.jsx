import { Target, Users2, ClipboardCheck, MessagesSquare } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import siteConfig from "../config/siteConfig";

const pillars = [
  {
    icon: Target,
    title: "Student-Focused Learning",
    description:
      "Every lesson plan is tailored to how each student learns best, ensuring concepts are understood, not just memorized.",
  },
  {
    icon: Users2,
    title: "Experienced Teachers",
    description:
      "Our subject experts bring years of classroom experience and a genuine passion for helping students succeed.",
  },
  {
    icon: ClipboardCheck,
    title: "Regular Assessments",
    description:
      "Weekly tests and structured revision cycles track progress and catch learning gaps before they become problems.",
  },
  {
    icon: MessagesSquare,
    title: "Parent Communication",
    description:
      "Transparent, regular updates keep parents informed of attendance, performance and areas needing attention.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="About Us"
            title={`Why Families Trust ${siteConfig.shortName}`}
            description={`Since ${siteConfig.foundedYear}, we've helped students build strong academic foundations through a teaching methodology that blends conceptual clarity, consistent practice and genuine mentorship.`}
          />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <Reveal>
            <div className="space-y-5 text-slate-600 leading-relaxed">
              <p>
                {siteConfig.centreName} was founded with one simple belief: every
                student can excel when taught the right way. Our methodology
                focuses on building strong fundamentals first, followed by
                application-based practice and timely revision — not last-minute
                cramming.
              </p>
              <p>
                We keep our batches small so teachers can give real attention to
                every student, identify individual weak areas, and adapt
                teaching pace accordingly. Combined with structured tests and
                open communication with parents, this approach consistently
                delivers strong academic results.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-brand-50 p-6 text-center">
                <p className="text-3xl font-bold text-brand-700">
                  {new Date().getFullYear() - siteConfig.foundedYear}+
                </p>
                <p className="text-sm text-slate-500 mt-1">Years of Teaching</p>
              </div>
              <div className="rounded-2xl bg-accent-400/10 p-6 text-center">
                <p className="text-3xl font-bold text-accent-600">2000+</p>
                <p className="text-sm text-slate-500 mt-1">Students Mentored</p>
              </div>
              <div className="rounded-2xl bg-brand-50 p-6 text-center">
                <p className="text-3xl font-bold text-brand-700">98%</p>
                <p className="text-sm text-slate-500 mt-1">Pass Percentage</p>
              </div>
              <div className="rounded-2xl bg-accent-400/10 p-6 text-center">
                <p className="text-3xl font-bold text-accent-600">15</p>
                <p className="text-sm text-slate-500 mt-1">Max Batch Size</p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 100}>
              <div className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-white mb-4">
                  <pillar.icon size={20} />
                </span>
                <h3 className="text-base font-semibold mb-2">{pillar.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{pillar.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
