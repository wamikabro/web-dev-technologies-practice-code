import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Convert import.meta.url to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "filesToServe", "index.html"));
});

app.get("/about-us", (req, res) => {
  res.sendFile(path.join(__dirname, "filesToServe", "aboutUs.html"));
});

app.listen("1005", () => {
  console.log(`Listening at port http://localhost:1005/`);
});
