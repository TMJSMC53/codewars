/*
Title: Switch/Case - Bug Fixing #6
Description: Oh no! Timmy's evalObject function doesn't work. He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function?
*/

function evalObject({ operation, a, b }) {
  switch (operation) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "/":
      return a / b;
    case "*":
      return a * b;
    case "%":
      return a % b;
    case "^":
      return Math.pow(a, b);
  }
}
