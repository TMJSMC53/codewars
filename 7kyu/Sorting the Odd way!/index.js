/*
Title: Sorting the Odd way!
Description: Given an array of numbers, sort them in such a manner that all the odd numbers in the array are sorted in ascending order and the even numbers are sorted in descending order after the last odd number. For example [1,2,3,4,5,6,7,8,9] produces the output [1,3,5,7,9,8,6,4,2]. If the array contains decimals, round them down while checking for odd/even. The output must have the original numbers!

If there are no issues with the kata and you successfully completed it, please rank and upvote!

Parameters - array
Return - an array containing odd numbers in ascending order and the even numbers sorted in descending order after the last odd number. 
Examples - [1,2,3,4,5,6,7,8,9] => [1,3,5,7,9,8,6,4,2]
Pseudocode - filter through array and sort odd numbers at the beginning in ascending order and then sort the even numbers after the last odd number in descending order
*/

function sortItOut(array) {
  let odds = array.filter((num) => num % 2 === 1).sort((a, b) => a - b);
  let evens = array.filter((num) => num % 2 === 0).sort((a, b) => b - a);

  return odds.concat(evens);
}
