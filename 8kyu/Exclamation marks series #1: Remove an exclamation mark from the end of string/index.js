/*
Description:
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi!!"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
*/

// With Regex
// function remove(string) {
//   //coding and coding....
//   return string.replace(/!$/, "");
// }

// Without Regex
function remove(string) {
  //coding and coding....
  return string.endsWith("!") ? string.slice(0, -1) : string;
}
