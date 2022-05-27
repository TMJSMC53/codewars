/*
Title: Find the position!
Description: When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"

*/
function position(letter) {
  let letterPos = letter.charCodeAt(0) - 97 + 1;
  return `Position of alphabet: ${letterPos}`;
}
