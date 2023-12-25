/**
 * abfdefa
 * bafdefa
 * bfadefa
 * bfdaefa
 * bfdeafa
 * bfdefaa
 * bfdefaa
 */

function permAlone(str) {
  const hasRepeating = (string = "") => /(.)\1+/.test(string);

  const length = str.length;
  let rounds = 0;
  let count = 0;

  const checkString = (string) => {
    if (!hasRepeating(string)) {
      count++;
    }

    if (rounds === length) {
      rounds = 0;
      return;
    }

    rounds++;

    const char = string.slice(0, 1);
    const chars = string.slice(1);
    const newString = chars + char;

    console.log({ char, chars });

    return checkString(newString);
  };

  checkString(str);

  return count;
}

exports.default = permAlone("abfdefa");
