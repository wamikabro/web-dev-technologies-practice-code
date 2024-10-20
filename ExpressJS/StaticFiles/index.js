import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Convert import.meta.url to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the /assets folder using a permalink
app.use(
  "/myPermaLink", // URL path for static assets
  express.static(path.join(__dirname, "assets")) // Correct path conversion for static folder
);

// Example: http://localhost:1234/myPermaLink/myhtmlfile.html
app.get("/", (req, res) => {
  res.send(
    "Hello, you can now access other files using /myPermaLink.(yourfile.extension)"
  );
});

// Start the server
app.listen(1234, () => {
  console.log(`Listening at http://localhost:1234/`);
});
