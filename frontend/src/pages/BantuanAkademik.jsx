import React from "react";

export default function BantuanAkademik() {

  const bntn_akademik_list = [
    {
      title: 'Ujian Sertifikasi MTCNA Gratis', 
      desc: 'Khusus bagi semua siswa di jurusan TKJ/IT, sekolah memfasilitasi ujian sertifikasi internasional MTCNA tanpa biaya tambahan (Free of Charge)'
    },
    {
      title: 'Tes Kemampuan Akademik', 
      desc: 'Sekolah menyediakan tes kemampuan akademik secara berkala untuk siswa yang ingin masuk perguruan tinggi favorit mereka.'
    },
    {
      title: 'Bimbingan Konseling', 
      desc: 'Sekolah menyediakan layanan bagi semua orang di sekolah termasuk para guru dan staf yang ingin bercerita tentang masalah pada kehidupannya.'
    }
  ];

  return (
    <>
      <section id="bantuan-akademik" className="py-20 bg-[#020617]">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          Bantuan Akademik
        </h2>
        
        <div className="max-w-4xl mx-auto gap-6 grid grid-cols-1 md:grid-cols-1 px-4">
          {bntn_akademik_list.map((item, index) => (
            <div 
              key={index} 
              className="p-6 bg-[#1a1b26] rounded-2xl border-[5px] border-[#51a2ff] transition-transform hover:scale-105"
              data-aos="fade-up" 
              data-aos-delay={300 + (index * 100)}
              data-aos-duration="800"
            >
              <h3 className="text-white font-bold text-xl mb-4">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}