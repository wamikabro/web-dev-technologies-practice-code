import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Convert import.meta.url to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/staticfiles", express.static(path.join(__dirname, "assets")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src/index.html"));
});

app.listen(2560, () => {
  console.log(`Server is listening to port http://localhost:2560`);
});
