import { register, login } from "./auth.js";
import dontev from "dotenv";

dontev.config({
  path: "../.env"
});

const server = Bun.serve({
  port: (process.env.PORT || 5050),

  async fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/api/auth/register" &&
        req.method === "POST") {
      return register(req);
    }

    if (url.pathname === "/api/auth/login" &&
        req.method === "POST") {
      return login(req);
    }

    return new Response(`
    +==================================================+
    ✅ Server jalan!
    +==================================================+
    `);
  },
});

console.log(`\x1b[32m
  +==================================================+
  ✅ Server running di http://localhost:${server.port}
  +==================================================+
`);