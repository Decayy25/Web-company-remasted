import PageTemplate from "../components/templates/PageTemplate";
import SectionLayout from "../components/organism/SectionLayout";
import Card from "../components/atoms/Card";

export default function VisiMisi({ setToken }) {
  return (
    <PageTemplate setToken={setToken}>
      <SectionLayout id="VisiMisi" title="Visi Misi & Tujuan Sekolah">
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="shadow-xl" data-aos="fade-right">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">Visi</h3>
            <p className="text-slate-300">
              Unggul dalam prestasi, teladan dalam bersikap, dan bertindak, takdim
              kepada islam dan khidmat kepada budaya.
            </p>

            <h3 className="text-2xl font-semibold text-blue-400 mb-4 mt-8">Misi</h3>
            <ol className="list-decimal list-inside text-slate-300 leading-relaxed">
              <li>Mengedepankan kompetensi dengan pangsa pasar dan industri</li>
              <li>Menawarkan alternatif praktif wirausaha pada anak didik sebagai antisipasi daya sain dunia kerja</li>
              <li>Menumbuhkan sikap profesional dalam segala tindakan akademik maupun non-akademik bagi guru dan siswa</li>
              <li>Ber Islam yang mantap dengan mengedepankan nilai - nilai toleransi sebagai wujud manusia berbudaya</li>
              <li>Menbiasakan sikap yang dilandasi kesolehan sosial</li>
            </ol>
          </Card>

          <Card className="shadow-xl" data-aos="fade-left">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">Tujuan</h3>
            <ol className="list-decimal list-inside text-slate-300 space-y-2 leading-relaxed">
              <li>
                Mewujudkan SMK Ma'arif Terpadu Cicalengka sebagai lembaga pendidikan kejuruan
                yang mampu menjembatani kepentingan masyarakat dan dunia kerja.
              </li>
              <li>
                Kompetensi dan kesempatan kerja akan lebih bermakna ketika individu
                atau anak didik kami kaya akhlakul karimah dan cinta budaya sendiri.
              </li>
            </ol>
          </Card>
        </div>
      </SectionLayout>
    </PageTemplate>
  );
}