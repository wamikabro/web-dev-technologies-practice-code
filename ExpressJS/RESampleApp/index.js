import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";

const app = express();

// Convert import.meta.url to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/staticfiles", express.static(path.join(__dirname, "assets")));

// Regular Expression Approach
app.get(/^(.+)$/, (req, res) => {
  if (req.params[0] == "/") {
    // or directly use
    // const requestedPath = req.params[0] === "/" ? "index" : req.params[0];
    res.sendFile(path.join(__dirname, "src/index.html"));
  } else if (req.params[0] != "/") {
    const filePath = path.join(__dirname, "src", `${req.params[0]}.html`);

    // I can't wrap fs.access inside if statement because its async
    // it will only work when we will apply the logic inside its callback function
    fs.access(filePath, fs.constants.F_OK, (err) => {
      // if file doesn't exist | error argument isn't empty
      if (err) {
        res.sendFile(path.join(__dirname, "src/404.html"));
      } else {
        // although params[0] is eg. /about-us
        // concatinating inside join with comma would've made it eg. /about.us/.html
        // because path.join automatically add / slashes in between two things being concatinated
        // that's why we shouldn't concatinate but use this method:
        res.sendFile(filePath);
      }
    });
  }
});

/* Separate approach is So Long
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src/index.html"));
});

app.get("/about-us", (req, res) => {
  res.sendFile(path.join(__dirname, "src/about-us.html"));
});

app.get("/contact-us", (req, res) => {
  res.sendFile(path.join(__dirname, "src/contact-us.html"));
});
*/

app.listen(2561, () => {
  console.log(`Server is listening to port http://localhost:2561`);
});
