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

const courses = [
  {
    icon: BookOpenText,
    title: "Classes 6–8",
    description:
      "Foundation-building program covering Maths, Science and English with concept clarity and fun, activity-based learning.",
  },
  {
    icon: GraduationCap,
    title: "Classes 9–10",
    description:
      "Board-focused coaching across all core subjects with structured notes, chapter tests and previous-year paper practice.",
  },
  {
    icon: Trophy,
    title: "Classes 11–12",
    description:
      "In-depth coaching for Science & Commerce streams, aligned with board exams and competitive exam fundamentals.",
  },
  {
    icon: Target,
    title: "Exam Preparation",
    description:
      "Focused crash courses and mock-test series for board exams and entrance tests, with performance analysis after every test.",
  },
  {
    icon: UserRound,
    title: "Individual Coaching",
    description:
      "One-on-one sessions designed around a student's specific gaps, learning pace and goals for faster improvement.",
  },
  {
    icon: Laptop,
    title: "Online Classes",
    description:
      "Live interactive online sessions with recorded backups, digital notes and doubt-clearing — learn from anywhere.",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="py-20 sm:py-28 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Courses & Services"
            title="Programs for Every Grade & Goal"
            description="Structured coaching programs designed around your child's class, subjects and academic goals."
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <Reveal key={course.title} delay={(i % 3) * 100}>
              <div className="group h-full flex flex-col rounded-2xl bg-white p-7 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 border border-slate-100">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 mb-5 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                  <course.icon size={22} />
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
                >
                  Enquire Now <ArrowUpRight size={15} />
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
