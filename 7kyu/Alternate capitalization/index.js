/*
Title: Alternate capitalization
Description: Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

If you like this Kata, please try:

Indexed capitalization

Even-odd disparity

*/
function capitalize(s) {
  let splitToLowerCase = s.toLowerCase().split("");
  let splitToUpperCase = s.toUpperCase().split("");

  for (let i = 0; i < splitToLowerCase.length; i += 2) {
    splitToLowerCase[i] = splitToLowerCase[i].toUpperCase();
    for (let j = 0; j < splitToUpperCase.length; j += 2) {
      splitToUpperCase[i] = splitToUpperCase[i].toLowerCase();
    }
  }

  return [splitToLowerCase.join(""), splitToUpperCase.join("")];
}

console.log(capitalize("abcdef"));
