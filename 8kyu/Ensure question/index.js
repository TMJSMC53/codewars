/*
Title: Ensure question
Description: Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

For example (Input --> Output)

"Yes" --> "Yes?" 
"No?" --> "No?"
*/
// function ensureQuestion(s) {
//   // Code here
//   if (s.endsWith("?")) {
//     return s;
//   } else {
//     return `${s}?`;
//   }
// }

const ensureQuestion = (s) => {
  return s.endsWith("?") ? s : `${s}?`;
};
