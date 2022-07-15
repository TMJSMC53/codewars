/*
Title: Simple Pig Latin
Description: Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

const pigIt = (str) => {
  let marks = ["!", "?", ".", ","];
  return str
    .split(" ")
    .map((word) => word.slice(1) + word[0] + (marks.includes(word) ? "" : "ay"))
    .join(" ");
};
