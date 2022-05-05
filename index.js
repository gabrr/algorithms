const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("public"));
const test = require("./tests/refactorHelper");

test.fromOldJssToComponent(``);

console.log(test.divWithClassToComponent(``));

console.log(test.fromClassesToComponent(``));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);
app.listen(3000, () => {});
