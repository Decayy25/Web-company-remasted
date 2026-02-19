import { Elysia } from "elysia";
import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";

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