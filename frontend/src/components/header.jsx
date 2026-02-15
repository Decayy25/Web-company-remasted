import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Header () {
    return(
        <header>
            <div className="container-head">
                <div className="w-full mx-auto px-8 py-3 flex items-center justify-between">
                <p className="text-2xl font-bold text-blue-400">SMarT Clk</p>
                    <nav className="navbar-class" id="navbar">
                        <a href="/" className="text-white hover:text-blue-500">Home</a>
                        <a href="#informasi" className="text-white hover:text-blue-500">Informasi</a>
                        <a href="#VisiMisi" className="text-white hover:text-blue-500">Visi-Misi</a>
                        <Link to="/contact" className="text-white hover:text-blue-500">Contact</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}