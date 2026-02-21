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
            
            {/* Container Utama: Kolom di HP, Baris di Desktop */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 px-6 max-w-7xl mx-auto">
                
                {/* Sisi Kiri: Grid Tombol PDF */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full lg:w-1/2 justify-items-center">
                    {members.map((member, i) => (
                        <a 
                            key={i}
                            href={member.href}
                            target={member.target}
                            rel={member.target === "_blank" ? "noopener noreferrer" : undefined}
                            download={member.href.endsWith('.pdf') ? "" : undefined}
                            data-aos={member.aos}
                            className="w-full max-w-[200px]"
                            onMouseEnter={() => setHoverIndex(i)}
                            onMouseLeave={() => setHoverIndex(null)}
                        >
                            <div 
                                className="bg-[#1a1b26] border-2 border-[#51a2ff]/30 rounded-2xl p-6 text-center transition-all duration-300 hover:border-[#51a2ff] shadow-lg"
                                style={{
                                    transform: hoverIndex === i
                                        ? `rotate(${member.rotate}) scale(1.05)`
                                        : "rotate(0deg)"
                                }}
                            >
                                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#51a2ff] mx-auto mb-4">
                                  <img 
                                    src={profile}
                                    alt={member.title}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <h3 className="text-white font-semibold text-sm md:text-base">
                                    {member.title}
                                </h3>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Sisi Kanan: Tabel Informasi */}
                <div 
                    className="w-full lg:w-1/2 max-w-[500px] bg-[#1a1b26] border-[4px] md:border-[6px] border-[#51a2ff] rounded-[28px] shadow-2xl p-4 md:p-8"
                    data-aos="flip-left"
                >
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-white text-sm md:text-base">
                            <tbody>
                                {[
                                    ["NPSN", "69956589"],
                                    ["Nama", "SMKS MA ARIF TERPADU"],
                                    ["Status", "SWASTA"],
                                    ["Alamat", "JL. DEWI SARTIKA NO.119"],
                                    ["Kecamatan", "Cicalengka"],
                                    ["Kabupaten", "Bandung"],
                                    ["Akreditasi", "B"]
                                ].map(([label, value], idx) => (
                                    <tr key={idx} className="border-b border-gray-700/50 last:border-0">
                                        <td className="py-3 px-2 font-semibold text-blue-400 w-1/3">{label}</td>
                                        <td className="py-3 px-2 text-gray-300">{value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </section>
    </>
    )
}