export default function Title(props) {
  const { children, center = false } = props;
  return (
    <h2 className={`text-3xl font-bold text-white mb-6 ${center && "text-center"}`}>
      {children}
    </h2>
  );
}