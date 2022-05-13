/*
Title: Maximum subarray sum
Description: The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

Examples: 
maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

*/
// Older way
// var maxSequence = function (arr) {
//   var maxSum = 0;
//   var currentSum = 0;

//   for (var i = 0; i < arr.length; i++) {
//     currentSum += arr[i];

//     if (currentSum <= 0) {
//       currentSum = 0;
//     }
//     maxSum = Math.max(maxSum, currentSum);
//   }

//   return maxSum;
// };

const maxSequence = (arr) => {
  let maxSum = 0;
  let currSum = 0;

  for (const x of arr) {
    currSum = Math.max(0, currSum + x);
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
};
