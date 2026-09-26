export default function SectionHeading({ eyebrow, title, description, center = true }) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""} mb-12`}>
      {eyebrow && (
        <span className="inline-block rounded-full bg-brand-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700 mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">{title}</h2>
      {description && (
        <p className="text-slate-500 text-base sm:text-lg leading-relaxed">{description}</p>
      )}
    </div>
  );
}
