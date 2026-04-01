import Card from "../atoms/Card";

export default function CardList({ items = [] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((item, index) => (
        <Card key={index}>
          {item.title && <h3 className="text-xl font-semibold text-blue-400 mb-3">{item.title}</h3>}
          {item.description && <p className="text-slate-300">{item.description}</p>}
        </Card>
      ))}
    </div>
  );
}
