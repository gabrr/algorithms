const express = require("express");
const app = express();
const path = require("path");
const { solution } = require("./tests/invertingLinkedList");
app.use(express.static("public"));

const data = solution();

let iterate = data;
while (iterate) {
  console.log(iterate.val);
  iterate = iterate.next;
}

app.get("/", (_, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);
app.listen(3000, () => {});
