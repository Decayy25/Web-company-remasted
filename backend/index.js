import { Elysia, t } from "elysia";
import { cors } from "@elysiajs/cors";
import { register, login, getAccounts } from "./middleware/auth.js";
import { db, usersCollection } from './db/db.js';
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
          // Alamat : http://localhost:5050/api/auth/login
          .post('/login', ({ body }) => login(body)) 
          .post('/register', register)
      )
      .get("/accounts", () => getAccounts())
      // Pindahkan /me ke dalam grup /api agar rapi
      .get("/me", async ({ query }) => {
        const user = await usersCollection.findOne({ email: query.email });
        return user;
      })
  )
  // Tambahkan endpoint contact
  .post("/api/contact", async ({ body }) => {
    try {
      const result = await db.collection("messages").insertOne({
        name: body.name,
        email: body.email,
        message: body.message,
        date: new Date()
      });
      return { success: true, id: result.insertedId };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }, {
    body: t.Object({
      name: t.String(),
      email: t.String(),
      message: t.String()
    })
  })
  .onError(({ code, set }) => {
    if (code === 'NOT_FOUND') {
      set.status = 404;
      return { error: "Endpoint tidak ditemukan" };
    }
  })
  .listen(PORT);

app.post("/contact", async ({ body }) => {
  try {
    const result = await db.collection("messages").insertOne({
      name: body.name,
      email: body.email,
      message: body.message,
      date: new Date()
    });
    return { success : true, id: result.insertedId};
  } catch (error) {
    return { success : false, error: error.message};
  }

}, {
  body: t.Object({
    name: t.String(),
    email: t.String(),
    message: t.String()
  })
});


console.log(`\x1b[32m
  +==================================================+
  ✅ Elysia Server running!
  🌐 URL: http://localhost:${PORT}
  📂 File: index.js
  +==================================================+
`);