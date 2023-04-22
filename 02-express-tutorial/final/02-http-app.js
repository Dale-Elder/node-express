const http = require("http");
const { readFileSync } = require("fs");
const port = 5000;

// get all files
const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeImage = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  // console.log(req.method);
  console.log(req.url);

  // Home page
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(homePage);
    res.end();
  }
  // About page
  else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Welcome to our about page</h1>");
    res.end();
  }
  // Styles
  else if (url === "/styles.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.write(homeStyles);
    res.end();
  }
  // Image
  else if (url === "/logo.svg") {
    res.writeHead(200, { "Content-Type": "image/svg+xml" });
    res.write(homeImage);
    res.end();
  }
  // Logic
  else if (url === "/browser-app.js") {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.write(homeLogic);
    res.end();
  }
  // 404 page
  else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>Resource not found</h1>");
    res.end();
  }
});

// server listening to our port variable
server.listen({ port }, () => {
  console.log(`server is listening on port ${port}`);
});
