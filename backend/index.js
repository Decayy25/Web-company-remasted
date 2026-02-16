import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { register, login, getAccounts } from "./middleware/auth.js";
import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(process.cwd(), "..", ".env")
});

const PORT = process.env.PORT || 5050;

// Inisialisasi Elysia
const app = new Elysia()
.use(cors())
  .group("/api", (app) => 
    app
      .group("/auth", (app) =>
        app
          .post("/register", ({ request }) => register(request))
          .post("/login", ({ request }) => login(request))
      )
      .get("/accounts", () => getAccounts())
  )
  // Menangani route yang tidak terdaftar secara otomatis
  .onError(({ code, set }) => {
    if (code === 'NOT_FOUND') {
      set.status = 404;
      return { error: "Endpoint tidak ditemukan" };
    }
  })
  .listen(PORT);

console.log(`
  +==================================================+
  ✅ Elysia Server running!
  🌐 URL: http://localhost:${PORT}
  📂 File: index.js
  +==================================================+
`);