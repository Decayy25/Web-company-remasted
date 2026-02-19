import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

export default function Header ({ setToken }) {
    const navigate = useNavigate;

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userEmail");
        setToken(null);
        navigate("/login");
    };

    return(
        <header>
            <div className="container-head">
                <div className="w-full mx-auto px-8 py-3 flex items-center justify-between">
                    <p className="text-2xl font-bold text-blue-400">SMarT Clk</p>
                    <div className="flex items-center gap-6">
                        <nav className="navbar-class flex gap-4">
                          <a href="/" className="text-white hover:text-blue-500">Home</a>
                          <a href="#informasi" className="text-white hover:text-blue-500">Informasi</a>
                          <a href="#VisiMisi" className="text-white hover:text-blue-500">Visi-Misi</a>
                          <Link to="/Contact" className="text-white hover:text-blue-500">Contact</Link>
                        </nav>

                        <button
                          type="button"
                          onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}