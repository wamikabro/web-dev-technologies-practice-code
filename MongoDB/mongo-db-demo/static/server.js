import express from "express";
import pkg from "mongodb";
const { MongoClient } = pkg; // Import MongoClient from CommonJS-based MongoDB package
import dotenv from "dotenv";
import { fileURLToPath } from "url"; // Import for converting the filename to path
import { dirname, join } from "path"; // Import dirname and join from path

// Get current directory from module URL
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, ".env") }); // Load environment variables from the .env file

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;

const connectionString = `mongodb+srv://${username}:${password}@wamikcluster0.j7n4m.mongodb.net/?retryWrites=true&w=majority&appName=WamikCluster0`;

async function init() {
  const client = new MongoClient(connectionString, {
    useUnifiedTopology: true,
  });
  await client.connect();

  const app = express();

  // Serve static files from the static directory
  app.use(express.static(__dirname));

  app.get("/get", async (req, res) => {
    const db = await client.db("adoption");
    const collection = db.collection("pets");

    const pets = await collection
      .find(
        {
          $text: { $search: req.query.search },
        },
        { _id: 0 }
      )
      .sort({ score: { $meta: "textScore" } })
      .limit(10)
      .toArray();

    res.json({ status: "ok", pets }).end();
  });

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
  });
}
init();
