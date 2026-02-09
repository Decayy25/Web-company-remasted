import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route} from 'react-router-dom';

import Home from "./components/Home.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

// import Login from "./pages/Login.jsx";
// import Register from "./pages/Register.jsx";

// import Visi_misi from "./pages/VisiMisi.jsx";
// import Tata_tertib from "./pages/TataTertib.jsx";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // useEffect(() => {
  //   fetch("http://127.0.0.1:5050/api/accounts")
  //     .then(res => res.json())
  //     .then(data => setAccount(data))
  //     .catch(err => console.error("Error fetching account:", err));
  // }, []);

  useEffect(() => {
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
      {/* <route path="/informasi" element={<Informasi />} />
      <route path="/Kurikulum" element={<Kurikulum />} />
      <route path="/login" element={<Login/>} />
      <route path="/register" element={<Register/>} />
      <route path="/contact" element={<Contact />} />
      <route path="/visi-misi" element={<Visi_misi/>} />
      <route path="/tata-tertib" element={<Tata_tertib/>} /> */}
    </Routes>

    <Footer />
    </>
  )
}

export default App