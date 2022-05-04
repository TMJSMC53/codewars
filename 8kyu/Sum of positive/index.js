/*
Title: Sum of positive
Description: You get an array of numbers, return the sum of all of the positives ones.

Examples: [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

function positiveSum(arr) {
  return arr.filter((num) => num > 0).reduce((sum, num) => sum + num, 0);
}
