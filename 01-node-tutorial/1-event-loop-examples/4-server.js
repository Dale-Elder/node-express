const http = require("http");

const port = 5000;

const server = http.createServer((req, res) => {
  console.log("Request Event");
  res.end("Hello World");
});

server.listen({ port }, () => {
  console.log(`Server listening on port : ${port}...`);
});
