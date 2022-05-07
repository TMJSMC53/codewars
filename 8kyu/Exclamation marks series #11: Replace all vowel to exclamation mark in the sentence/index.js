/*
Title: Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples:
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
*/

// Short Solution
// function replace(s) {
//   //coding and coding....
//   return s.replace(/[aeiouAEIOU]/g, "!");
// }

// Without Regex
function replace(s) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  return s
    .split("")
    .map((item) => (vowels.includes(item) ? "!" : item))
    .join("");
}
