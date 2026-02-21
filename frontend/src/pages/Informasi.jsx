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
    <section id="informasi" className="py-20 bg-[#020617]">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center" data-aos="fade-up">
            Informasi Sekolah
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
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
                        className="about-box p-4 text-center w-48 transition-transform duration-300 mx-auto"
                        style={{
                            transform: hoverIndex === i
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
                className="w-full max-w-[460px] bg-[#1a1b26] border-[6px] border-[#51a2ff] 
                rounded-[28px] shadow-xl p-6 md:p-8 mx-auto lg:mx-0"
                data-aos="flip-left"
                data-aos-duration="2000"
                data-aos-easing="ease-out-cubic"
            >
                <div className="shadow-lg rounded-lg overflow-x-auto">
                    <table className="min-w-full">
                        <tbody className="text-white text-sm md:text-base">
                            <tr><td className="py-2 px-4 border-b border-gray-700">NPSN</td><td className="py-2 px-4 border-b border-gray-700">69956589</td></tr>
                            <tr><td className="py-2 px-4 border-b border-gray-700">Nama</td><td className="py-2 px-4 border-b border-gray-700">SMKS MA ARIF TERPADU</td></tr>
                            <tr><td className="py-2 px-4 border-b border-gray-700">Status Sekolah</td><td className="py-2 px-4 border-b border-gray-700">SWASTA</td></tr>
                            <tr><td className="py-2 px-4 border-b border-gray-700">Alamat Jalan</td><td className="py-2 px-4 border-b border-gray-700">JL. DEWI SARTIKA NO.119</td></tr>
                            <tr><td className="py-2 px-4 border-b border-gray-700">Desa/Kelurahan</td><td className="py-2 px-4 border-b border-gray-700">Cicalengka Kulon</td></tr>
                            <tr><td className="py-2 px-4 border-b border-gray-700">Kecamatan</td><td className="py-2 px-4 border-b border-gray-700">Kec. Cicalengka</td></tr>
                            <tr><td className="py-2 px-4 border-b border-gray-700">Kabupaten/Kota</td><td className="py-2 px-4 border-b border-gray-700">Kab. Bandung</td></tr>
                            <tr><td className="py-2 px-4 border-b border-gray-700">Provinsi</td><td className="py-2 px-4 border-b border-gray-700">Prov. Jawa Barat</td></tr>
                            <tr><td className="py-2 px-4 border-b border-gray-700">Kepala Sekolah</td><td className="py-2 px-4 border-b border-gray-700">Wieke Dewi Kania</td></tr>
                            <tr><td className="py-2 px-4">Akreditas</td><td className="py-2 px-4"><p className="text-green-600 font-bold">🄱</p></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
    </>
    )
}