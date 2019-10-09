// import routess from "@/src/routes/routes.js";

var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
// var routes = require("./src/routes/routes");

app.use(express.static("dist/index.html"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
