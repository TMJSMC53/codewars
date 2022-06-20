/*
Title: Two Oldest Ages
Description: The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

For example (Input --> Output):

[1, 2, 10, 8] --> [8, 10]
[1, 5, 87, 45, 8, 8] --> [45, 87]
[1, 3, 10, 0]) --> [3, 10]
*/
// const twoOldestAges = (ages) => {
//   let highestAges = [];
//   let sortedArr = ages.sort((a, b) => b - a);

//   for (let i = 0; i < ages.length; i++) {
//     highestAges.push(sortedArr[1]);
//     for (let j = 0; j < ages.length; j++) {
//       highestAges.push(sortedArr[0]);
//     }
//   }

//   return [highestAges[0], highestAges[1]];
// };

const twoOldestAges = (ages) => {
  let sortedArr = ages.sort((a, b) => a - b);

  return sortedArr.slice(-2);
};

// console.log(twoOldestAges([1, 5, 87, 45, 8, 8]));
// console.log(twoOldestAges([6, 5, 83, 5, 3, 18]));
