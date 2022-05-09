/*
Title: Even or Odd - Which is Greater?
Description: Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

If the total of both even and odd numbers are identical return: "Even and Odd are the same"


*/

function evenOrOdd(str) {
  let totalEven = [];
  let totalOdd = [];

  str
    .split("")
    .map((value) =>
      value % 2 === 0 ? totalEven.push(value) : totalOdd.push(value)
    );
  totalEven = totalEven.reduce((a, b) => a + b * 1, 0);
  totalOdd = totalOdd.reduce((a, b) => a + b * 1, 0);

  if (totalEven > totalOdd) {
    return "Even is greater than Odd";
  } else if (totalEven < totalOdd) {
    return "Odd is greater than Even";
  } else {
    return "Even and Odd are the same";
  }
}
