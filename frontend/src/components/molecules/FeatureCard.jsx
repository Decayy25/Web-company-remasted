import Card from "../atoms/Card";
import Title from "../atoms/Title";

export default function FeatureCard({ title, children }) {
  return (
    <Card>
      {title && <Title>{title}</Title>}
      <div className="text-slate-300">{children}</div>
    </Card>
  );
}
