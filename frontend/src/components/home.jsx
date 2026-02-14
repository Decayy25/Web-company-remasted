import React from "react";
import heroImg from "../assets/img/image.png";
import Informasi from "../pages/Informasi";
import VisiMisi from "../pages/VisiMisi.jsx";
import "../App.css"

export default function Home() {
    return (
        <>
        <section id="home" className="hero-height relative min-h-screen overflow-hidden bg-[#020617] flex items-center">
          <div className="absolute w-[500px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full -top-20 -left-20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div className="content">
            <h1 
              className="text-4xl md:text-5xl font-bold leading-tight text-white" 
              data-aos="fade-right" 
              data-aos-duration="800"
            >
              SMK Ma'arif
            </h1>
            <h1 
              className="text-4xl md:text-5xl font-bold leading-tight text-blue-400"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              Terpadu Cicalengka
            </h1>

            <p 
              className="mt-6 text-slate-400 text-2xl max-w-xl"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              “𝘒𝘶𝘯𝘤𝘪 𝘚𝘶𝘬𝘴𝘦𝘴 𝘢𝘥𝘢𝘭a𝘩 𝘉𝘦𝘭𝘢𝘫𝘢𝘳”
            </p>

            <p 
              className="mt-4 text-slate-400 text-2xl max-w-xl"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              Temukan potensi skill anda bersama sekolah yang mendukung, tutorial interaktif, dan sumber daya berkualitas tinggi.
            </p>
          </div>

          <div className="relative flex justify-center md:justify-end">

          <img
            src={heroImg}
            alt="Hero Image"
            className="relative w-full max-w-lg rounded-2xl shadow-2xl border border-[rgb(31,42,61)]"
            data-aos="fade-left"
            data-aos-duration="1000"
          />
          </div>
        </div>
      </section>

      <Informasi />

      <VisiMisi />
      </>
    )
}