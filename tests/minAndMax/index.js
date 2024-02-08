// OLD VERSION DOWN

// let teste = [1, 2, 3, 4, 5];

// //the code down below, it will get the lesser number and the higher number of a given array
// //in oerder to show the greatest sum of the array given first takes off the lesser number
// //of the array and sum all its values, and then, it will do the opposite to get the lesser sum.

// function miniMaxSum(arr) {
//     //getting the higher number
//     const findMax = (array) => {
//         let maxNumer = 0;
//         array.map(x => {
//             if (x > maxNumer) {
//                 maxNumer = x
//             }
//         })
//         return maxNumer;
//     }

//     //gettting the maximun to find the lesser
//     const findMin = (array = arr) => {
//         let minNumer = findMax(arr);
//         array.map(x => {
//             if (x < minNumer) {
//                 minNumer = x
//             }
//         })
//         return minNumer;
//     }
//     let numer1 = findMin();
//     let numer2 = findMax(arr);

//     const minCalculation = (teste, less) => {
//         let num = 0
//         const res = teste.map(x => {
//             num += x;
//         })

//         return num - less;
//     }

//     const min = minCalculation(arr, numer2);
//     const max = minCalculation(arr, numer1);

//     console.log(min, max);
// }

// miniMaxSum(teste)

// OLD VERSION ABOVE

const numbers = [5, 2, -4, 56, 1];

const minMax = (nums = [0]) => {
  //finding the max
  let max = nums[0];
  nums.map((x) => (x > max ? (max = x) : max));
  // finding the lesser
  let min = max;
  nums.map((x) => (x < min ? (min = x) : min));
  // taking the lesser out and suming all of them
  let lesser = nums
    .filter((x) => x !== max)
    .reduce((prev, next) => prev + next);

  // taking the heighest out and suming all of them
  let heighest = nums
    .filter((x) => x !== min)
    .reduce((prev, next) => prev + next);
  return `${lesser}, ${heighest}`;
};

console.log(minMax(numbers));
