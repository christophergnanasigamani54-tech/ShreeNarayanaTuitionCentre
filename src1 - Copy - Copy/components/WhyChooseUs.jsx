import {
  Award,
  Users,
  FileCheck2,
  HeartHandshake,
  Library,
  HelpCircle,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

const reasons = [
  {
    icon: Award,
    title: "Experienced Teachers",
    description: "Subject-matter experts with years of proven classroom teaching experience.",
  },
  {
    icon: Users,
    title: "Small Batch Size",
    description: "Limited seats per batch so every student gets noticed and guided closely.",
  },
  {
    icon: FileCheck2,
    title: "Regular Tests",
    description: "Weekly and monthly assessments to track progress and reinforce learning.",
  },
  {
    icon: HeartHandshake,
    title: "Personal Attention",
    description: "Teachers who know each student's strengths, weak spots and learning style.",
  },
  {
    icon: Library,
    title: "Study Materials",
    description: "Well-structured notes, worksheets and practice papers curated by our faculty.",
  },
  {
    icon: HelpCircle,
    title: "Doubt Clearing Sessions",
    description: "Dedicated sessions every week so no question ever goes unanswered.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="What Makes Us Different"
            description="A learning environment built around commitment, consistency and genuine care for every student's progress."
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={(i % 3) * 100}>
              <div className="h-full rounded-2xl bg-gradient-to-br from-white to-brand-50/50 p-7 border border-brand-100/70 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-accent-500 shadow-soft mb-5">
                  <reason.icon size={22} />
                </span>
                <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{reason.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
