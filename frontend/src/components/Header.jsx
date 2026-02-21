import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

export default function Header({ setToken }) {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate(); // Fix typo: tambah ()

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userEmail");
        setToken(null);
        navigate("/login");
    };

    return (
        <header className="bg-[#1a1b26] sticky top-0 z-50 shadow-md">
            <div className="container-head">
                <div className="w-full mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <p className="text-2xl font-bold text-blue-400">SMarT Clk</p>

                    {/* Tombol Hamburger (Hanya muncul di Mobile) */}
                    <button 
                        className="text-white lg:hidden block focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>

                    {/* Navigasi */}
                    <nav className={`
                        fixed lg:static top-[72px] left-0 w-full lg:w-auto 
                        bg-[#1a1b26] lg:bg-transparent
                        flex flex-col lg:flex-row items-center gap-6 
                        transition-all duration-300 ease-in-out
                        px-6 py-8 lg:p-0
                        ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-full lg:translate-x-0 opacity-0 lg:opacity-100"}
                    `}>
                        <a href="/" className="text-white hover:text-blue-500 font-medium" onClick={() => setIsOpen(false)}>Home</a>
                        <a href="#informasi" className="text-white hover:text-blue-500 font-medium" onClick={() => setIsOpen(false)}>Informasi</a>
                        <a href="#VisiMisi" className="text-white hover:text-blue-500 font-medium" onClick={() => setIsOpen(false)}>Visi-Misi</a>
                        <Link to="/Contact" className="text-white hover:text-blue-500 font-medium" onClick={() => setIsOpen(false)}>Contact</Link>
                        
                        <button
                            type="button"
                            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full transition-colors w-full lg:w-auto"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    );
}