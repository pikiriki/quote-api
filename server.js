const http = require("node:http");

const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://localhost:3000")

  if (url.pathname === "/quote") {
    res.end("Stay curious - Anonymous")
    return
  }
  
    res.end("Quote API");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});