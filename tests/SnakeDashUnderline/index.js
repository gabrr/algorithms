const fromSpaceToUnderlineLowercase = (string = "") => {
  const result = string.replace(/\s/g, "_").toLocaleLowerCase();
  console.log(result);
};

const fromUnderlineToSpaceUpercase = (string = "") => {
  const result = string
    .replace(/_/g, " ")
    .replace(/(\b.|\s.)/g, (a) => a.toUpperCase());
  console.log(result);
};

module.exports = {
  fromSpaceToUnderlineLowercase,
  fromUnderlineToSpaceUpercase,
};
