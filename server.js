const http = require("node:http");

const server = http.createServer((req, res) => {
  res.end("Quote API");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});