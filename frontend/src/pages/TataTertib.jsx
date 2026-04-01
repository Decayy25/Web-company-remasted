import PageTemplate from "../components/templates/PageTemplate";
import SectionLayout from "../components/organism/SectionLayout";
import Card from "../components/atoms/Card";

export default function TataTertib({ setToken }) {

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
      <PageTemplate setToken={setToken}>
        <SectionLayout id="tatatertib" title="Tata Tertib Sekolah">
          <div className="grid gap-10">
            <div>
              <h3 className="text-2xl font-semibold text-center text-white mb-8">Lab Komputer</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {lab_komputer_list.map((item, index) => (
                  <Card key={index} className="transition-transform duration-500 hover:scale-105">
                    <h4 className="text-lg font-semibold text-center text-white mb-3">{item.tata}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.paragraf}</p>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="border border-blue-500/30 overflow-x-auto">
              <h3 className="text-xl font-semibold text-white mb-6">TIDAK DIPERKENANKAN</h3>
              <table className="min-w-full">
                <tbody>
                  {not_allowed_list.map((item) => (
                    <tr key={item.id} className="border-b border-gray-700/50 last:border-0">
                      <td className="py-4 px-4 font-semibold w-1/3 align-top text-white">{item.rule}</td>
                      <td className="py-4 px-4 text-gray-300 w-2/3 align-top italic">{item.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>

            <Card className="border border-blue-500/30">
              <h3 className="text-xl font-semibold text-white text-center mb-10">Pelanggaran</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white">Pelanggaran Ringan</h4>
                    <p className="text-gray-300 text-sm mt-3">Pelanggaran ringan terhadap tata tertib akan <span className="underline decoration-[#51a2ff] underline-offset-8 text-white">dikenakan teguran.</span></p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">Pelanggaran Berat</h4>
                    <p className="text-gray-300 text-sm mt-3">Pelanggaran kategori berat akan <span className="underline decoration-[#51a2ff] underline-offset-8 text-white">dikenakan sanksi tertentu sesuai dengan jenis pelanggaran yang dilakukan.</span></p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">Pelanggaran Poin A, B, C, D, H, I</h4>
                    <p className="text-gray-300 text-sm mt-3">Pelanggaran terhadap poin <span className="underline decoration-[#51a2ff] underline-offset-8 text-white">A, B, C, D, H, I</span> akan ditegur oleh laboran atau guru yang sedang mengajar di laboratorium.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white">Pelanggaran Poin F</h4>
                    <p className="text-gray-300 text-sm mt-3">Pelanggaran terhadap poin <span className="underline decoration-[#51a2ff] underline-offset-8 text-white">F</span> akan dikenai sanksi teguran dan <span className="underline decoration-[#51a2ff] underline-offset-8 text-white">makanan/minuman</span> dilarang dibawa ke dalam laboratorium.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">Pelanggaran Poin G</h4>
                    <p className="text-gray-300 text-sm mt-3">Pelanggaran terhadap poin <span className="underline decoration-[#51a2ff] underline-offset-8 text-white">G</span> akan dikenai sanksi wajib mengganti dalam bentuk alat (bukan uang) yang spesifikasinya sama.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">Pelanggaran Terus Menerus</h4>
                    <p className="text-gray-300 text-sm mt-3">Bagi peserta didik yang sudah diberikan teguran namun tetap melanggar maka akan <span className="underline decoration-[#51a2ff] underline-offset-8 text-white">dikoordinasikan dengan kesiswaan.</span></p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </SectionLayout>
      </PageTemplate>
    );
};