const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("public"));

// * matches sequence any number
// . any character individual

/**
 * first seeks for * and the matching characters, if not found then return false
 * otherwise remove the corresponding strings from the equasion.
 *
 * second seeks for an additional random character by looking for the .
 */

/**
 * aaaabc
 * a***bc
 *
 * bc
 * bc
 *
 * a*.ght*
 * aayghtt
 *
 * aa - and next char
 * tt
 *
 * gh
 */

const solution = (a, b) => {
  const createStringOnPatternStar = (pattern = "") => {
    let newString = "";

    pattern.split("").forEach((letter, index, array) => {
      if (letter === "*") {
        const lastLetter = newString.at(-1);
        newString += lastLetter;
      } else {
        newString += letter;
      }
    });

    return newString;
  };

  const findTheDotLetter = (pattern = "", word = "") => {
    let newString = "";

    pattern.split("").forEach((letter, index) => {
      if (letter === ".") {
        newString += word.at(index);
      } else {
        newString += letter;
      }
    });
  };
};

//console.log(solution("aaaabc", "a***bc"));

const findTheDotLetter = (pattern = "", word = "") => {
  let newString = "";

  pattern.split("").forEach((letter, index) => {
    console.log(newString);

    if (letter === ".") {
      newString += word.at(index);
    } else {
      newString += letter;
    }
  });

  return newString;
};

const createStringOnPatternStar = (pattern = "") => {
  let newString = "";

  pattern.split("").forEach((letter) => {
    console.log(newString);

    if (letter === "*") {
      const lastLetter = newString.at(-1);
      newString += lastLetter;
    } else {
      newString += letter;
    }
  });

  return newString;
};

const stringOne = findTheDotLetter("a***abc", "aaaaabc");
const stringTwo = createStringOnPatternStar(stringOne);

console.log(stringTwo);
console.log("aaaaabc" === stringTwo);

app.get("/", (_, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);
app.listen(13000, () => {});
