import express from "express";
import open from "open";
// we're returned with web application dealing with network requests using http
const app = express();

var port = 1000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  const address = `http://localhost:${port}`;
  console.log(`App is running on port ${address}`);
  open(address);
});
