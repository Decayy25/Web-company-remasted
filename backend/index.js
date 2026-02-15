import { register, login, getAccounts } from "./middleware/auth.js";
import dotenv from "dotenv";
import path from "path";

// Konfigurasi dotenv agar membaca file .env
dotenv.config({
  path: path.resolve(process.cwd(), "..", ".env")
});

const PORT = process.env.PORT || 5050;

const server = Bun.serve({
  port: PORT,

  async fetch(req) {
    const url = new URL(req.url);
    const method = req.method;

    // Route: Register (POST)
    if (url.pathname === "/api/auth/register" && method === "POST") {
      return register(req);
    }

    // Route: Login (POST)
    if (url.pathname === "/api/auth/login" && method === "POST") {
      return login(req);
    }

    // Route: Get All Accounts (GET)
    if (url.pathname === "/api/accounts" && method === "GET") {
      return getAccounts();
    }

    // Response jika halaman tidak ada
    return new Response(JSON.stringify({ error: "Endpoint tidak ditemukan" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  },
});

console.log(`\x1b[32m
  +==================================================+
  ✅ Bun Server running!
  🌐 URL: http://localhost:${PORT}
  📂 File: index.js
  +==================================================+
`);