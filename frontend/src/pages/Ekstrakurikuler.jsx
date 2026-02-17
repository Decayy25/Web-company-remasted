import React from "react";
import osis from "../assets/img/Ekstrakurikuler/osis.jpg";
import irma from "../assets/img/Ekstrakurikuler/irma.jpg";
import paskibra from "../assets/img/Ekstrakurikuler/paskibra.jpg";
import lingkung_seni from "../assets/img/Ekstrakurikuler/lingkung_seni.jpg";
import futsal from "../assets/img/Ekstrakurikuler/futsal.jpg";
import basket from "../assets/img/Ekstrakurikuler/basket.jpg";
import pramuka from "../assets/img/Ekstrakurikuler/pramuka.jpg";
import pmr from "../assets/img/Ekstrakurikuler/pmr.jpg";
import badbinton from "../assets/img/Ekstrakurikuler/badbinton.jpg";
import voli from "../assets/img/Ekstrakurikuler/voli.jpg";
import pik_r from "../assets/img/Ekstrakurikuler/pik_r.jpg";
import mapa from "../assets/img/Ekstrakurikuler/mapa.jpg";
import karate from "../assets/img/Ekstrakurikuler/karate.jpg";
import jurnalis from "../assets/img/Ekstrakurikuler/jurnalis.jpg";

import "../App.css";

const eskul_list = [
  {eks: 'Osis', img: osis, href: 'https://www.instagram.com/osissmartpresent_/'},
  {eks: 'Irma', img: irma, href: 'https://www.instagram.com/irmasmartclk_/'},
  {eks: 'Paskibra', img: paskibra, href: 'https://www.instagram.com/pasustaka/'},
  {eks: 'Lingkung Seni', img: lingkung_seni, href: 'https://www.instagram.com/_seniituasik/'},
  {eks: 'Futsal', img: futsal, href: 'https://www.instagram.com/smart_futsal/'},
  {eks: 'Basket', img: basket, href: 'https://www.instagram.com/basketsmart_/'},
  {eks: 'pramuka', img: pramuka, href: 'https://www.instagram.com/pramukasmartpresent_/'},
  {eks: 'PMR', img: pmr, href: 'https://www.instagram.com/pmrsmart__/'},
  {eks: 'Badbinton', img: badbinton, href: 'https://www.instagram.com/shutlemater_/'},
  {eks: 'Voli', img: voli, href: 'https://www.instagram.com/_smart_vollyball/'},
  {eks: 'Pik-r', img: pik_r, href: 'https://www.instagram.com/pikr.smrt/'},
  {eks: 'MAPA', img: mapa, href: 'https://www.instagram.com/rohis.smartclk/'},
  {eks: 'Karate', img: karate, href: 'https://www.instagram.com/bkc_smart/'},
  {eks: 'Jurnalis', img: jurnalis, href: 'https://www.instagram.com/smartinactions_/'}
];

export default function Ekstrakurikuler () {
    return (
        <>
        <section id="ekstrakulikuler" class="py-20 bg-[#020617]">
            <h2 class="text-3xl font-bold text-center mb-10 text-white">Ekstrakurikuler</h2>
            <div id="info-eskul" class="w-full grid grid-cols-1 md:grid-cols-6 gap-6 px-6">
                {eskul_list.map((eskul) => (
                    <a href={eskul.href} target="_blank" className="block" data-aos="fade-up" data-aos-delay="8000">
                        <div className="eskul-box bg-[#1a1b26] p-6 text-center rounded-lg hover:scale-105">
                            <img src={eskul.img} alt={eskul.eks} className="w-full h-40 object-cover rounded-full mb-4" />
                            <h2 className="text-lg font-semibold">{eskul.eks}</h2                   >
                        </div>
                    </a>
                ))}
            </div>
        </section>
      </>
    );
}