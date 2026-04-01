import Card from "../atoms/Card";

export default function ImageCard({ href, img, title, subtitle, target = "_blank", className = "", ...rest }) {
  return (
    <a
      href={href}
      target={target}
      rel="noreferrer"
      className={`block transition-transform hover:-translate-y-1 ${className}`}
      {...rest}
    >
      <Card className="p-0 overflow-hidden">
        <img src={img} alt={title} className="w-full h-40 object-cover" />
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
          {subtitle && <p className="text-sm text-slate-300">{subtitle}</p>}
        </div>
      </Card>
    </a>
  );
}
