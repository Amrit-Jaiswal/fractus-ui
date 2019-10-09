// import routess from "@/src/routes/routes.js";

var express = require("express");
const path = require("path");
var app = express();
const resolve = file => path.resolve(__dirname, file);
var port = process.env.PORT || 3000;
// var routes = require("./src/routes/routes");

const serve = (path, cache) =>
  express.static(resolve(path), {
    maxAge: cache ? 1000 * 60 * 60 * 24 * 30 : 0
  });
app.use("/", serve("./dist", true));

app.get("*", (req, res) => {
  res.sendFile(`index.html`, { root: "dist" });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
