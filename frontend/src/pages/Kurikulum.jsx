import { useEffect } from "react";
import feather from "feather-icons";
import PageTemplate from "../components/templates/PageTemplate";
import SectionLayout from "../components/organism/SectionLayout";
import Card from "../components/atoms/Card";

const mapel = [
  "Pendidikan Agama & Budi Perkerti",
  "Pendikin Pancasila",
  "Bahasa Indonesia",
  "Sejarah & Seni",
  "PJOK & Muatan Lokal",
  "Ilmu Pengetahuan Alam dan Sosial"
];

const jurusan = [
  "Proses Bisnis & Perkembangan Teknologi IT",
  "K3LH & Budaya Kerja Industri",
  "Dasar Teknik Jaringan & Telekomunikasi",
  "Penggunaan Alat Ukur & Perangkat Keras",
  "Pengembangan Website"
];

export default function Kurikulum({ setToken }) {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <PageTemplate setToken={setToken}>
      <SectionLayout id="kurikulum" title="Informasi Kurikulum">
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border border-blue-500/30" data-aos="fade-up">
            <h3 className="text-xl font-bold mb-4 text-blue-400 flex items-center gap-2">
              <i data-feather="book-open" className="w-5 h-5"></i> Mata Pelajaran Umum
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              {mapel.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2"
                  data-aos="fade-left"
                  data-aos-delay={200 + index * 100}
                >
                  <i data-feather="check" className="w-4 h-4 text-green-400"></i>
                  {item}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="border border-blue-500/30" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl font-bold mb-4 text-blue-400 flex items-center gap-2">
              <i data-feather="cpu" className="w-5 h-5"></i> Dasar Program Keahlian (Kelas X)
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              {jurusan.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2"
                  data-aos="fade-right"
                  data-aos-delay={200 + index * 100}
                >
                  <i data-feather="terminal" className="mt-1 w-4 h-4 text-blue-400"></i>
                  {item}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="md:col-span-2 border-t-4 border-blue-500 shadow-2xl" data-aos="zoom-in">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">Konsentrasi Keahlian (Kelas XI & XII)</h3>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h4 className="text-blue-300 font-semibold mb-3">Networking & Infrastructure</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Fokus pada instalasi <span className="text-white">Fiber Optic</span>, konfigurasi <span className="text-white">Routing & Switching</span> (Mikrotik/Cisco), serta optimasi Jaringan Nirkabel (Wireless).
                </p>
              </div>

              <div>
                <h4 className="text-blue-300 font-semibold mb-3">Systems & Security</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Mempelajari <span className="text-white">Administrasi Server</span> (Linux/Windows), Keamanan Jaringan (Firewall/VPN), dan Layanan VoIP/Komunikasi Data.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </SectionLayout>
    </PageTemplate>
  );
}