import React from "react";
import { useEffect }  from "react";
import feather from "feather-icons"
import "../App.css"

export default function Kurikulum () {

    useEffect(() => {
        feather.replace();
    }, []);

    return (
        <>
        <section id="kurikulum" class="py-20 bg-[#020617] mt-10">
            <h2 class="text-3xl font-bold text-center mb-10 mt-10 text-white">Informasi Kurikulum</h2>
            <div id="info-kurikulum" class="w-full grid grid-cols-1 md:grid-cols-6 gap-6 px-6">
                <div class="md:col-span-3 bg-[#1a1b26] p-6 rounded-2xl border border-blue-500/30 shadow-lg" data-aos="fade-up">
                  <h3 class="text-xl font-bold mb-4 text-blue-400 flex items-center gap-2">
                    <i data-feather="book-open" class="w-5 h-5"></i> Mata Pelajaran Umum
                  </h3>

                  <ul class="space-y-2 text-gray-300 text-sm">
                    <li class="flex items-center gap-2" data-aos="fade-left" data-aos-delay="800"><i data-feather="check" class="w-4 h-4 text-green-400"></i> Pendidikan Agama & Budi Pekerti</li>
                    <li class="flex items-center gap-2" data-aos="fade-left" data-aos-delay="800"><i data-feather="check" class="w-4 h-4 text-green-400"></i> Pendidikan Pancasila</li>
                    <li class="flex items-center gap-2" data-aos="fade-left" data-aos-delay="800"><i data-feather="check" class="w-4 h-4 text-green-400"></i> Bahasa Indonesia</li>
                    <li class="flex items-center gap-2" data-aos="fade-left" data-aos-delay="800"><i data-feather="check" class="w-4 h-4 text-green-400"></i> Sejarah & Seni</li>
                    <li class="flex items-center gap-2" data-aos="fade-left" data-aos-delay="800"><i data-feather="check" class="w-4 h-4 text-green-400"></i> PJOK & Muatan Lokal</li>
                    <li class="flex items-center gap-2" data-aos="fade-left" data-aos-delay="800"><i data-feather="check" class="w-4 h-4 text-green-400"></i> Ilmu Pengetahuan Alam dan Sosial</li>
                  </ul>
                </div>

                <div class="md:col-span-3 bg-[#1a1b26] p-6 rounded-2xl border border-blue-500/30 shadow-lg" data-aos="fade-up" data-aos-delay="100">
                  <h3 class="text-xl font-bold mb-4 text-blue-400 flex items-center gap-2">
                    <i data-feather="cpu" class="w-5 h-5"></i> Dasar Program Keahlian (Kelas X)
                  </h3>

                  <ul class="space-y-2 text-gray-300 text-sm">
                    <li class="flex items-start gap-2" data-aos="fade-right" data-aos-delay="800"><i data-feather="terminal" class="mt-1 w-4 h-4 text-blue-400"></i> Proses Bisnis & Perkembangan Teknologi IT</li>
                    <li class="flex items-start gap-2" data-aos="fade-right" data-aos-delay="800"><i data-feather="terminal" class="mt-1 w-4 h-4 text-blue-400"></i> K3LH & Budaya Kerja Industri</li>
                    <li class="flex items-start gap-2" data-aos="fade-right" data-aos-delay="800"><i data-feather="terminal" class="mt-1 w-4 h-4 text-blue-400"></i> Dasar Teknik Jaringan & Telekomunikasi</li>
                    <li class="flex items-start gap-2" data-aos="fade-right" data-aos-delay="800"><i data-feather="terminal" class="mt-1 w-4 h-4 text-blue-400"></i> Penggunaan Alat Ukur & Perangkat Keras</li>
                    <li class="flex items-start gap-2" data-aos="fade-right" data-aos-delay="800"><i data-feather="terminal" class="mt-1 w-4 h-4 text-blue-400"></i> Pengembangan Website</li>
                  </ul>
                </div>

                <div class="md:col-span-6 bg-[#1a1b26] p-8 rounded-2xl border-t-4 border-blue-500 shadow-2xl" data-aos="zoom-in">
                  <h3 class="text-2xl font-bold mb-6 text-center hex-text">Konsentrasi Keahlian (Kelas XI & XII)</h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 class="text-blue-300 font-semibold mb-3">Networking & Infrastructure</h4>
                      <p class="text-sm text-gray-400 leading-relaxed">
                        Fokus pada instalasi <span class="text-white">Fiber Optic</span>, konfigurasi <span class="text-white">Routing & Switching</span> (Mikrotik/Cisco), serta optimasi Jaringan Nirkabel (Wireless).
                      </p>
                    </div>

                    <div>
                      <h4 class="text-blue-300 font-semibold mb-3">Systems & Security</h4>
                      <p class="text-sm text-gray-400 leading-relaxed">
                        Mempelajari <span class="text-white">Administrasi Server</span> (Linux/Windows), Keamanan Jaringan (Firewall/VPN), dan Layanan VoIP/Komunikasi Data.
                      </p>
                    </div>
                  </div>
                </div>
            </div>
        </section>
        </>
    )
}