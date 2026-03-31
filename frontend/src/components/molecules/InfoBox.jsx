export default function InfoBox(props) {
  const { title, img, onHover, rotate, active } = props;
  
  return (
    <div
      onMouseEnter={onHover}
      className="p-4 text-center transition"
      style={{
        transform: active ? `rotate(${rotate}) scale(1.05)` : "rotate(0deg)"
      }}
    >
      <img src={img} className="w-24 h-24 rounded-full mx-auto mb-3" />
      <h3 className="text-white">{title}</h3>
    </div>
  );
}