/*
Title: Summing a number's digits
Description: Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.
*/

function sumDigits(num) {
  let sum = 0;

  while (num) {
    let digit = num % 10;
    sum += digit;
    num = (num - digit) / 10;
  }
  return Math.abs(sum);
}
