import React from "react";
import Logo from "../assets/img/profile.png";

export default function Footer() {
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
              className="h-36 w-36 rounded-full bg-[#1a1b26]"
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
              <a href="#" className="hover:text-[#51a2ff]">
                Bantuan Akademik
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#51a2ff]">
                Informasi Kurikulum
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#51a2ff]">
                Tata Tertib Sekolah
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#51a2ff]">
                Profil Guru
              </a>
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
                href="https://www.instagram.com/smart_clk/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#51a2ff]"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#51a2ff]"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#51a2ff]"
              >
                YouTube
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
            <li>Email : smartclk@gmail.com</li>
            <li>Phone : (022) 7940056</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-5 pt-5 text-center text-sm text-gray-400">
        © 2026 SMarT CLK. All rights reserved.
      </div>
    </footer>
  );
}