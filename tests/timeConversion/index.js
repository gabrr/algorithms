function timeConversion(s) {
  // Write your code here
  const [hour, min, sec, time] = s.match(/(\d{2})|(AM|PM)/g);
  let hourResult = hour;

  if (time === "PM") {
    hourResult = hour != 12 ? Number(hour) + 12 : hour;
  }

  if (time === "AM") {
    hourResult = hour != 12 ? hour : "00";
  }

  return `${hourResult}:${min}:${sec}`;
}

log(timeConversion("12:45:54AM"));
