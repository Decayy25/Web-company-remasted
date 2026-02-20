import { Elysia } from "elysia";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import path from "path";

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({
    path: path.resolve(process.cwd(), "../.env")
  });
}


const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverSelectionTimeoutMS: 10000,
  family: 4
});

try {
    await client.connect();
    console.log(`\x1b[32m
        +==================================================+
        ✅ MongoDB Connected
        +==================================================+
        `);
} catch (err) {
    console.error("❌ MongoDB Gagal Connect: ", err);
    process.exit(1);
}

export const db = client.db("myapp");
export const usersCollection = db.collection("users");