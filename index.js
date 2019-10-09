// import routess from "@/src/routes/routes.js";

// var express = require("express");
// var app = express();

// var routes = require("./src/routes/routes");

// app.use("/", routess);

const http = require("http");
const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello World!");
  // server.use("/", routes);
});

const port = process.env.PORT || 3001;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
