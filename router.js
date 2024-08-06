const {
  userGET,
  userPOST,
  userPUT,
  userDELETE,
  userPATCH,
} = require("./controller");

function router(req, res) {
  switch (req.url) {
    case "/user-get":
      switch (req.method) {
        case "GET":
          userGET(req, res);
          break;
        default:
          res.writeHead(405, { "Content-Type": "text/plain" });
          res.end("Method Not Allowed");
      }
      break;
    case "/user-post":
      switch (req.method) {
        case "POST":
          userPOST(req, res);
          break;
        default:
          res.writeHead(405, { "Content-Type": "text/plain" });
          res.end("Method Not Allowed");
      }
      break;
    case "/user-put":
      switch (req.method) {
        case "PUT":
          userPUT(req, res);
          break;
        default:
          res.writeHead(405, { "Content-Type": "text/plain" });
          res.end("Method Not Allowed");
      }
      break;
    case "/user-patch":
      switch (req.method) {
        case "PATCH":
          userPATCH(req, res);
          break;
        default:
          res.writeHead(405, { "Content-Type": "text/plain" });
          res.end("Method Not Allowed");
      }
      break;
    case "/user-delete":
      switch (req.method) {
        case "DELETE":
          userDELETE(req, res);
          break;
        default:
          res.writeHead(405, { "Content-Type": "text/plain" });
          res.end("Method Not Allowed");
      }
      break;
  }
}

module.exports = router;
