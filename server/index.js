const express = require("express");
const app = express();
const path = require("path");
const React = require("../public/app.server");

app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/", function (req, res, next) {
  React(req, res);
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
