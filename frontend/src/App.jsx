import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from "./pages/Home.jsx";
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

  return (
    <Routes>
      <Route path="/login" element={!token ? <Login setToken={setToken} /> : <Navigate to="/" />} />
      <Route path="/register" element={!token ? <Register /> : <Navigate to="/" />} />
      <Route path="/" element={token ? <Home setToken={setToken} /> : <Navigate to="/login" />} />
      <Route path="/informasi" element={<Informasi setToken={setToken} />} />
      <Route path="/visimisi" element={<VisiMisi setToken={setToken} />} />
      <Route path="/tatatertib" element={<TataTertib setToken={setToken} />} />
      <Route path="/bantuanakademik" element={<BantuanAkademik setToken={setToken} />} />
      <Route path="/ekstrakurikuler" element={<Ekstrakurikuler setToken={setToken} />} />
      <Route path="/profileguru" element={<ProfileGuru setToken={setToken} />} />
      <Route path="/kurikulum" element={<Kurikulum setToken={setToken} />} />
      <Route path="/contact" element={token ? <Contact token={token} setToken={setToken} /> : <Navigate to="/login" />} />
    </Routes>
  )
}