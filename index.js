const { log } = require("console");
const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("public"));

app.get("/", (_, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);
app.listen(3000, () => {});
