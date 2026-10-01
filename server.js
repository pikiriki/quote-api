const http = require("node:http");

const quoteData = {
    quote: "Stay curious.",
    author: "Anonymous"
}

const json = JSON.stringify(quoteData);

console.log(json);

console.log(quoteData);
console.log(quoteData.quote);
console.log(quoteData.author);
console.log(typeof quoteData);

const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://localhost:4000")

  if (url.pathname === "/quote") {
    res.end("Stay curious - Anonymous")
    return
  }
  
    res.end("Stay curious. — Anonymous");
});

server.listen(4000, () => {
  console.log("Server running at http://localhost:4000");
});