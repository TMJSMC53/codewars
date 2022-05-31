/*
Title: Enumerable Magic #4 - True for None?
Description: Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items in the array. An empty list should return true.

*/
// Long solution
// function none(arr, fun) {
//   if (arr.some(fun)) {
//     return false;
//   } else {
//     return true;
//   }
// }

const none = (arr, fun) => !arr.some(fun);
