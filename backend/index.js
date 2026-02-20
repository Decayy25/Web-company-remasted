import { Elysia, t } from "elysia";
import { cors } from "@elysiajs/cors";
import { register, login, getAccounts } from "./middleware/auth.js";
import { db, usersCollection } from './db/db.js';
import { sendContactMail } from "./utils/sendMail.js";
import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(process.cwd(), "../.env")
});


const PORT = process.env.PORT || 5050;

const app = new Elysia()
  .use(cors())

  .group("/api", (app) =>
    app
      .group("/auth", (app) =>
        app
          .post('/login', ({ body }) => login(body))
          .post('/register', ({ body }) => register(body))
      )

      .get("/accounts", () => getAccounts())

      .get("/me", async ({ query }) => {
        const user = await usersCollection.findOne({ email: query.email });
        return user;
      })

      .post("/contact", async ({ body }) => {
        try {
          await sendContactMail(body);

          const result = await db.collection("contacts").insertOne({
            name: body.name,
            email: body.email,
            message: body.message,
            createdAt: new Date()
          });

          return {
            success: true,
            message: "Pesan berhasil dikirim",
            id: result.insertedId
          };

        } catch (err) {
          console.error("CONTACT ERROR:", err);

          return {
            success: false,
            error: err.message
          };
        }
      }, {
        body: t.Object({
          name: t.String(),
          email: t.String(),
          message: t.String()
        })
      })
  )

  .onError(({ code, set }) => {
    if (code === "NOT_FOUND") {
      set.status = 404;
      return { error: "Endpoint tidak ditemukan" };
    }
  })

  .listen(PORT);

console.log(`\x1b[32m
+==================================================+
✅ Elysia Server running!
🌐 http://localhost:${PORT}
📂 File: index.js
+==================================================+
`);
