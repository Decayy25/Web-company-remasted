import { Elysia, t } from "elysia";
import { cors } from "@elysiajs/cors";
import { register, login, getAccounts } from "./middleware/auth.js";
import { db, usersCollection } from './db/db.js';
import { sendContactMail } from "./utils/sendMail.js";
import dotenv from "dotenv";
import path from "path";

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({
    path: path.resolve(process.cwd(), "../.env")
  });
}


const app = new Elysia()
    .use(cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true
    }))


    .get("/", () => ({
        status: "Online",
        message: "Elysia Backend is running perfectly!",
        database: process.env.MONGO_URI ? "Connected (Env OK)" : "Missing Env"
    }))


    .group("/api", (app) =>
        app
            // Auth Group
            .group("/auth", (app) =>
                app
                  .post('/login', async ({ body }) => await login(body))
                  .post('/register', async ({ body }) => await register(body))
            )

            .get("/accounts", async () => {
                try {
                    return await getAccounts();
                } catch (error) {
                    return {
                        error: "Gagal mengambil data",
                        detail: error.message
                    };
                }
            })

            .get("/me", async ({ query }) => {
                try {
                    const user = await usersCollection.findOne({ email: query.email });
                    return user || { error: "User tidak ditemukan" };
                } catch (error) {
                    return { error: error.message };
                }
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

    .onError(({ code, set, error }) => {
        if (code === "NOT_FOUND") {
            set.status = 404;
            return { error: "Endpoint tidak ditemukan" };
        }
        console.error("Global Error:", error);
        return {
            status: 500,
            error: error.message
        };
    });

export default app;

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT);
  console.log(`\x1b[32m
  +==================================================+
  ✅ Elysia Server running!
  🌐 http://localhost:${PORT}
  📂 File: index.js
  +==================================================+
`);
}
