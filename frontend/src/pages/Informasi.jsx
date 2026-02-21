import { useState } from "react";
import "../App.css"
import profile from "../assets/img/profile.png";

const members = [
  { title: "Ekstrakurikuler", target: "", href:"/Ekstrakurikuler" , aos: "fade-down-right", rotate: "-9deg"},
  { title: "Informasi Jurusan", target: "_blank", href: "/jurusan.pdf", aos: "fade-down-left", rotate: "9deg"},
  { title: "Jadwal Pelajaran", target: "_blank", href: "/jadwal.pdf", aos: "fade-up-right", rotate: "-9deg"},
  { title: "Brosur PPDB 2024", target: "_blank", href: "/brosur.pdf", aos: "fade-up-left", rotate: "9deg"},
];

export default function Informasi () {
    const [hoverIndex, setHoverIndex] = useState(null);

    return (
    <>
        <section id="informasi" className="about-section" >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center" data-aos="fade-up">informasi Sekolah</h2>
            <div className="about-container flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-[10rem]">
                <div 
                    className="about-left grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-[10rem] !w-auto !h-auto justify-items-center" 
                    id="about-left">
                    {members.map((member, i) => (
                        <a 
                            key={i}
                            href={member.href}
                            target={member.target}
                            rel={member.target === "_blank" ? "noopener noreferrer" : undefined}
                            download={member.href.endsWith('.pdf') ? "" : undefined}
                            data-aos={member.aos}
                            className="block"
                            onMouseEnter={() => setHoverIndex(i)}
                            onMouseLeave={() => setHoverIndex(null)}
                        >
                            <div 
                                className="about-box p-4 text-center mx-auto transition-transform duration-300"
                                style={{
                                transform:
                                  hoverIndex === i
                                    ? `rotate(${member.rotate}) scale(1.05)`
                                    : "rotate(0deg)"
                                }}
                            >
                                <div className="max-w-32 max-h-32 rounded-full overflow-hidden border-4 border-[#51a2ff] mx-auto mb-4">
                                  <img 
                                    src={profile}
                                    alt={member.title}
                                    className="w-full h-full object-cover"
                                  />
                                </div>

                                <h3 className="text-lg font-semibold">
                                    {member.title}
                                </h3>
                            </div>
                        </a>
                    ))}
                </div>

                <div 
                    className="w-full max-w-[460px] bg-[#1a1b26] border-[6px] 
                    border-[#51a2ff] rounded-[28px] shadow-xl p-6 md:p-8 mx-auto lg:mx-0"
                    data-aos="flip-left"
                    data-aos-duration="2000"
                    data-aos-easing="ease-out-cubic"
                >
                    <div className="shadow-lg rounded-lg">
                        <table className="min-w-full justify-center">
                            <tbody>
                                <tr><td className="py-2 px-4 border-b">NPSN</td><td className="py-2 px-4 border-b">69956589</td></tr>
                                <tr><td className="py-2 px-4 border-b">Nama</td><td className="py-2 px-4 border-b">SMKS MA ARIF TERPADU CICALENGKA</td></tr>
                                <tr><td className="py-2 px-4 border-b">Status Sekolah</td><td className="py-2 px-4 border-b">SWASTA</td></tr>
                                <tr><td className="py-2 px-4 border-b">Alamat Jalan</td><td className="py-2 px-4 border-b">JL. DEWI SARTIKA NO.119 RT 1 RW 4</td></tr>
                                <tr><td className="py-2 px-4 border-b">Desa/Kelurahan</td><td className="py-2 px-4 border-b">Cicalengka Kulon</td></tr>
                                <tr><td className="py-2 px-4 border-b">Kecamatan</td><td className="py-2 px-4 border-b">Kec. Cicalengka</td></tr>
                                <tr><td className="py-2 px-4 border-b">Kabupaten/Kota</td><td className="py-2 px-4 border-b">Kab. Bandung</td></tr>
                                <tr><td className="py-2 px-4 border-b">Provinsi</td><td className="py-2 px-4 border-b">Prov. Jawa Barat</td></tr>
                                <tr><td className="py-2 px-4 border-b">Kode Pos</td><td className="py-2 px-4 border-b">40395</td></tr>
                                <tr><td className="py-2 px-4 border-b">Bentuk Pendidikan</td><td className="py-2 px-4 border-b">SMK</td></tr>
                                <tr><td className="py-2 px-4 border-b">Kepala Sekolah</td><td className="py-2 px-4 border-b">Wieke Dewi Kania</td></tr>
                                <tr><td className="py-2 px-4 border-b">Akreditas</td><td className="py-2 px-4 border-b"><p className="text-green-600">🄱</p></td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}