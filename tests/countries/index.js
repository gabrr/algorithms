const copy = [
  [5, 4, 4],
  [4, 3, 4],
  [3, 2, 4],
  [2, 2, 2],
  [3, 3, 4],
  [1, 4, 4],
  [4, 1, 1],
];

/**
 * There must be a function to check 4 directions.
 * It should not look for a negative index.
 *
 * Loop starts with a number > 5, at the end it adds +1 to the COUNTER
 * As pointer goes through, it saves the path gone
 * as NUMBER INDEX INDEX as string.
 *
 * when it goes a direction and finds nothing loop stops.
 * it goes to the next 5 > 4 but before checks if 4 has been passed by.
 * if has passed by it, continues without adding one more.
 *
 * it goes right find 4, it does the same with it.
 **/

const solution = () => {
  const pathMade =
    "500, 401, 402, 412, 422, 410, 311, 321, 221, 231, 230, 232, 340, 341, 442, 452, 451, 150, 460, 161, 162";
  let count = 1;

  //is the next number different > yes > add one | no > add nothing.
  // the number is equal, and only one of the indexes have changed by 1.

  pathMade.split(", ").forEach((number, listIndex, list) => {
    const [country, index, indexTwo] = number;

    //if the next number is the last stop.
    if (list.at(-1) === [country, index, indexTwo].join("")) {
      return count++;
    }

    const [nextCountry, nextIndex, nextIndexTwo] = list[listIndex + 1];

    if (Number(country) !== Number(nextCountry)) {
      count++;
      return;
    }

    if (Number(country) === Number(nextCountry)) {
      //if both directions change
      if (index !== nextIndex && indexTwo !== nextIndexTwo) {
        count++;
      }
    }
  });

  return count;
};

exports.solution = solution;
