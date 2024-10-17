import http from "node:http";

var server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello from the Server again!");
});

server.listen(4000, () => {
  console.log("Server Running on Port http://localhost:4000.");
});
