import { Link } from "react-router-dom";
import "../App.css";

export default function TataTertib () {

  const lab_komputer_list = [
    { tata: "Jam Operasional", paragraf : 'Dimulai dari jam 07.00 - 16.30 WIB di hari Senin - Jumat, Bila ada Penggunaan diluar jam tersebut harap koordinasi dengan Laboran dan Wakasek Sarana & Prasarana.'},
    { tata: "Merapihkan Meja", paragraf : 'Pengguna laboraturium wajib merapihkan kembali meja, kursi, mouse, keyboard, ataupun perangkat praktikum lainnya setiap selesai praktikum atau menggunakan laboraturium komputer.'},
    { tata: "Menjaga Kebersihan", paragraf : 'Pengguna laboraturium komputer wajib turut serta menjaga kebersihan laboraturium komputer.'},
    { tata: "Mematikan Alat/Perangkat", paragraf: 'Setelah selesai praktikum, pengguna mematikan lampu, proyektor dan komputer sesuai dengan prosedur.'}
  ];
    
  const not_allowed_list = [
  { id: 1, rule: 'MENG-INSTALL APLIKASI', desc: 'Tanpa seizin laboran atau guru'},
  { id: 2, rule: 'MEMINDAHKAN ALAT PRAKTIKUM', desc: '(misalnya: keyboard, mouse, layar monitor, dll)'},
  { id: 3, rule: 'MENGUBAH TATA LETAK', desc: 'Tata letak/Layout perangkat yang ada di laboraturium komputer'},
  { id: 4, rule: 'MEMBUAT KEGADUHAN', desc: 'Karena mengganggu kenyamanan pengguna laboraturium lain'},
  { id: 5, rule: 'TIDAK DIPERBOLEHKAN', desc: 'Laboraturium komputer tidak diperbolehkan untuk dipakai kegiatan diluar kegiatan akademik'},
  { id: 6, rule: 'MEMBAWA MAKANAN ATAU MINUMAN', desc: 'Ke dalam laboraturium komputer'},
  { id: 7, rule: 'MERUSAK ATAUPUN MENGHILANGKAN ALAT', desc: 'Alat - alat praktikum di laboraturium komputer'},
  { id: 8, rule: 'MEMUTAR MUSIK DENGAN KENCANG', desc: 'Silahkan menggunakan headset/earphone'},
  { id: 9, rule: 'MENONTON FILM DAN BERMAIN GAME', desc: 'Kecuali untuk pembelajaran diperbolehkan'}
];

    return (
        <>
        <section>
          <div className="container mx-auto px-6 py-20">
            <h1 className="text-2xl font-bold text-white mb-10">Tata Tertib Sekolah</h1>
            <div>
              <h1 className="text-2xl font-semibold flex justify-center">Lab Komputer</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {lab_komputer_list.map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-[#1a1b26] rounded-xl border-t-2 border-[#51a2ff] 
                  flex flex-col justify-center items-center min-h-[160px] 
                  transition-all duration-500 hover:border-2 cursor-pointer group"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <h3 className="text-lg font-semibold text-center select-none group-hover:mb-2 transition-all">
                    {item.tata}
                  </h3>

                  <div className="hidden group-hover:block w-full animate-fadeIn">
                    <p className="text-gray-300 mt-2 text-center text-sm leading-relaxed">
                      {item.paragraf}
                    </p>
                  </div>
                </div>
                ))}
              </div>

              <h2 className="text-2xl mt-20 flex justify-center font-semibold p-8">TIDAK DIPERKENANKAN</h2>
              <div className="bg-[#1a1b26] border-[3px] border-[#51a2ff] rounded-[28px] shadow-xl p-6 md:p-8" 
                id="not-allowed" 
                data-aos="flip-right" 
                data-aos-duration="2000" 
                data-aos-easing="ease-out-cubic"
                >
                  <div className="shadow-lg rounded-lg overflow-x-auto">
                    <table className="min-w-full">
                      <tbody>
                        {not_allowed_list.map((not_allow) => (
                          <tr key={not_allow.id} className="border-b border-gray-700/50 last:border-0">
                              <td className="py-4 px-4 hex-text font-semibold w-1/3 align-top">
                              {not_allow.rule}
                              </td>
                              <td className="py-4 px-4 text-gray-300 w-2/3 align-top italic">
                              {not_allow.desc}
                              </td>
                            </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-semibold flex justify-center mb-10">Pelanggaran</h2>
              <div 
                className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-[#1a1b26] border-[3px] border-[#51a2ff] rounded-[28px] overflow-hidden shadow-xl"
                data-aos="flip-left" 
                data-aos-duration="2000" 
                data-aos-easing="ease-out-cubic"
              >

                <div className="py-8 px-6 md:py-10 md:px-12 border-b border-[#51a2ff]/30 md:border-r">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    Pelanggaran Ringan
                  </h3>
                  <p className="text-base md:text-lg mt-4 font-normal text-gray-300">
                    Pelanggaran ringan terhadap tata tertib akan <span className="underline decoration-[#51a2ff] underline-offset-8 text-white">dikenakan teguran.</span>
                  </p>
                </div>

    
                <div className="py-8 px-6 md:py-10 md:px-12 border-b border-[#51a2ff]/30">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    Pelanggaran Berat
                  </h3>
                  <p className="text-base md:text-lg mt-4 font-normal text-gray-300">
                    Pelanggaran kategori berat akan <span className="underline decoration-[#51a2ff] underline-offset-8 text-white">dikenakan sanksi tertentu sesuai dengan jenis pelanggaran yang dilakukan.</span>
                  </p>
                </div>

                <div className="py-8 px-6 md:py-10 md:px-12 border-b border-[#51a2ff]/30 md:border-r">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    Pelanggaran Poin A, B, C, D, H, I
                  </h3>
                  <p className="text-base md:text-lg mt-4 font-normal text-gray-300">
                    Pelanggaran terhadap poin <span className="underline decoration-[#51a2ff] underline-offset-8 text-white">A, B, C, D, H, I</span> akan ditegur oleh laboran atau guru yang sedang mengajar di laboraturium.
                  </p>
                </div>

                <div className="py-8 px-6 md:py-10 md:px-12 border-b border-[#51a2ff]/30">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    Pelanggaran Poin <span className="underline decoration-[#51a2ff] underline-offset-8">F</span>
                  </h3>
                  <p className="text-base md:text-lg mt-4 font-normal text-gray-300">
                    Pelanggaran terhadap poin <span className="underline decoration-[#51a2ff] underline-offset-8 text-white">F</span> akan dikenai sanksi teguran dan <span className="underline decoration-[#51a2ff] underline-offset-8 text-white">makanan/minuman</span> dilarang dibawa ke dalam laboraturium.
                  </p>
                </div>

                <div className="py-8 px-6 md:py-10 md:px-12 border-b md:border-b-0 border-[#51a2ff]/30 md:border-r">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    Pelanggaran Poin <span className="underline decoration-[#51a2ff] underline-offset-8">G</span>
                  </h3>
                  <p className="text-base md:text-lg mt-4 font-normal text-gray-300">
                    Pelanggaran terhadap poin <span className="underline decoration-[#51a2ff] underline-offset-8 text-white">G</span> akan dikenai sanksi <span className="underline decoration-[#51a2ff] underline-offset-8 text-white">wajib mengganti dalam bentuk alat (bukan uang) yang spesifikasinya sama.</span>
                  </p>
                </div>

                <div className="py-8 px-6 md:py-10 md:px-12">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    Pelanggaran Terus Menerus
                  </h3>
                  <p className="text-base md:text-lg mt-4 font-normal text-gray-300">
                    Bagi peserta didik yang sudah diberikan teguran namun tetap melanggar maka akan <span className="underline decoration-[#51a2ff] underline-offset-8 text-white">dikoordinasikan dengan kesiswaan.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
};