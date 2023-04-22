const http = require("http");
const port = 5000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Welcome to our home page</h1>");
  res.end();
});

server.listen({ port }, () => {
  console.log(`server is listening on port ${port}`);
});
