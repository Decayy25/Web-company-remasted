export default function Button(props) {
  const {
    children, 
    onClick, 
    type = "button",
    variant = "primary",
    full = false 
  } = props;

  const base = "px-6 py-2 rounded-lg transition";
  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    danger: "bg-red-500 hover:bg-red-600 text-white",
    outline: "border border-blue-500 text-blue-400"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${full ? "w-full" : ""}`}
    >
      {children}
    </button>
  );
}