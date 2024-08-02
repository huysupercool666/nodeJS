const { createServer } = require("node:http");
const hostname = "127.0.0.1";
const port = 3000;
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  if (req.method === "GET" && req.url === "/ping") {
      res.write("pong");
      res.end();
  } else {
    res.end("again");
  }
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
