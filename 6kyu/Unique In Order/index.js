/*
Title: Unique In Order
Description: Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

*/

// Parameters - Iterable
// Return - list item with no duplicate letters or numbers next to each other
// Examples - uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B'] , uniqueInOrder([1,2,2,3,3])       == [1,2,3]
// Pseudocode - take a string of letters/numbers and return it in a list in an array without the same letter or number next to each other

const uniqueInOrder = (iterable) => {
  if (typeof iterable === "string")
    return iterable
      .split("")
      .filter((val, idx, arr) => arr[idx] !== arr[idx + 1]);
  return iterable.filter((val, idx, arr) => arr[idx] !== arr[idx + 1]);
};
