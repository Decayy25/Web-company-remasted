import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri, {
  serverSelectionTimeoutMS: 2000,
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