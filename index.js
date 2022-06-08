const express = require("express");
const app = express();
const path = require("path");
const test = require('./tests/SnakeDashUnderline')
app.use(express.static("public"));

test.fromSpaceToUnderlineLowercase("Test Case With Space")
test.fromUnderlineToSpaceUpercase("test_case_with_space")


app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);
app.listen(3000, () => {});
