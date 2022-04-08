const { channel } = require("diagnostics_channel");
const http = require("http");
const fs = require("fs").promises;

http
  .createServer(async (req, res) => {
    // how to response
    try {
      const data = await fs.readFile("./index.html");
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(data);
    } catch (err) {
      console.error(err);
      res.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
      res.end(err.message);
    }
  })
  .listen(8080, () => {
    // server connect
    console.log("wating server at 8080 port");
  });
