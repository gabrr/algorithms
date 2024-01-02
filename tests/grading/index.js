function gradingStudents(grades) {
  // Write your code here
  const result = [];

  const isLessThan40 = (number) => {
    let result = true;
    let numberResult = 0;

    for (let i of [2, 1, 0]) {
      if (number + i >= 40) {
        result = false;
        numberResult = number + i;
        continue;
      }

      numberResult = number;
    }

    return [result, numberResult];
  };

  const fiveDivisible = (number) => {
    const remainer = number % 5;

    if (5 - remainer < 3) {
      return number + (5 - remainer);
    }

    return number;
  };

  const round = (number) => {
    const [isLess, lessNumber] = isLessThan40(number);
    return isLess ? lessNumber : fiveDivisible(number);
  };

  for (let i = 0; i < grades.length; i++) {
    result.push(round(grades[i]));
  }

  return result;
}
