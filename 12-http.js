const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage");
  }
  if (req.url === "/about") {
    res.end("About");
  }
  res.end(`
  <h1>Ooops!</h1>
  <p>We can't find the page you are looking for :(</p>
  <a href="/">Homepage</a>`);
});

server.listen(5000);
