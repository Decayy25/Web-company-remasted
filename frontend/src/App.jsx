import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

import Home from "./components/Home.jsx";
import Header from "./components/organism/Header.jsx";
import Footer from "./components/organism/Footer.jsx";

import Informasi from './pages/Informasi.jsx';
import VisiMisi from './pages/VisiMisi.jsx';
import TataTertib from "./pages/TataTertib.jsx";
import BantuanAkademik from "./pages/BantuanAkademik.jsx";
import Ekstrakurikuler from "./pages/Ekstrakurikuler.jsx";
import ProfileGuru from "./pages/ProfileGuru.jsx";
import Kurikulum from "./pages/Kurikulum.jsx";

import Login from "./pages/Login.jsx";
import Contact from './pages/Contact.jsx';
import Register from './pages/Register.jsx';

import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  const [account, setAccount] = useState([]);
  const location = useLocation();
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    
    fetch(`${import.meta.env.VITE_API_URL}/api/accounts`)
      .then(res => res.json())
      .then(data => { 
        setAccount(data || account);
        setTimeout(() => AOS.refresh(), 100);
      })
      .catch(err => console.error("Error fetching account:", err));
  }, []);

  const hideHeaderFooter = ["/login", "/register"];
  const currentPath = location.pathname.toLowerCase().replace(/\/$/, "");
  const isAuthPage = hideHeaderFooter.includes(currentPath);

  return (
    <>
      {!isAuthPage && <Header setToken={setToken} />}

      <Routes>
        <Route path="/login" element={!token ? <Login setToken={setToken} /> : <Navigate to="/" />} />
        <Route path="/register" element={!token ? <Register /> : <Navigate to="/" />} />
        <Route path="/" element={token ? <Home /> : <Navigate to="/login" />} />
        

        <Route path="/informasi" element={<Informasi />} />
        <Route path="/visimisi" element={<VisiMisi />} />
        <Route path="/tatatertib" element={<TataTertib />} />
        <Route path="/bantuanakademik" element={<BantuanAkademik />} />
        <Route path="/ekstrakurikuler" element={<Ekstrakurikuler />} />
        <Route path="/profileguru" element={<ProfileGuru />} />
        <Route path="/kurikulum" element={<Kurikulum />} />
        <Route path="/contact" element={token ? <Contact token={token} /> : <Navigate to="/login" />} />
      </Routes>

      {!isAuthPage && <Footer />}
    </>
  )
}