/*
Title: String incrementer
Description: Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number, the number 1 should be appended to the new string.

Examples: 

foo -> foo1
foobar23 -> foobar24
foo0042 -> foo0043
foo9 -> foo10
foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered

*/

function incrementString(strng) {
  let fnString = strng.slice(0, -1);
  let lastNum = strng.slice(-1).match(/[0-9]/g);
  return lastNum === null
    ? strng + "1"
    : lastNum != 9
    ? fnString + (+lastNum + 1)
    : incrementString(fnString) + "0";
}

// console.log(incrementString("foobar23"));
// console.log(incrementString("foo099"));
// console.log(incrementString("foobar999"));
