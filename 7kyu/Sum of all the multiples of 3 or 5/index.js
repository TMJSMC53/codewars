/*
Title: Sum of all the multiples of 3 or 5
Description: Your task is to write function findSum.

Upto and including n, this function will return the sum of all multiples of 3 and 5.

For example:

findSum(5) should return 8 (3 + 5)

findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)
*/
function findSum(n) {
  let total = 0;

  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0) total += i;
  }

  return total;
}
