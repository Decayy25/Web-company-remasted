export default function TextArea(props) {
  const {
    label,
    name,
    value,
    defaultValue,
    onChange,
    placeholder,
    rows = 5,
    readOnly = false,
    className = "",
    ...rest
  } = props;

  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm text-gray-300 mb-2" htmlFor={name}>
          {label}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        readOnly={readOnly}
        className={`w-full px-4 py-3 rounded-lg bg-[#1a1b26] text-white border border-gray-600 ${className}`}
        {...rest}
      />
    </div>
  );
}
