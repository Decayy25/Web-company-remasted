import Title from "../atoms/Title";

export default function SectionLayout({ id, title, subtitle, children, className = "" }) {
  return (
    <section id={id} className={`py-20 bg-[#020617] ${className}`}>
      <div className="container mx-auto px-6">
        {title && (
          <div className="mb-12 text-center">
            <Title>{title}</Title>
            {subtitle && <p className="text-slate-300 max-w-3xl mx-auto">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
