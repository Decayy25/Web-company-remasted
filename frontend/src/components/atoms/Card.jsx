export default function Card (props) {
    const {children} = props;
    return (
        <div className="bg-[#1a1b26] p-6 rounded-xl shadow-lg">
            {children}
        </div>
    )
}