# 🚀 Web Portal Sekolah - MERB Stack
**MongoDB, ElysiaJS, React, Bun**

Proyek portal web sekolah yang mengintegrasikan sistem autentikasi keamanan tinggi dan formulir kontak dinamis.

## 🛠️ Tech Stack

- **Runtime:** [Bun](https://bun.sh) (v1.3.8)
- **Frontend:** React.js, Tailwind CSS, AOS (Animate on Scroll)
- **Backend:** ElysiaJS
- **Database:** MongoDB (Localhost/Atlas)
- **Security:** JWT (JSON Web Token), Bcrypt (Password Hashing)

---

## 📂 Struktur Proyek Lengkap

```text
web-company-merb-stack/
├── frontend/                 # Client-side (React + Vite)
│   ├── src/
│   │   ├── assets/           # Gambar dan file statis
│   │   ├── components/       # Komponen Reusable
│   │   │   ├── Header.jsx    # Navbar
│   │   │   ├── Footer.jsx    # Footer
│   │   │   └── Home.jsx      # Konten Beranda
│   │   ├── pages/            # Halaman Utama
│   │   │   ├── Login.jsx     # Login Page (No Header/Footer)
|   |   |   ├── Contact.jsx   # Form Contact (Auto-email)
│   │   │   ├── Informasi.jsx
│   │   │   ├── VisiMisi.jsx
│   │   │   └── ... (Halaman lainnya)
│   │   ├── App.jsx           # Routing & Logic Kondisional Header/Footer
│   │   ├── App.css           # Styling Global
│   │   └── main.jsx          # Entry point React
│   ├── index.html
│   ├── tailwind.config.js
│   └── package.json
├── backend/                  # Server-side (ElysiaJS)
│   ├── db/
│   │   └── db.js             # Konfigurasi Koneksi MongoDB
│   ├── middleware/
│   │   └── auth.js           # Logika Register, Login, & GetAccounts
│   ├── index.js              # Entry point Server & API Routes
│   └── package.json
└── .env                      # Variabel Lingkungan (Shared/Root)
```

## Konfigurasi Environment

.env
```
MONGODB_URI=mongodb://localhost:27017/db_company
JWT_SECRET=kode_rahasia_anda_disini
PORT=5050
```

## Menjalankan Backend
bash
```
cd backend
bun install
bun run index.js
```

## Menjalakna Frontend
bash
```
cd frontend
bun install
bun run dev
```

## Dokumentasi API
```
Fitur       Method          Endpoint                    Keterangan
Register    POST            /api/auth/register          Membuat akun baru
Login       POST            /api/auth/login             Login & Simpan Token
Profile     GET             /api/me                     Ambil data user aktif (query email)
Contact     POST            /api/contact                Simpan pesan ke DB
Admin       GET             /api/accounts               Lihat semua akun terdaftar
```
