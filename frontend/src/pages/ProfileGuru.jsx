import PageTemplate from "../components/templates/PageTemplate";
import SectionLayout from "../components/organism/SectionLayout";
import Card from "../components/atoms/Card";

import YMT from "../assets/img/Guru/YMT.jpeg";
import CAG from "../assets/img/Guru/CAG.jpeg";
import HRS from "../assets/img/Guru/HRS.png";
import TNY from "../assets/img/Guru/TNY.png";
import TDW from "../assets/img/Guru/TDW.png";
import DSK from "../assets/img/Guru/DSK.jpeg";
import AAD from "../assets/img/Guru/AAD.png";
import RKI from "../assets/img/Guru/RKI.jpg";
import RID from "../assets/img/Guru/RID.jpeg";
import MKT from "../assets/img/Guru/MKT.jpeg";
import RWN from "../assets/img/Guru/RWN.jpeg";
import ANF from "../assets/img/Guru/ANF.jpeg";
import VFR from "../assets/img/Guru/VFR.jpeg";
import HSN from "../assets/img/Guru/HSN.jpg";
import ADM from "../assets/img/Guru/ADM.png";

const guru_list = [
  { nama: 'Yanti Mulyanti, S.Pd', img: YMT, code: 'YMT' },
  { nama: 'Cecep Agus, S.Kom', img: CAG, code: 'CAG' },
  { nama: 'Handy Rusnandy, S.Kom', img: HRS, code: 'HRS' },
  { nama: 'Alpina Damayanti, S.Pd', img: ADM, code: 'ADM' },
  { nama: 'Tessa Nosalia Yosianti, S.Pd', img: TNY, code: 'TNY' },
  { nama: 'Tati Dewi Widastuty, S.Pd', img: TDW, code: 'TDW' },
  { nama: 'Dede Sinta Kristi, S.Hum', img: DSK, code: 'DSK' },
  { nama: 'Ahmad Adistia, S.Kom', img: AAD, code: 'AAD' },
  { nama: 'Riki Ramadan, S.Kom', img: RKI, code: 'RKI' },
  { nama: 'Ridwan Firdaus Suwadi Putra, S.Kom', img: RID, code: 'RID' },
  { nama: 'Mukti Alimin, S.Kom', img: MKT, code: 'MKT' },
  { nama: 'Ridwan Maulana, A.Md', img: RWN, code: 'RWN' },
  { nama: 'Vidi Firdaus, S.Pd', img: VFR, code: 'VFR' },
  { nama: 'Ana Nabilah Fauziah, S.Psi', img: ANF, code: 'ANF' },
  { nama: 'Hasanudin, S.Pd', img: HSN, code: 'HSN' }
];

export default function ProfileGuru({ setToken }) {
  return (
    <PageTemplate setToken={setToken}>
      <SectionLayout id="profil-guru" title="Profil Guru">
        <p className="text-slate-300 text-center max-w-2xl mx-auto mb-10">
          Berikut beberapa guru yang kami masukan.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center px-6">
          {guru_list.map((guru) => (
            <Card key={guru.code} className="text-center hover:scale-105 transition-transform">
              <img
                src={guru.img}
                alt={guru.nama}
                className="w-32 h-32 object-cover rounded-full mb-4 mx-auto"
              />
              <h3 className="text-lg font-semibold text-white">{guru.nama}</h3>
              <p className="text-slate-300 mt-2">{guru.code}</p>
            </Card>
          ))}
        </div>
      </SectionLayout>
    </PageTemplate>
  );
}