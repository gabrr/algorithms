const squareListt = (arr) => {
    // only change code below this line
    let square = arr.filter(v => v % 1 === 0 && v > 0)
        .map(v => v * v)
    return square;
    // only change code above this line
};

// test your code
const squaredIntegers = squareListt([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
console.log(squaredIntegers);

//squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]) should return [16, 1764, 36].