export default function Input (props) {
    const {
        label,
        name,
        type = "text",
        value,
        onChange,
        placeholder,
        readOnly = false
    } = props;

    return (
        <div className="mb-4">
            {label && (
                <label className="block text-sm text-gray-300 mb-2">
                    {label}
                </label>
            )}

            <input 
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                readOnly={readOnly}
                className="w-full px-4 py-2 rounded-lg bg-[#1a1b26] text-white border border-gray-600"
            />
        </div>
    )
}