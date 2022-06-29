/*
TItle: Factorial
Description: Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial

*/
function factorial(n) {
  if (n === 0 || n === 1) return 1;

  for (let i = n - 1; i >= 0; i--) {
    n *= 1;
  }

  return n;
}
