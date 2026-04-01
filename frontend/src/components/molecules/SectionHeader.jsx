import Title from "../atoms/Title";

export default function SectionHeader({ title, subtitle, center = true }) {
  return (
    <div className={`${center ? "text-center" : ""} mb-10`}>
      <Title>{title}</Title>
      {subtitle && <p className="text-slate-300 max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
}
