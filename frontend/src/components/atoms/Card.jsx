export default function Card (props) {
    const { children, className = "" } = props;
    return (
        <div className={`bg-[#1a1b26] p-6 rounded-xl shadow-lg ${className}`}>
            {children}
        </div>
    );
}