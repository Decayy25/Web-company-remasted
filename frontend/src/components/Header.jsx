import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

export default function Header({ setToken }) {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userEmail");
        if (setToken) setToken(null);
        navigate("/login");
    };

    const closeMenu = () => setIsOpen(false);

    return (
        <header className="bg-[#1a1b26] border-b border-gray-800 sticky top-0 z-50 shadow-md">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-blue-400 tracking-wider">
                    SMarT <span className="text-white">Clk</span>
                </Link>

                {/* Hamburger Button (Mobile Only) */}
                <button 
                    className="text-white lg:hidden block focus:outline-none z-[60]"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    <svg className="w-8 h-8 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>

                {/* Navigation Menu */}
                <nav className={`
                    /* Base Mobile Styles */
                    fixed top-0 left-0 h-screen w-full bg-[#1a1b26] 
                    flex flex-col items-center justify-center gap-8 
                    transition-all duration-500 ease-in-out z-50
                    
                    /* Desktop Overrides */
                    lg:static lg:h-auto lg:w-auto lg:bg-transparent 
                    lg:flex-row lg:p-0 lg:opacity-100 lg:translate-x-0
                    
                    /* Toggle Logic */
                    ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-full lg:translate-x-0 opacity-0 lg:opacity-100"}
                `}>
                    {/* Link Items */}
                    <Link to="/" className="text-xl lg:text-base text-white hover:text-blue-400 font-medium transition-colors" onClick={closeMenu}>Home</Link>
                    <a href="#informasi" className="text-xl lg:text-base text-white hover:text-blue-400 font-medium transition-colors" onClick={closeMenu}>Informasi</a>
                    <a href="#VisiMisi" className="text-xl lg:text-base text-white hover:text-blue-400 font-medium transition-colors" onClick={closeMenu}>Visi-Misi</a>
                    <Link to="/Contact" className="text-xl lg:text-base text-white hover:text-blue-400 font-medium transition-colors" onClick={closeMenu}>Contact</Link>
                    
                    <button
                        type="button"
                        className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 lg:px-5 lg:py-2 rounded-full transition-all font-semibold shadow-lg active:scale-95 w-[200px] lg:w-auto mt-4 lg:mt-0"
                        onClick={() => { handleLogout(); closeMenu(); }}
                    >
                        Logout
                    </button>
                </nav>
            </div>
        </header>
    );
}