const { MongoClient } = require('mongodb');
const uri = (process.env.MONGODB_URI || "mongodb://127.0.0.1:27017");

const client = new MongoClient(uri, {
  serverSelectionTimeoutMS: 2000
});

(async () => {
  await client.connect();
  console.log("MongoDB Connected");
})();

const server = Bun.serve({
  port: 5050,
  fetch() {
    return new Response("Server jalan!");
  },
});

console.log(`Server running di http://localhost:${server.port}`);