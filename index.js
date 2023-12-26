const { log } = require("console");
const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("public"));

function timeConversion(s) {
  // Write your code here
  const [hour, min, sec, time] = s.match(/(\d{2})|(AM|PM)/g);
  let hourResult = hour;

  if (time === "PM") {
    hourResult = hour != 12 ? Number(hour) + 12 : hour;
  }

  if (time === "AM") {
    hourResult = hour == 12 ? "00" : hour;
  }

  return `${hourResult}:${min}:${sec}`;
}

log(timeConversion("01:45:54PM"));

app.get("/", (_, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);
app.listen(3000, () => {});
