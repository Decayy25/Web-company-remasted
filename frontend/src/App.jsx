import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom';

import Home from "./components/Home.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Informasi from './pages/Informasi.jsx';
import VisiMisi from "./pages/VisiMisi.jsx";
import TataTertib from "./pages/TataTertib.jsx";
import BantuanAkademik from "./pages/BantunAkademik.jsx";

// import Login from "./pages/Login.jsx";
// import Register from "./pages/Register.jsx";




import './App.css'
import AOS from "aos";
import "aos/dist/aos.css"

function App() {
  const [acount, setCount] = useState([])

  // useEffect(() => {
  //   fetch("http://127.0.0.1:5050/api/accounts")
  //     .then(res => res.json())
  //     .then(data => setAccount(data))
  //     .catch(err => console.error("Error fetching account:", err));
  // }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false
    });
    AOS.refresh();

    const dummy = [
      { username: "Admin", email: "admin@mail.com" },
      { username: "User", email: "user@mail.com" }
    ];

    setCount(dummy);
  }, []);



  return (
    <>
    <Header />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Informasi" element={<Informasi />} />
      <Route path="/VisiMisi" element={<VisiMisi/>} />
      <Route path='/TataTertib' element={<TataTertib />}/>
      <Route path='/BantuanAkademik' element={<BantuanAkademik />} />

      {/* <route path="/Kurikulum" element={<Kurikulum />} /> */}
      {/* <route path="/login" element={<Login/>} />
      <route path="/register" element={<Register/>} />
      <route path="/contact" element={<Contact />} /> */}
      
      {/* <route path="/tata-tertib" element={<Tata_tertib/>} /> */}
    </Routes>

    <Footer />
    </>
  )
}

export default App