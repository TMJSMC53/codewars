/*
Title: Sum of Odd Cubed Numbers
Description: Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
*/
function cubeOdd(arr) {
  let nums = arr.every((item) => item === "numbers");

  if (!nums) return undefined;

  let filteredArr = arr
    .filter((num) => num % 2 !== 0)
    .reduce((a, b) => a + b ** 3, 0);

  return filteredArr;
}
