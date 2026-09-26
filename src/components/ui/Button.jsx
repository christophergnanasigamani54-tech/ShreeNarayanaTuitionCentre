const variants = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 shadow-soft hover:shadow-card focus-visible:ring-brand-300",
  accent:
    "bg-accent-500 text-white hover:bg-accent-600 shadow-soft hover:shadow-card focus-visible:ring-accent-300",
  outline:
    "bg-white text-brand-700 border border-brand-200 hover:bg-brand-50 focus-visible:ring-brand-200",
  ghost:
    "bg-white/10 text-white border border-white/30 hover:bg-white/20 focus-visible:ring-white/40",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1fb958] shadow-soft hover:shadow-card focus-visible:ring-green-300",
};

export default function Button({
  as = "button",
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const Component = as;
  return (
    <Component
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold
        transition-all duration-200 ease-out active:scale-95 focus-visible:outline-none focus-visible:ring-4
        ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
