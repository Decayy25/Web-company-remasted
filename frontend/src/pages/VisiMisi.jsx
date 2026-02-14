import React from "react";

export default function VisiMisi () {
    return (
        <>
            <section id="visi-misi" className="py-20 bg-[#020617]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center" data-aos="fade-up">
                        Visi Misi & Tujuan Sekolah
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-[#1a1b26] p-6 rounded-lg shadow-lg" data-aos="fade-right">
                            <h3 className="text-2xl font-semibold text-blue-400 mb-4">Visi</h3>
                            <p className="text-slate-300">
                                Unggul dalam prestasi, teladan dalam bersikap, dan bertindak, 
                                takdim kepada islam dan khidmat kepada budaya
                            </p>
        
                            <h3 className="text-2xl font-semibold text-blue-400 mb-4">Misi</h3>
                            <ol className="list-decimal list-inside text-slate-300 leading-relaxed">
                              <li>Mengedepankan kompetensi dengan pangsa pasar dan industri</li>
                              <li>Menawarkan alternatif praktif wirausaha pada anak didik sebagai antisipasi daya sain dunia kerja</li>
                              <li>Menumbuhkan sikap profesional dalam segala tindakan akademik maupun non-akademik bagi guru dan siswa</li>
                              <li>Ber Islam yang mantap dengan mengedepankan nilai - nilai toleransi sebagai wujud manusia berbudaya</li>
                              <li>Menbiasakan sikap yang dilandasi kesolehan sosial</li>
                            </ol>
                        </div>

                        <div className="bg-[#1a1b26] p-6 rounded-lg shadow-lg" data-aos="fade-left">
                            <h3 className="text-2xl font-semibold text-blue-400 mb-4">Tujuan</h3>
                            <ol className="list-decimal list-inside text-slate-300 space-y-2 leading-relaxed">
                                <li>
                                  Mewujudkan SMK Ma'arif Terpadu Cicalengka sebagai lembaga pendidikan kejuruan
                                  yang mampu menjembatani kepentigan masyarakat dan dunia kerja
                                </li>
                                <li>
                                  kompetensi dan kesempatan kerja akan lebih bermakna ketika individu
                                  atau anak didik kami kaya akhlakul karimah dan cinta budaya sendiri
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}