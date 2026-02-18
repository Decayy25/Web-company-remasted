import { useState, useEffect } from 'react';
// 1. Tambahkan useLocation di sini
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from "./components/Home.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Informasi from './pages/Informasi.jsx';
import VisiMisi from './pages/VisiMisi.jsx';
import TataTertib from "./pages/TataTertib.jsx";
import BantuanAkademik from "./pages/BantuanAkademik.jsx";
import Ekstrakurikuler from "./pages/Ekstrakurikuler.jsx";
import ProfileGuru from "./pages/ProfileGuru.jsx";
import Kurikulum from "./pages/Kurikulum.jsx";

import Login from "./pages/Login.jsx";
import Contact from './components/Contact.jsx';

import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  const [account, setAccount] = useState([]);
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 800, once: false });

    fetch("http://127.0.0.1:5050/api/accounts")
      .then(res => res.json())
      .then(data => { 
        setAccount(data);
        setTimeout(() => AOS.refresh(), 100);
      })
      .catch(err => console.error("Error fetching account:", err));
  }, []);

  // 3. Buat daftar halaman yang TIDAK BOLEH ada Header & Footer
  // Nanti kalau ada register, tinggal tambah: ["/login", "/register"]
  const hideHeaderFooter = ["/login", "/register"]; 

  // Cek apakah path sekarang ada di daftar hideHeaderFooter?
  const isAuthPage = hideHeaderFooter.includes(location.pathname);

  return (
    <>
      {!isAuthPage && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Informasi" element={<Informasi />} />
        <Route path="/VisiMisi" element={<VisiMisi/>} />
        <Route path='/TataTertib' element={<TataTertib />} />
        <Route path='/BantuanAkademik' element={<BantuanAkademik />} />
        <Route path='/Ekstrakurikuler' element={<Ekstrakurikuler/>} />
        <Route path='/ProfileGuru' element={<ProfileGuru /> } />
        <Route path="/Kurikulum" element={<Kurikulum />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* 5. Masukkan Route Login ke DALAM sini (Wajib!) */}
        <Route path="/login" element={<Login/>} />
      </Routes>

      {/* 6. Tampilkan Footer HANYA JIKA bukan di halaman auth */}
      {!isAuthPage && <Footer />}
    </>
  )
}