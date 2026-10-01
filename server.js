const http = require("node:http");

const quoteData = {
    quote: "Stay curious.",
    author: "Anonymous"
};

const json = JSON.stringify(quoteData);

const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://localhost:4000");

  if (url.pathname === "/") {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain; charset=utf-8");
    res.end("Welcome to Quote API. Visit /quote to get a quote.");
    return;
  } else if (url.pathname === "/quote") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(json);
    return
  } else {
    res.statusCode = 404;
    res.setHeader("Content-type", "text/plain; charset=utf-8");
    res.end("Route not found");
  }
});

server.listen(4000, () => {
  console.log("Server running at http://localhost:4000");
});