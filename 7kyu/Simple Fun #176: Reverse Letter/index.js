/*
Title: Simple Fun #176: Reverse Letter
Description: Given a string str, reverse it omitting all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string

*/
const reversedLetter = (str) => {
  let reversed = str.split("").reverse().join("");

  return reversed.replace(/[^a-z]/g, "");
};
