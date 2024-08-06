const { createServer } = require("node:http");
const router = require("./router");

const hostname = "localhost";
const port = 3000;

const server = createServer((req, res) => {
  router(req, res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
