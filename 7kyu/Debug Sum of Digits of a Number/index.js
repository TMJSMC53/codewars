/*
Title: Debug Sum of Digits of a Number
Description: Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.

Example
123  => 6
223  => 7
1337 => 14

*/
function getSumOfDigits(integer) {
  let sum = 0;

  while (integer) {
    sum += integer % 10;
    integer = Math.floor(integer / 10);
  }

  return sum;
}
