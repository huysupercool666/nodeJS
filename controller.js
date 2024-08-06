const userGET = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("User Get");
};
const userPOST = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("User Post");
};
const userPUT = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("User Put");
};
const userPATCH = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("User Patch");
};
const userDELETE = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("User Delete");
};

module.exports = {
  userGET,
  userPOST,
  userPUT,  
  userPATCH,
  userDELETE,
};
