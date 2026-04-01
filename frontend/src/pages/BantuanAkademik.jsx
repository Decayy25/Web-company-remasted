import PageTemplate from "../components/templates/PageTemplate";
import SectionLayout from "../components/organism/SectionLayout";
import Card from "../components/atoms/Card";

const bantuanAkademikList = [
  {
    title: 'Ujian Sertifikasi MTCNA Gratis',
    desc: 'Khusus bagi semua siswa di jurusan TKJ/IT, sekolah memfasilitasi ujian sertifikasi internasional MTCNA tanpa biaya tambahan (Free of Charge).'
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

export default function BantuanAkademik({ setToken }) {
  return (
    <PageTemplate setToken={setToken}>
      <SectionLayout id="bantuan-akademik" title="Bantuan Akademik">
        <div className="grid gap-6 max-w-4xl mx-auto px-4">
          {bantuanAkademikList.map((item, index) => (
            <Card
              key={item.title}
              className="border border-blue-500/30 p-6 transition-transform hover:scale-[1.02]"
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              <h3 className="text-white font-bold text-xl mb-4">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>
      </SectionLayout>
    </PageTemplate>
  );
}