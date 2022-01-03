/* 

Title: Beginner - Lost Without a Map

Description: Given an array of integers, return a new array with each value doubled.

Examples:

 [1, 2, 3] --> [2, 4, 6]

 */

// Long Solution
function maps(x) {
  return x.map((item) => item * 2);
}

// Function Export
module.exports = maps;
