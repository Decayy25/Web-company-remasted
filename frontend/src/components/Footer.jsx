import { useEffect }  from "react";
import feather from "feather-icons"
import { Link } from "react-router-dom";
import Logo from "../assets/img/profile.png";

const Istagram = "https://www.instagram.com/smart_clk/";
const Facebook = "https://www.facebook.com/profile.php?id=100080470501420&ref=_ig_profile_ac";
const YouTube  ="https://www.youtube.com/c/SMKMaarifTerpaduCicalengka119";

export default function Footer() {

  useEffect(() => {
    feather.replace();
  }, []);


  return (
    <footer className="bg-[#1a1b26] py-14 mt-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo */}
        <div>
          <h3 className="text-xl font-semibold mb-3 pl-4 text-white">
            SMarT CLK
          </h3>
          <div className="inline-block p-1 rounded-full hex-border">
            <img
              src={Logo}
              alt="Profile Sekolah"
              className="h-36 w-36 rounded-full"
            />
          </div>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">
            Support
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/BantuanAkademik" className="hover:text-[#51a2ff]">
                Bantuan Akademik
              </Link>
            </li>
            <li>
              <Link to="/Kurikulum" className="hover:text-[#51a2ff]">
                Informasi Kurikulum
              </Link>
            </li>
            <li>
              <Link to="/TataTertib" className="hover:text-[#51a2ff]">
                Tata Tertib Sekolah
              </Link>
            </li>
            <li>
              <Link to="/ProfileGuru" className="hover:text-[#51a2ff]">
                Profil Guru
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">
            Social Media
          </h3>
          <ul className="flex items-center space-x-4 text-gray-300">
            <li>
              <a
                href={Istagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#51a2ff]"
              >
                <i data-feather="instagram"></i>
              </a>
            </li>
            <li>
              <a
                href={Facebook}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#51a2ff]"
              >
                <i data-feather="facebook"></i>
              </a>
            </li>
            <li>
              <a
                href={YouTube}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#51a2ff]"
              >
                <i data-feather="youtube"></i>
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">
            Contact
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2"><i data-feather="mail" className="w-4 h-4"></i><span>Email :  info@smkmaarifterpaduclk.sch.id</span></li>
            <li className="flex items-center gap-2"><i data-feather="phone" className="w-4 h-4"></i><span>Phone : (022) 7940056</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-5 pt-5 text-center text-sm text-gray-400">
        © 2026 SMarT CLK. All rights reserved.
      </div>
    </footer>
  );
}