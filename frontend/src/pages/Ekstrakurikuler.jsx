import PageTemplate from "../components/templates/PageTemplate";
import SectionLayout from "../components/organism/SectionLayout";
import ImageCard from "../components/molecules/ImageCard";

import osis from "../assets/img/Ekstrakurikuler/osis.jpg";
import irma from "../assets/img/Ekstrakurikuler/irma.jpg";
import paskibra from "../assets/img/Ekstrakurikuler/paskibra.jpg";
import lingkung_seni from "../assets/img/Ekstrakurikuler/lingkung_seni.jpg";
import futsal from "../assets/img/Ekstrakurikuler/futsal.jpg";
import basket from "../assets/img/Ekstrakurikuler/basket.jpg";
import pramuka from "../assets/img/Ekstrakurikuler/pramuka.jpg";
import pmr from "../assets/img/Ekstrakurikuler/pmr.jpg";
import badbinton from "../assets/img/Ekstrakurikuler/badbinton.jpg";
import voli from "../assets/img/Ekstrakurikuler/voli.jpg";
import pik_r from "../assets/img/Ekstrakurikuler/pik_r.jpg";
import mapa from "../assets/img/Ekstrakurikuler/mapa.jpg";
import karate from "../assets/img/Ekstrakurikuler/karate.jpg";
import jurnalis from "../assets/img/Ekstrakurikuler/jurnalis.jpg";

const eskul_list = [
  { eks: 'Osis', img: osis, href: 'https://www.instagram.com/osissmartpresent_/' },
  { eks: 'Irma', img: irma, href: 'https://www.instagram.com/irmasmartclk_/' },
  { eks: 'Paskibra', img: paskibra, href: 'https://www.instagram.com/pasustaka/' },
  { eks: 'Lingkung Seni', img: lingkung_seni, href: 'https://www.instagram.com/_seniituasik/' },
  { eks: 'Futsal', img: futsal, href: 'https://www.instagram.com/smart_futsal/' },
  { eks: 'Basket', img: basket, href: 'https://www.instagram.com/basketsmart_/' },
  { eks: 'Pramuka', img: pramuka, href: 'https://www.instagram.com/pramukasmartpresent_/' },
  { eks: 'PMR', img: pmr, href: 'https://www.instagram.com/pmrsmart__/' },
  { eks: 'Badbinton', img: badbinton, href: 'https://www.instagram.com/shutlemater_/' },
  { eks: 'Voli', img: voli, href: 'https://www.instagram.com/_smart_vollyball/' },
  { eks: 'Pik-r', img: pik_r, href: 'https://www.instagram.com/pikr.smrt/' },
  { eks: 'MAPA', img: mapa, href: 'https://www.instagram.com/rohis.smartclk/' },
  { eks: 'Karate', img: karate, href: 'https://www.instagram.com/bkc_smart/' },
  { eks: 'Jurnalis', img: jurnalis, href: 'https://www.instagram.com/smartinactions_/' }
];

export default function Ekstrakurikuler({ setToken }) {
  return (
    <PageTemplate setToken={setToken}>
      <SectionLayout id="ekstrakurikuler" title="Ekstrakurikuler">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {eskul_list.map((eskul, index) => (
            <ImageCard
              key={eskul.eks}
              href={eskul.href}
              target="_blank"
              img={eskul.img}
              title={eskul.eks}
              className="transition-transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={100 + index * 80}
            />
          ))}
        </div>
      </SectionLayout>
    </PageTemplate>
  );
}