import React from "react";
import YMT from "../assets/img/Guru/YMT.jpeg";
import CAG from "../assets/img/Guru/CAG.jpeg";
import HRS from "../assets/img/Guru/HRS.png";
import TNY from "../assets/img/Guru/TNY.png";
import TDW from "../assets/img/Guru/TDW.png";
import DSK from "../assets/img/Guru/DSK.jpeg";
import AAD from "../assets/img/Guru/AAD.png";
import RKI from "../assets/img/Guru/RKI.jpg";
import RID from "../assets/img/Guru/RID.jpeg";
import MKT from "../assets/img/Guru/MKT.jpeg";
import RWN from "../assets/img/Guru/RWN.jpeg";
import ANF from "../assets/img/Guru/ANF.jpeg";
import VFR from "../assets/img/Guru/VFR.jpeg";
import HSN from "../assets/img/Guru/HSN.jpg";
import ADM from "../assets/img/Guru/ADM.png";

import "../App.css";


const guru_list = [
  { nama: 'Yanti Mulyanti, S.Pd', img: YMT, code: 'YMT'},
  { nama: 'Cecep Agus, S.Kom', img: CAG, code: 'CAG'},
  { nama: 'Handy Rusnandy, S.Kom', img: HRS, code: 'HRS'},
  { nama: 'Alpina Damayanti, S.Pd', img: ADM, code: 'ADM' },
  { nama: 'Tessa Nosalia Yosianti, S.Pd', img: TNY, code: 'TNY' },
  { nama: 'Tati Dewi Widastuty, S.Pd', img: TDW, code: 'TDW' },
  { nama: 'Dede Sinta Kristi, S.Hum', img: DSK, code: 'DSK' },
  { nama: 'Ahmad Adistia, S.Kom', img: AAD, code: 'AAD' },
  { nama: 'Riki Ramadan, S.Kom', img: RKI, code: 'RKI' },
  { nama: 'Ridwan Firdaus Suwadi Putra, S.Kom', img: RID, code: 'RID' },
  { nama: 'Mukti Alimin, S.Kom', img: MKT, code: 'MKT' },
  { nama: 'Ridwan Maulana, A.Md', img: RWN, code: 'RWN' },
  { nama: 'Vidi Firdaus, S.Pd', img: VFR, code: 'VFR' },
  { nama: 'Ana Nabilah Fauziah, S.Psi', img: ANF, code: 'ANF' },
  { nama: 'Hasanudin, S.Pd', img: HSN, code: 'HSN' }
];
export default function ProfileGuru () {
    return (
        <>
        <section id="profil-guru" class="py-20 bg-[#020617]">
            <h2 class="text-3xl font-bold text-center mb-10 text-white">Profil Guru</h2>
            <h3 class="text-2x1 font-bold text-center mb-10 text-white">Berikut Beberapa Guru Yang Kami Masukan</h3>
            <div id="info-guru" class="flex flex-wrap justify-center gap-6 px-6 w-full">
                {guru_list.map((guru) => (
                    <div className="block" data-aos="fade-up" data-aos-delay="8000">
                        <div className="bg-[#1a1b26] p-6 text-center rounded-lg hover:scale-105 w-64 h-64">
                            <img 
                                src={guru.img} 
                                alt={guru.nama} 
                                className="w-32 h-32 object-cover rounded-full mb-4 block mx-auto" 
                                />
                                <h2 
                                    class="text-lg font-semibold text-white">
                                    {guru.nama}
                                </h2>
                                <p 
                                    class="text-white mt-2">
                                    {guru.code}
                                </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        </>
    )
}