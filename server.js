const http = require("node:http");

const quoteData = {
    quote: "Stay curious.",
    author: "Anonymous"
}

const json = JSON.stringify(quoteData);

console.log("Object value:", quoteData);
console.log("Object type:", typeof quoteData);

console.log("JSON value:", json);
console.log("JSON type:", typeof json);

console.log("Author from object:", quoteData.author);
console.log("Author from JSON text:", json.author);

const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://localhost:4000")

  if (url.pathname === "/quote") {
    res.setHeader("Content-Type", "application/json")
    res.end(json)
    return
  }
  
    res.end("Stay curious. — Anonymous");
});

server.listen(4000, () => {
  console.log("Server running at http://localhost:4000");
});